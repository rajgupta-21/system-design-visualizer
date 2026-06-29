"use client";

import { Background, Controls, ReactFlow } from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { toPng } from "html-to-image";
import { useCallback, useRef, useState } from "react";

import ArchitectureNode from "./architectureNode";
import InspectorForNodes from "./InsectorForNodes";

interface Props {
  nodes: [];
  edges: [];
  onSnapshot?: (image: string) => void;
}

const nodeTypes = {
  architecture: ArchitectureNode,
};

export default function VisualizerCanvas({ nodes, edges, onSnapshot }: Props) {
  const [selectedNode, setSelectedNode] = useState(null);

  const flowRef = useRef<HTMLDivElement>(null);

  const handleNodeClick = useCallback((_event: any, node: any) => {
    setSelectedNode(node);
  }, []);

  const generateSnapshot = async () => {
    if (!flowRef.current) return;

    try {
      const image = await toPng(flowRef.current, {
        backgroundColor: "#050505",
        quality: 0.95,
      });

      console.log(image);

      // send image to parent/backend
      onSnapshot?.(image);
    } catch (error) {
      console.error("Snapshot failed", error);
    }
  };

  return (
    <div
      className="
h-[93vh]
w-full
bg-black
flex
relative
"
    >
      {/* React flow capture area */}

      <div
        ref={flowRef}
        className="
flex-1
h-full
"
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          colorMode="dark"
          fitView
          onNodeClick={handleNodeClick}
          onPaneClick={() => setSelectedNode(null)}
        >
          <Background />

          <Controls />
        </ReactFlow>
      </div>

      {/* Snapshot button */}

      <button
        onClick={generateSnapshot}
        className="
absolute
top-5
right-5
z-20
px-4
py-2
rounded-xl
bg-purple-600
hover:bg-purple-700
transition
"
      >
        Save Preview
      </button>

      {selectedNode && (
        <InspectorForNodes
          selectedNode={selectedNode}
          edges={edges}
          nodes={nodes}
        />
      )}
    </div>
  );
}
