"use client";

import { Plus, Sparkles, Wand2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CreateDesignCard() {
  const router = useRouter();

  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-3xl
      border border-purple-500/20
      bg-gradient-to-br
      from-purple-500/20
      via-zinc-900
      to-blue-500/20
      p-8
      shadow-2xl
      "
    >
      {/* Glow */}
      <div
        className="
        absolute
        -top-20
        -right-20
        w-60
        h-60
        bg-purple-500/30
        blur-3xl
        rounded-full
        "
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="
          w-14
          h-14
          rounded-2xl
          flex
          items-center
          justify-center
          bg-gradient-to-r
          from-purple-500
          to-blue-500
          mb-6
          "
        >
          <Sparkles className="text-white" size={28} />
        </div>

        <h2 className="text-3xl font-bold">Create System Design</h2>

        <p
          className="
          text-zinc-400
          mt-3
          max-w-md
          leading-relaxed
        "
        >
          Describe your application and let AI generate scalable architecture
          diagrams, services, databases and communication flows.
        </p>

        <div
          className="
          mt-6
          flex
          flex-wrap
          gap-3
        "
        >
          <button
            onClick={() => router.push("/create")}
            className="
            flex
            items-center
            gap-2
            px-6
            py-3
            rounded-xl
            bg-gradient-to-r
            from-purple-400
            to-blue-400
            text-black
            font-semibold
            hover:opacity-90
            transition
            "
          >
            <Plus size={18} />
            New Design
          </button>

          <button
            className="
            flex
            items-center
            gap-2
            px-6
            py-3
            rounded-xl
            border
            border-white/10
            bg-white/5
            hover:bg-white/10
            transition
            "
          >
            <Wand2 size={18} />
            AI Generate
          </button>
        </div>

        {/* Features */}

        <div
          className="
          mt-8
          grid
          grid-cols-3
          gap-4
        "
        >
          <Feature title="AI" text="Architecture generation" />

          <Feature title="Graph" text="Interactive visualization" />

          <Feature title="Export" text="Save & share designs" />
        </div>
      </div>
    </div>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div
      className="
rounded-xl
bg-black/30
border
border-white/10
p-4
"
    >
      <h3
        className="
font-semibold
text-purple-300
"
      >
        {title}
      </h3>

      <p
        className="
text-xs
text-zinc-400
mt-1
"
      >
        {text}
      </p>
    </div>
  );
}
