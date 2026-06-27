"use client";

import { Handle, Position } from "@xyflow/react";
import Image from "next/image";

interface ArchitectureNodeProps {
  data: {
    title: string;
    description: string;
    image?: string;
    color?: string;
    type?: string;
  };
}

export default function ArchitectureNode({ data }: ArchitectureNodeProps) {
  return (
    <div
      className={`
      w-72
      rounded-2xl
      bg-zinc-900/90
      backdrop-blur-xl
      border
      shadow-xl
      overflow-hidden
      transition
      hover:scale-105
      `}
      style={{
        borderColor: data.color || "#8b5cf6",
      }}
    >
      {/* top color line */}
      <div
        className="h-1 w-full"
        style={{
          background: data.color || "#8b5cf6",
        }}
      />

      <div className="p-4">
        <div className="flex items-center gap-3">
          {/* Image */}
          <div
            className="
            w-12
            h-12
            rounded-xl
            bg-black
            flex
            items-center
            justify-center
            overflow-hidden
            "
          >
            {data.image ? (
              <Image src={data.image} width={48} height={48} alt={data.title} />
            ) : (
              <span className="text-xl">⚙️</span>
            )}
          </div>

          <div>
            <h3
              className="
              text-white
              font-semibold
              text-lg
              "
            >
              {data.title}
            </h3>

            <p
              className="
              text-xs
              text-zinc-400
              "
            >
              {data.type}
            </p>
          </div>
        </div>

        <p
          className="
          mt-4
          text-sm
          text-zinc-300
          leading-relaxed
          "
        >
          {data.description}
        </p>
      </div>

      {/* connections */}

      <Handle
        type="target"
        position={Position.Left}
        className="bg-purple-500!"
      />

      <Handle
        type="source"
        position={Position.Right}
        className="bg-blue-500!"
      />
    </div>
  );
}
