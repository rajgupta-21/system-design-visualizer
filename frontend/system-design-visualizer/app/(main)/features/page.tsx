// app/features/page.tsx
export default function FeaturesPage() {
  return (
    <div>
      <div className="text-center py-20 border-b border-zinc-800">
        <h1 className="text-5xl font-bold">
          Everything you need to design systems
        </h1>
        <p className="text-zinc-400 mt-4">
          From AI generation to shareable diagrams — all in one place.
        </p>
      </div>

      {/* CORE GRID */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-5">
        <Card title="AI Generation" icon="🤖">
          Type a prompt → get structured system design graph in seconds.
        </Card>

        <Card title="Interactive Canvas" icon="🗺️">
          Drag, zoom, modify nodes using React Flow.
        </Card>

        <Card title="Version History" icon="📜">
          Every change is saved as a version automatically.
        </Card>

        <Card title="Export PNG" icon="📤">
          Export diagrams as high-res images.
        </Card>
      </section>
    </div>
  );
}

function Card({ title, icon, children }: any) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm">{children}</p>
    </div>
  );
}
