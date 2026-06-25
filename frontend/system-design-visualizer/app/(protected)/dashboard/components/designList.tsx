const designs = [
  "E-commerce System",
  "Realtime Chat System",
  "Video Streaming Platform",
  "URL Shortener",
];

export default function DesignsList() {
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
      <h2 className="text-xl font-semibold mb-5">Your Designs</h2>

      {designs.map((d) => (
        <div
          key={d}
          className="
flex
justify-between
items-center
py-4
border-b
border-white/10
"
        >
          <div>
            <h3>{d}</h3>

            <p className="text-sm text-zinc-400">Updated recently</p>
          </div>

          <button
            className="
px-4
py-2
rounded-lg
bg-purple-600/20
text-purple-300
"
          >
            Open
          </button>
        </div>
      ))}
    </div>
  );
}
