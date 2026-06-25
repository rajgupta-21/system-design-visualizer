"use client";

import { useState } from "react";

import {
  ArrowRight,
  Cloud,
  Database,
  Server,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";

const examples = [
  {
    tag: "backend",
    title: "URL Shortener",

    description:
      "Scalable URL shortening service with caching and high throughput architecture.",

    prompt: "Design a URL shortener handling 10k requests/sec",

    stack: ["Node.js", "Redis", "PostgreSQL"],

    nodes: [
      {
        name: "Users",
        icon: <Users size={20} />,
        color: "border-blue-500",
        bg: "bg-blue-500/10",
      },

      {
        name: "API Gateway",
        icon: <Zap size={20} />,
        color: "border-yellow-500",
        bg: "bg-yellow-500/10",
      },

      {
        name: "Redis Cache",
        icon: <Server size={20} />,
        color: "border-red-500",
        bg: "bg-red-500/10",
      },

      {
        name: "PostgreSQL",
        icon: <Database size={20} />,
        color: "border-cyan-500",
        bg: "bg-cyan-500/10",
      },
    ],
  },

  {
    tag: "data",

    title: "Real Time Analytics",

    description: "Event streaming pipeline processing millions of events.",

    prompt: "Build analytics pipeline for ecommerce platform",

    stack: ["Kafka", "Spark", "Warehouse"],

    nodes: [
      {
        name: "Events",
        icon: <Users size={20} />,
        color: "border-purple-500",
        bg: "bg-purple-500/10",
      },

      {
        name: "Kafka",
        icon: <Cloud size={20} />,
        color: "border-orange-500",
        bg: "bg-orange-500/10",
      },

      {
        name: "Processor",
        icon: <Zap size={20} />,
        color: "border-yellow-500",
        bg: "bg-yellow-500/10",
      },

      {
        name: "Warehouse",
        icon: <Database size={20} />,
        color: "border-green-500",
        bg: "bg-green-500/10",
      },
    ],
  },

  {
    tag: "auth",

    title: "OAuth Authentication",

    description: "Secure authentication system with JWT and refresh tokens.",

    prompt: "Design authentication with Google OAuth",

    stack: ["OAuth", "JWT", "Redis"],

    nodes: [
      {
        name: "Client",
        icon: <Users size={20} />,
        color: "border-blue-500",
        bg: "bg-blue-500/10",
      },

      {
        name: "Auth Server",
        icon: <ShieldCheck size={20} />,
        color: "border-purple-500",
        bg: "bg-purple-500/10",
      },

      {
        name: "JWT Store",
        icon: <Database size={20} />,
        color: "border-red-500",
        bg: "bg-red-500/10",
      },
    ],
  },
];

export default function ExamplesPage() {
  const [filter, setFilter] = useState("all");

  const [selected, setSelected] = useState<any>(null);

  const filtered =
    filter === "all"
      ? examples
      : examples.filter((item) => item.tag === filter);

  return (
    <main
      className="
min-h-screen
bg-zinc-950
text-white
"
    >
      {/* HERO */}

      <section
        className="
border-b
border-zinc-800
py-24
text-center
"
      >
        <div
          className="
inline-flex
items-center
gap-2
px-4
py-2

rounded-full

bg-purple-500/10

border
border-purple-500/30

text-purple-300
text-sm
"
        >
          <Sparkles size={16} />
          AI Generated Architectures
        </div>

        <h1
          className="
mt-8

text-5xl
md:text-6xl

font-bold

"
        >
          Explore
          <span
            className="
text-purple-400
"
          >
            AI System Designs
          </span>
        </h1>

        <p
          className="
mt-5

text-zinc-400

max-w-xl
mx-auto

text-lg

"
        >
          See how simple prompts become complete production architecture.
        </p>
      </section>

      {/* CONTENT */}

      <section
        className="
max-w-6xl
mx-auto

px-6
py-14

"
      >
        {/* FILTER */}

        <div
          className="
flex
gap-3
flex-wrap
mb-10
"
        >
          {["all", "backend", "data", "auth"].map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`

px-5
py-2

rounded-full

border

transition

${
  filter === tag
    ? "bg-purple-600 border-purple-600"
    : "border-zinc-700 text-zinc-400"
}

`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* CARDS */}

        <div
          className="
grid
md:grid-cols-2

gap-8

"
        >
          {filtered.map((example) => (
            <div
              key={example.title}
              onClick={() => setSelected(example)}
              className="

cursor-pointer

bg-zinc-900

border
border-zinc-800

rounded-2xl

overflow-hidden

hover:border-purple-500/50

transition

"
            >
              {/* ARCHITECTURE */}

              <div
                className="
h-64

bg-zinc-950

flex

items-center

justify-center

overflow-hidden

"
              >
                <div
                  className="
flex
items-center
gap-3
"
                >
                  {example.nodes.map((node, index) => (
                    <div
                      key={node.name}
                      className="
flex
items-center
"
                    >
                      <div
                        className={`

w-28
h-20

rounded-xl

border

${node.color}

${node.bg}

flex
flex-col

items-center

justify-center

shadow-lg

`}
                      >
                        <div>{node.icon}</div>

                        <p
                          className="
text-xs

mt-2

font-medium

"
                        >
                          {node.name}
                        </p>
                      </div>

                      {index !== example.nodes.length - 1 && (
                        <div
                          className="
flex
items-center

mx-2

"
                        >
                          <div
                            className="
w-10
h-px

bg-zinc-700

"
                          />

                          <ArrowRight size={14} className="text-zinc-600" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* DETAILS */}

              <div className="p-6">
                <h2
                  className="
text-xl
font-semibold
"
                >
                  {example.title}
                </h2>

                <p
                  className="
text-sm

text-zinc-400

mt-3
"
                >
                  {example.description}
                </p>

                <div
                  className="
flex
gap-2
flex-wrap

mt-5
"
                >
                  {example.stack.map((item) => (
                    <span
                      key={item}
                      className="
text-xs

px-3

py-1

rounded-full

bg-zinc-800

text-zinc-300

"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}

      {selected && (
        <div
          className="

fixed

inset-0

bg-black/70

flex

items-center

justify-center

p-6

z-50

"
        >
          <div
            className="

max-w-xl

w-full

bg-zinc-900

border

border-zinc-800

rounded-2xl

p-8

"
          >
            <button
              onClick={() => setSelected(null)}
              className="
float-right

text-zinc-400
"
            >
              <X />
            </button>

            <h2
              className="
text-3xl

font-bold

"
            >
              {selected.title}
            </h2>

            <p
              className="
mt-6

text-zinc-400

"
            >
              Generated from prompt:
            </p>

            <div
              className="

mt-3

bg-zinc-950

rounded-xl

p-4

font-mono

text-sm

"
            >
              "{selected.prompt}"
            </div>

            <h3
              className="
mt-8

font-semibold

"
            >
              Architecture Components
            </h3>

            <div
              className="
flex

gap-3

flex-wrap

mt-4

"
            >
              {selected.nodes.map((n: any) => (
                <div
                  key={n.name}
                  className="
px-4

py-2

rounded-xl

bg-purple-500/10

border

border-purple-500/30

text-purple-300

"
                >
                  {n.name}
                </div>
              ))}
            </div>

            <button
              className="
mt-8

w-full

py-3

rounded-xl

bg-purple-600

hover:bg-purple-500

font-semibold

"
            >
              Open In Visualizer
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
