export default function DocsPage() {
  return (
    <div
      className="
max-w-5xl
mx-auto
px-6
py-16
space-y-20

text-white
"
    >
      {/* HERO */}

      <section>
        <h1
          className="
text-5xl
font-bold
"
        >
          AI System Design Visualizer Docs
        </h1>

        <p
          className="
mt-4

text-zinc-400

max-w-2xl
"
        >
          Understand how the platform converts natural language prompts into
          interactive production-ready system architecture diagrams.
        </p>
      </section>

      <Section title="🚀 What is this project?">
        <p>
          AI System Design Visualizer is an AI powered architecture assistant.
          Users describe a system in plain English and the AI generates a
          structured architecture containing nodes, connections, explanations
          and tradeoffs. Example:
        </p>

        <Code>"Design a scalable chat application like Slack"</Code>

        <p className="mt-4">The AI returns:</p>

        <ul
          className="
list-disc
ml-6
mt-3
text-zinc-400
space-y-2
"
        >
          <li>Load balancers</li>
          <li>Backend services</li>
          <li>Databases</li>
          <li>Caching layers</li>
          <li>Message queues</li>
          <li>Architecture explanations</li>
        </ul>
      </Section>

      <Section title="🧑‍💻 How users interact">
        <div
          className="
space-y-5
"
        >
          <Step
            number="1"
            title="Enter system requirement"
            text="User describes the application they want to design."
          />

          <Step
            number="2"
            title="AI generates architecture"
            text="The prompt is processed and converted into structured nodes and edges."
          />

          <Step
            number="3"
            title="Visual editing"
            text="Users can drag, modify and explore individual components."
          />

          <Step
            number="4"
            title="Save and export"
            text="Architecture versions can be stored and exported."
          />
        </div>
      </Section>

      <Section title="🏗️ System Architecture">
        <div
          className="
bg-zinc-900
border
border-zinc-800

rounded-xl

p-6

font-mono

text-sm

space-y-3

"
        >
          <p>User</p>

          <p>↓</p>

          <p>Next.js Frontend</p>

          <p>↓</p>

          <p>Express Backend API</p>

          <p>↓</p>

          <p>AI Processing Layer</p>

          <p>↓</p>

          <p>PostgreSQL + Redis</p>
        </div>
      </Section>

      <Section title="🤖 AI Generation Pipeline">
        <div className="space-y-4">
          <Pipeline
            title="1. Prompt Processing"
            desc="User input is cleaned and converted into an optimized AI instruction."
          />

          <Pipeline
            title="2. LLM Generation"
            desc="OpenAI model generates architecture JSON instead of plain text."
          />

          <Pipeline
            title="3. Validation"
            desc="Generated output is validated using schema validation."
          />

          <Pipeline
            title="4. Visualization"
            desc="JSON is converted into interactive nodes and edges."
          />
        </div>
      </Section>

      <Section title="🧰 Technology Stack">
        <div
          className="
grid
md:grid-cols-3
gap-4

"
        >
          <Card title="Frontend">Next.js React Tailwind CSS React Flow</Card>

          <Card title="Backend">
            Node.js Express TypeScript JWT Authentication
          </Card>

          <Card title="Infrastructure">PostgreSQL Prisma ORM Redis Docker</Card>
        </div>
      </Section>

      <Section title="🗄 Database Design">
        <Code>User └── Diagram └── Versions └── Nodes + Edges</Code>

        <p className="mt-4">
          Each generated architecture is stored as a version. Users can restore
          previous designs anytime.
        </p>
      </Section>

      <Section title="🔌 API Reference">
        <Api
          method="POST"
          endpoint="/api/generate"
          desc="Generate architecture from prompt"
        />

        <Api
          method="POST"
          endpoint="/api/diagrams"
          desc="Save generated diagram"
        />

        <Api
          method="GET"
          endpoint="/api/share/:id"
          desc="Fetch shared architecture"
        />

        <Api method="POST" endpoint="/api/auth" desc="User authentication" />
      </Section>
      <Section title="📦 Data Schema">
        <Code>
          {`
{
  "nodes": [
    {
      "id": "api",
      "label": "API Server",
      "type": "backend"
    }
  ],

  "edges": [
    {
      "from": "client",
      "to": "api"
    }
  ]
}
    `}
        </Code>
      </Section>

      <Section title="⚡ Performance Features">
        <ul
          className="
list-disc
ml-6
space-y-2
text-zinc-400
"
        >
          <li>Redis caching reduces repeated AI generation cost.</li>

          <li>Rate limiting protects AI endpoints.</li>

          <li>Versioning allows architecture history.</li>

          <li>Schema validation prevents broken diagrams.</li>
        </ul>
      </Section>

      <Section title="🔮 Future Improvements">
        <ul
          className="
list-disc
ml-6
space-y-2
text-zinc-400
"
        >
          <li>Real-time collaboration</li>

          <li>Export architecture as Terraform</li>

          <li>AWS/GCP architecture recommendations</li>

          <li>AI system design interview mode</li>

          <li>Automatic cost estimation</li>
        </ul>
      </Section>
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
    <section>
      <h2
        className="
text-3xl
font-bold
mb-5
"
      >
        {title}
      </h2>

      <div
        className="
text-zinc-400
leading-7
space-y-4
"
      >
        {children}
      </div>
    </section>
  );
}

function Step({ number, title, text }: any) {
  return (
    <div
      className="
flex
gap-4

bg-zinc-900

border

border-zinc-800

rounded-xl

p-5
"
    >
      <div
        className="
w-8
h-8

rounded-full

bg-purple-600

flex
items-center
justify-center

font-bold
"
      >
        {number}
      </div>

      <div>
        <h3
          className="
font-semibold
text-white
"
        >
          {title}
        </h3>

        <p
          className="
text-zinc-400
"
        >
          {text}
        </p>
      </div>
    </div>
  );
}

function Pipeline({ title, desc }: any) {
  return (
    <div
      className="
bg-zinc-900

border

border-zinc-800

rounded-xl

p-5
"
    >
      <h3
        className="
font-semibold
text-white
"
      >
        {title}
      </h3>

      <p>{desc}</p>
    </div>
  );
}

function Card({ title, children }: any) {
  return (
    <div
      className="
bg-zinc-900

border

border-zinc-800

rounded-xl

p-5
"
    >
      <h3
        className="
font-semibold

mb-3
"
      >
        {title}
      </h3>

      <p
        className="
text-zinc-400
whitespace-pre-line
"
      >
        {children}
      </p>
    </div>
  );
}

function Api({ method, endpoint, desc }: any) {
  return (
    <div
      className="
bg-zinc-900

border

border-zinc-800

rounded-xl

p-5

flex

justify-between

items-center

"
    >
      <div>
        <p
          className="
font-mono
text-purple-400
"
        >
          {method}
        </p>

        <p
          className="
font-mono
"
        >
          {endpoint}
        </p>
      </div>

      <p
        className="
text-zinc-400
"
      >
        {desc}
      </p>
    </div>
  );
}

function Code({ children }: any) {
  return (
    <pre
      className="
bg-zinc-950

border

border-zinc-800

rounded-xl

p-5

mt-4

overflow-x-auto

text-sm

text-purple-300

"
    >
      {children}
    </pre>
  );
}
