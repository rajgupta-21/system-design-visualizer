export default function TemplatesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
      <Section title="🧩 Templates">
        <p className="text-zinc-400">
          Start quickly with predefined system design architectures.
        </p>
      </Section>

      <div className="grid md:grid-cols-3 gap-5">
        <Template
          title="E-commerce"
          icon="🛍️"
          description="Products, cart, payment and order management system."
        />

        <Template
          title="Ride Sharing"
          icon="🚗"
          description="Users, drivers, location tracking and trip services."
        />

        <Template
          title="Chat App"
          icon="💬"
          description="Real-time messaging with users and communication flow."
        />
      </div>
    </div>
  );
}

function Template({
  title,
  icon,
  description,
}: {
  title: string;
  icon: string;
  description: string;
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4">
      <div className="text-3xl">{icon}</div>

      <h3 className="font-semibold text-lg">{title}</h3>

      <p className="text-sm text-zinc-400">{description}</p>

      <button className="w-full border border-zinc-700 py-2 rounded-lg hover:bg-zinc-800 transition">
        Use template
      </button>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold">{title}</h2>

      {children}
    </section>
  );
}
