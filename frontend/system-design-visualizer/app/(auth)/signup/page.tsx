"use client";
import { ValidateRegister } from "@/app/validations/page";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    const result = ValidateRegister.safeParse({ name, email, password });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      const message =
        fieldErrors.email?.[0] || fieldErrors.password?.[0] || "Invalid input";

      setError(message);
      return;
    }
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Login failed");
      }

      router.push("/dashboard");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black to-purple-900/40" />
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[120px] top-[-120px] right-[-120px]" />
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[120px] bottom-[-120px] left-[-120px]" />

      {/* Container */}
      <div className="relative w-full max-w-5xl grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div className="hidden md:block space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Start Designing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Scalable Systems
            </span>
          </h1>

          <p className="text-zinc-400 text-lg">
            Join the platform to build, visualize, and simulate real-world
            system architectures with AI assistance.
          </p>

          <div className="flex gap-3 flex-wrap">
            <span className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
              Templates
            </span>

            <span className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
              AI Builder
            </span>

            <span className="px-3 py-1 text-sm rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
              Real-time Graphs
            </span>
          </div>
        </div>

        {/* Right Side (Form Card) */}
        <div className="w-full">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-3xl font-semibold">Create Account</h2>
              <p className="text-zinc-400 mt-1">
                Get started with your system design workspace
              </p>
            </div>

            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                handleRegister();
              }}
            >
              {/* Name */}
              <div>
                <label className="text-sm text-zinc-300">Full Name</label>

                <input
                  type="text"
                  placeholder="John Doe"
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
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-zinc-300">Email</label>

                <input
                  type="email"
                  placeholder="you@example.com"
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
                  className="
                    w-full mt-2
                    bg-black/40
                    border border-white/10
                    rounded-xl
                    px-4 py-3
                    text-white
                    outline-none
                    focus:border-emerald-500/60
                    focus:ring-2
                    focus:ring-emerald-500/20
                    transition
                  "
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-sm text-zinc-300">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
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
                />
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
                  bg-gradient-to-r from-blue-400 to-purple-400
                  hover:opacity-90
                  transition
                "
              >
                Create Account
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
              Already have an account?{" "}
              <span
                className="text-blue-400 cursor-pointer hover:text-blue-300"
                onClick={() => {
                  router.push("/login");
                }}
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
