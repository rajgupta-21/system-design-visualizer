"use client";
import { validateLogin } from "@/app/validations/page";
import { useRouter } from "next/navigation";
import { useState } from "react";
// ✅ Move this to a proper file later: /lib/validations/auth.ts

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setError(null);

    const result = validateLogin.safeParse({ email, password });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      const message =
        fieldErrors.email?.[0] || fieldErrors.password?.[0] || "Invalid input";

      setError(message);
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result.data),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Login failed");
      }

      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-blue-900/40" />
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[120px] top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[120px] bottom-[-120px] right-[-120px]" />

      {/* Container */}
      <div className="relative w-full max-w-5xl grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side (Branding) */}
        <div className="hidden md:block space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Build System Designs <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Visually & Intelligently
            </span>
          </h1>

          <p className="text-zinc-400 text-lg">
            Design scalable architectures using templates, AI assistance, and
            real-time graph visualization.
          </p>

          <div className="flex gap-3">
            <span className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
              AI Powered
            </span>

            <span className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
              Real-time Graphs
            </span>
          </div>
        </div>

        {/* Right Side (Login Card) */}
        <div className="w-full">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-3xl font-semibold">Welcome Back</h2>
              <p className="text-zinc-400 mt-1">
                Login to continue building architectures
              </p>
            </div>

            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              {/* Email */}
              <div>
                <label className="text-sm text-zinc-300">Email</label>

                <input
                  type="email"
                  placeholder="raj@example.com"
                  autoComplete="email"
                  className="
                    w-full mt-2
                    bg-black/40
                    border border-white/10
                    rounded-xl
                    px-4 py-3
                    text-white
                    outline-none
                    focus:border-purple-500/60
                    focus:ring-2
                    focus:ring-purple-500/20
                    transition
                  "
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-sm text-zinc-300">Password</label>

                <input
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="
                    w-full mt-2
                    bg-black/40
                    border border-white/10
                    rounded-xl
                    px-4 py-3
                    text-white
                    outline-none
                    focus:border-blue-500/60
                    focus:ring-2
                    focus:ring-blue-500/20
                    transition
                  "
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              {/* Options */}
              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2 text-zinc-400">
                  <input type="checkbox" className="accent-purple-500" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-purple-400 hover:text-purple-300"
                >
                  Forgot password?
                </button>
              </div>
              {error && <div className="text-red-300">{error}</div>}

              {/* Button */}
              <button
                type="submit"
                className="
                  w-full
                  py-3
                  rounded-xl
                  font-semibold
                  text-black
                  bg-gradient-to-r from-purple-400 to-blue-400
                  hover:opacity-90
                  transition
                "
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="h-px bg-white/10 flex-1" />
              <span className="text-zinc-500 text-sm">OR</span>
              <div className="h-px bg-white/10 flex-1" />
            </div>

            {/* OAuth */}
            <button
              className="
              w-full
              border border-white/10
              bg-white/5
              py-3
              rounded-xl
              hover:bg-white/10
              transition
              text-white
            "
            >
              Continue with GitHub
            </button>

            {/* Footer */}
            <p className="text-center text-sm text-zinc-400 mt-6">
              Don’t have an account?{" "}
              <span
                className="text-purple-400 cursor-pointer hover:text-purple-300"
                onClick={() => {
                  router.push("/signup");
                }}
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
