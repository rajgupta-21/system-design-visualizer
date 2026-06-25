export default function WelcomeCard() {
  return (
    <div
      className="
rounded-2xl
p-8
border
border-white/10
bg-gradient-to-br
from-purple-900/30
to-blue-900/20
"
    >
      <h1
        className="
text-3xl
font-bold
"
      >
        Welcome back, Raj 👋
      </h1>

      <p className="text-zinc-400 mt-3">
        Design scalable systems visually and intelligently.
      </p>

      <div className="flex gap-4 mt-6">
        <button
          className="
px-6
py-3
rounded-xl
bg-gradient-to-r
from-purple-500
to-blue-500
font-semibold
"
        >
          + New Design
        </button>

        <button
          className="
px-6
py-3
rounded-xl
border
border-white/20
"
        >
          Explore Templates
        </button>
      </div>
    </div>
  );
}
