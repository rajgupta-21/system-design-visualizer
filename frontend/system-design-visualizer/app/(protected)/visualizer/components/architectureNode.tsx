"use client";

import { Handle, Position } from "@xyflow/react";

interface ArchitectureNodeProps {
  data: {
    title: string;
    description: string;
    type: string;
    typeKey: string;
    color: string;
    image?: string;
  };
}
const TYPE_EMOJI: Record<string, string> = {
  client: "🖥️",
  gateway: "🔀",
  service: "⚙️",
  database: "🗄️",
  cache: "⚡",
  queue: "📬",
  worker: "🔧",
  storage: "📦",
  cdn: "🌐",
  external: "🔌",
  monitoring: "📊",
  auth: "🔐",
};

export default function ArchitectureNode({ data }: ArchitectureNodeProps) {
  const emoji = TYPE_EMOJI[data.typeKey] ?? "⚙️";

  const iconBg = data.color + "22";

  return (
    <div
      style={{ borderColor: data.color }}
      className="w-56 bg-zinc-900 border-2 rounded-lg overflow-hidden"
    >
      <div style={{ backgroundColor: data.color }} className="h-1 w-full" />

      <div className="p-3">
        <div className="flex items-center gap-2">
          <div
            style={{ backgroundColor: iconBg }}
            className="w-9 h-9 rounded-md flex items-center justify-center shrink-0 text-base"
          >
            {emoji}
          </div>

          <div className="min-w-0">
            <p className="text-white font-semibold text-sm leading-tight truncate">
              {data.title}
            </p>

            <span
              style={{ backgroundColor: data.color }}
              className="inline-block text-xs font-semibold px-2 py-0.5 rounded mt-1 text-black"
            >
              {data.typeKey}
            </span>
          </div>
        </div>

        <p className="mt-2 text-xs text-zinc-400 leading-relaxed line-clamp-2">
          {data.description}
        </p>
      </div>

      <Handle
        type="target"
        position={Position.Left}
        style={{
          backgroundColor: data.color,
          border: "none",
          width: 10,
          height: 10,
        }}
      />
      <Handle
        type="source"
        position={Position.Right}
        style={{
          backgroundColor: data.color,
          border: "none",
          width: 10,
          height: 10,
        }}
      />
    </div>
  );
}
