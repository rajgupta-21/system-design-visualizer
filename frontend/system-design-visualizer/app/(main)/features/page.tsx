import {
  Brain,
  Database,
  Download,
  History,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

export default function FeaturesPage() {
  return (
    <main className="bg-zinc-950 text-white">
      {/* HERO */}

      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6 py-28 text-center">
          <div
            className="
          inline-flex items-center gap-2
          px-4 py-2 rounded-full
          border border-purple-500/30
          bg-purple-500/10
          text-purple-300 text-sm
          "
          >
            <Sparkles size={16} />
            AI Powered System Design
          </div>

          <h1
            className="
          mt-8
          text-5xl md:text-7xl
          font-bold
          tracking-tight
          "
          >
            Design scalable systems
            <br />
            <span className="text-purple-400">with AI assistance</span>
          </h1>

          <p
            className="
          mt-6
          max-w-2xl
          mx-auto
          text-lg
          text-zinc-400
          "
          >
            Convert simple English ideas into production-ready system
            architecture diagrams. Generate, modify, explain and export complete
            designs instantly.
          </p>
        </div>
      </section>

      {/* CORE FEATURES */}

      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionTitle
          title="Everything you need to design systems"
          subtitle="Powerful tools that make architecture planning faster"
        />

        <div
          className="
        grid
        md:grid-cols-2
        gap-6
        mt-12
        "
        >
          <FeatureCard
            icon={<Brain />}
            title="AI Architecture Generation"
            description="
            Describe your idea in plain English.
            The AI generates complete node-edge
            architecture diagrams automatically.
            "
            badge="GPT Powered"
          />

          <FeatureCard
            icon={<Workflow />}
            title="Interactive System Canvas"
            description="
            Built using React Flow.
            Drag nodes, connect services,
            zoom and modify your architecture visually.
            "
            badge="React Flow"
          />

          <FeatureCard
            icon={<History />}
            title="Architecture Version History"
            description="
            Every generated design is stored as a version.
            Compare iterations and restore previous systems.
            "
            badge="Auto Saved"
          />

          <FeatureCard
            icon={<Download />}
            title="Export Professional Diagrams"
            description="
            Export your architecture as high quality images
            for documentation, presentations and interviews.
            "
            badge="PNG Export"
          />
        </div>
      </section>

      {/* AI ENGINE */}

      <section
        className="
      border-y
      border-zinc-800
      bg-zinc-900/30
      "
      >
        <div className="max-w-6xl mx-auto px-6 py-20">
          <SectionTitle
            title="Behind the AI engine"
            subtitle="How your architecture is generated intelligently"
          />

          <div
            className="
      grid md:grid-cols-3
      gap-5
      mt-12
      "
          >
            <MiniFeature
              icon={<Database />}
              title="Structured AI Output"
              text="
      AI responses are converted into
      validated JSON architecture graphs.
      "
            />

            <MiniFeature
              icon={<RefreshCcw />}
              title="Multi Turn Editing"
              text="
      Continue conversations.
      Add CDN, replace database,
      scale services without rebuilding.
      "
            />

            <MiniFeature
              icon={<ShieldCheck />}
              title="Reliable Generation"
              text="
      Validation, retries and rate limiting
      keep generated designs consistent.
      "
            />
          </div>
        </div>
      </section>

      {/* FLOW */}

      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionTitle
          title="From idea to architecture"
          subtitle="A simple workflow powered by AI"
        />

        <div
          className="
      grid md:grid-cols-4
      gap-6
      mt-12
      "
        >
          <Step number="01" title="Describe" text="Explain your system idea" />

          <Step number="02" title="Generate" text="AI creates architecture" />

          <Step number="03" title="Modify" text="Improve using prompts" />

          <Step number="04" title="Export" text="Share your design" />
        </div>
      </section>

      {/* TECH */}

      <section
        className="
      border-t border-zinc-800
      "
      >
        <div className="max-w-6xl mx-auto px-6 py-20">
          <SectionTitle
            title="Built with modern technologies"
            subtitle="Production-grade full stack architecture"
          />

          <div
            className="
      grid grid-cols-2 md:grid-cols-5
      gap-4
      mt-10
      "
          >
            {["Next.js", "React Flow", "Node.js", "PostgreSQL", "Redis"].map(
              (item) => (
                <div
                  key={item}
                  className="
          bg-zinc-900
          border border-zinc-800
          rounded-xl
          p-5
          text-center
          hover:border-purple-500
          transition
          "
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <h2
        className="
text-3xl md:text-4xl
font-bold
"
      >
        {title}
      </h2>

      <p
        className="
mt-3
text-zinc-400
"
      >
        {subtitle}
      </p>
    </div>
  );
}

function FeatureCard({ icon, title, description, badge }: any) {
  return (
    <div
      className="
group
bg-zinc-900
border border-zinc-800
rounded-2xl
p-7
hover:border-purple-500/50
transition
"
    >
      <div
        className="
w-12 h-12
rounded-xl
bg-purple-500/10
text-purple-400
flex items-center justify-center
"
      >
        {icon}
      </div>

      <h3
        className="
mt-5
text-xl
font-semibold
"
      >
        {title}
      </h3>

      <p
        className="
mt-3
text-zinc-400
leading-relaxed
"
      >
        {description}
      </p>

      <span
        className="
inline-block
mt-5
text-xs
px-3 py-1
rounded-full
bg-purple-500/10
text-purple-300
"
      >
        {badge}
      </span>
    </div>
  );
}

function MiniFeature({ icon, title, text }: any) {
  return (
    <div
      className="
bg-zinc-900
border border-zinc-800
rounded-xl
p-6
"
    >
      <div className="text-purple-400">{icon}</div>

      <h3
        className="
mt-4
font-semibold
"
      >
        {title}
      </h3>

      <p
        className="
mt-2
text-sm
text-zinc-400
"
      >
        {text}
      </p>
    </div>
  );
}

function Step({ number, title, text }: any) {
  return (
    <div
      className="
border
border-zinc-800
rounded-xl
p-6
bg-zinc-900
"
    >
      <div
        className="
text-purple-400
font-mono
"
      >
        {number}
      </div>

      <h3 className="mt-4 font-semibold">{title}</h3>

      <p className="text-zinc-400 text-sm mt-2">{text}</p>
    </div>
  );
}
