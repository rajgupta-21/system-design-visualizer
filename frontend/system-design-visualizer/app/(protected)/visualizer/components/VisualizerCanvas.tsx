"use client";

import { Background, Controls, MiniMap, ReactFlow } from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import ArchitectureNode from "./architectureNode";

interface Props {
  nodes: [];
  edges: [];
}

const nodeTypes = {
  architecture: ArchitectureNode,
};

export default function VisualizerCanvas({ nodes, edges }: Props) {
  return (
    <div className="h-[93vh] w-full bg-black">
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
        <Background />

        <Controls />

        <MiniMap />
      </ReactFlow>
    </div>
  );
}
