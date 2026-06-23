export default function DocsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      <Section title="Getting Started">Install, env setup, run server.</Section>

      <Section title="API Reference">/generate, /auth, /diagrams</Section>

      <Section title="Data Schema">JSON node-edge structure.</Section>
    </div>
  );
}

function Section({ title, children }: any) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      <p className="text-zinc-400">{children}</p>
    </div>
  );
}
