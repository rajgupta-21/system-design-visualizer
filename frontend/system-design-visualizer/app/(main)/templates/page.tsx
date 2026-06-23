export default function TemplatesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">Templates</h1>

      <div className="grid md:grid-cols-3 gap-5">
        <Template title="E-commerce" icon="🛍️" />
        <Template title="Ride Sharing" icon="🚗" />
        <Template title="Chat App" icon="💬" />
      </div>
    </div>
  );
}

function Template({ title, icon }: any) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
      <button className="mt-4 w-full border border-zinc-700 py-2 rounded">
        Use template
      </button>
    </div>
  );
}
