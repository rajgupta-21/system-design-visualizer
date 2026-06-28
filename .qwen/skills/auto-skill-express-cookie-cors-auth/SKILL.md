---
name: express-cookie-cors-auth
description: Diagnose and fix "Unauthorized" / cookie-not-set errors in Express + cookie-based JWT auth stacks (frontend on a different port than the backend)
source: auto-skill
extracted_at: '2026-06-29T00:00:00.000Z'
---

When a frontend and backend run on different ports (e.g. Next.js on `:3000`, Express on `:4000`) and the auth flow uses an `httpOnly` cookie set by the server, the symptom is almost always `"Unauthorized"` from an `authMiddleware` even though login "succeeded". Walk this checklist in order:

## 1. Confirm the request that's failing is actually sending the cookie

Open DevTools → Network → failing request → Headers → `Cookie:`. If empty, the cookie was never set or never attached. If present, the issue is token verification (jump to step 4).

## 2. Check `credentials: "include"` on the frontend `fetch` calls that **set** the cookie

This is the most common bug. The login/register `POST` calls must include `credentials: "include"` or the browser silently drops `Set-Cookie` on cross-origin responses.

```ts
// WRONG — cookie will be dropped by the browser
fetch("http://localhost:4000/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});

// RIGHT
fetch("http://localhost:4000/auth/login", {
  method: "POST",
  credentials: "include",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});
```

Apply this to **every** fetch that needs the cookie: login, register, and any subsequent authenticated calls.

## 3. Check the backend `res.cookie` config

For localhost dev, the minimum safe config:

```ts
res.cookie("token", token, {
  httpOnly: true,
  secure: false,        // false on http://localhost
  sameSite: "lax",      // "lax" is fine for same-site localhost
  domain: "localhost",  // <-- often the missing piece
  path: "/",
  maxAge: 7 * 24 * 60 * 60 * 1000,
});
```

Without `domain`, the browser may attach the cookie to the wrong host (e.g. cookie set on `127.0.0.1` won't be sent to `localhost`). Match `domain` to whatever the frontend uses.

## 4. Check CORS config on the backend

```ts
app.use(cors({
  origin: "http://localhost:3000",  // explicit origin, not "*"
  credentials: true,
}));
```

`origin: "*"` is incompatible with `credentials: true`. Browsers reject it.

## 5. If the cookie is being sent but the JWT still fails

- Check `JWT_SECRET` is defined and identical between `generateToken` and `verifyToken`. If `process.env.JWT_SECRET` is `undefined`, `generateToken` will throw before the cookie is set — check the actual `.env` file, not just whether `dotenv` is imported.
- A mismatch returns the `"Session expired. Please login again"` branch (or `null` from `verifyToken`), not `"Unauthorized"`. If you see `"Unauthorized"` specifically, the cookie isn't reaching the middleware at all.

## 6. Watch for duplicate-submit bugs

When fixing signup/login, audit the form's submit button. A `type="submit"` button with **both** a form `onSubmit` handler and an `onClick` handler will fire the action twice — the second call may fail because the user was just created.

## Recovery steps after the fix

The cookie config change only affects cookies set **after** the change. Users with old cookies must log out and log back in. For local dev, just clear cookies for `localhost` in DevTools → Application → Cookies.

## Quick diagnostic tree

```
"Unauthorized" from authMiddleware
├─ Network tab: is Cookie header present on the failing request?
│  ├─ No  → check credentials: "include" on the fetch that SET the cookie (step 2)
│  │       and check res.cookie config (step 3) + CORS (step 4)
│  └─ Yes → JWT verification is failing
│           ├─ "Session expired. Please login again" → JWT_SECRET mismatch or expired token
│           └─ "Invalid authentication" → JWT_SECRET undefined at verify time
```

**Why this skill exists:** In one debug session on a Next.js + Express cookie-JWT setup, the cookie config (with `domain: "localhost"`) was suspected but the actual root cause was the missing `credentials: "include"` on the login/register fetches. The cookie was being set server-side but silently dropped by the browser on the cross-origin response. Always start at step 1 and confirm before changing server config.
