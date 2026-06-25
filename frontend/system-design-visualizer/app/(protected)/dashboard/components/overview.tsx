export default function Overview() {
  const stats = [
    ["12", "Designs"],
    ["8", "Templates"],
    ["24", "AI Generations"],
    ["128", "Components"],
  ];

  return (
    <div
      className="
bg-white/5
border
border-white/10
rounded-2xl
p-6
"
    >
      <h2 className="text-xl font-semibold mb-5">Overview</h2>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((s) => (
          <div
            key={s[1]}
            className="
bg-black/20
p-5
rounded-xl
"
          >
            <h1 className="text-3xl font-bold">{s[0]}</h1>

            <p className="text-zinc-400">{s[1]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
