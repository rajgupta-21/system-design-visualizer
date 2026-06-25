export default function Topbar() {
  return (
    <header
      className="
h-20
border-b
border-white/10
flex
items-center
justify-between
px-8
"
    >
      <h2 className="text-xl font-semibold">Dashboard</h2>

      <input
        placeholder="Search designs, templates..."
        className="
w-96
bg-white/5
border
border-white/10
rounded-xl
px-4
py-2
outline-none
"
      />

      <div className="flex gap-5">
        <button>🌙</button>

        <div
          className="
w-10
h-10
rounded-full
bg-purple-600
flex
items-center
justify-center
"
        >
          R
        </div>
      </div>
    </header>
  );
}
