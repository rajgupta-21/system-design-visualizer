const menu = [
  "Dashboard",
  "My Designs",
  "Templates",
  "Visualizer",
  "Components",
  "AI Assistant",
  "Settings",
];

export default function Sidebar() {
  return (
    <aside
      className="
hidden md:flex
w-72
border-r border-white/10
bg-black/20
p-6
flex-col
"
    >
      <h1
        className="
text-2xl
font-bold
mb-10
bg-gradient-to-r
from-purple-400
to-blue-400
text-transparent
bg-clip-text
"
      >
        ◆ DesignAI
      </h1>

      <div className="space-y-2 flex-1">
        {menu.map((item, index) => (
          <div
            key={item}
            className={`
px-4 py-3 rounded-xl cursor-pointer
transition
${
  index === 0
    ? "bg-purple-600/30 text-purple-300"
    : "hover:bg-white/5 text-zinc-400"
}
`}
          >
            {item}
          </div>
        ))}
      </div>

      <div
        className="
rounded-xl
p-5
bg-gradient-to-br
from-purple-900/40
to-blue-900/20
border border-purple-500/20
"
      >
        <h3 className="font-semibold">Upgrade Pro ✨</h3>

        <p className="text-sm text-zinc-400 mt-2">Unlimited AI generations</p>

        <button
          className="
mt-4
w-full
py-2
rounded-lg
bg-purple-600
"
        >
          Upgrade
        </button>
      </div>
    </aside>
  );
}
