"use client";

import { Background, Controls, MiniMap, ReactFlow } from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { useCallback, useState } from "react";
import ArchitectureNode from "./architectureNode";
import InspectorForNodes from "./InsectorForNodes";

interface Props {
  nodes: [];
  edges: [];
}

const nodeTypes = {
  architecture: ArchitectureNode,
};

export default function VisualizerCanvas({ nodes, edges }: Props) {
  const [selectedNode, setSelectedNode] = useState(null);

  const handleNodeClick = useCallback((_event, node) => {
    setSelectedNode(node);
  }, []);

  return (
    <div className="h-[93vh] w-full bg-black flex">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        onNodeClick={handleNodeClick}
        onPaneClick={() => setSelectedNode(null)}
      >
        <Background />

        <Controls />

        <MiniMap />
      </ReactFlow>
      <InspectorForNodes
        selectedNode={selectedNode}
        edges={edges}
        nodes={nodes}
      />
    </div>
  );
}
