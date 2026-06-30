"use client";

import { Background, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { toPng } from "html-to-image";
import { useCallback, useEffect, useRef, useState } from "react";

import { useSelector } from "react-redux";
import ArchitectureNode from "./architectureNode";
import InspectorForNodes from "./InsectorForNodes";

interface Props {
  nodes: any[];
  edges: any[];
  onSnapshot?: (image: string) => void;
}

const nodeTypes = {
  architecture: ArchitectureNode,
};

export default function VisualizerCanvas({ nodes, edges, onSnapshot }: Props) {
  const [selectedNode, setSelectedNode] = useState<any>(null);
  const selectDesignId = useSelector((state) => state.project.designId);

  const graphRef = useRef<HTMLDivElement>(null);

  const handleSnapshotSave = async (image: string) => {
    const response = await fetch("http://localhost:4000/user/snapshot", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image, designId: selectDesignId }),
    });
    const data = await response.json();
    console.log(data);
  };

  const generateSnapshot = async () => {
    if (!graphRef.current) return;

    try {
      const image = await toPng(graphRef.current, {
        backgroundColor: "#050505",
        quality: 0.8,
        pixelRatio: 1,

        filter: (node) => {
          const className = node.className;

          if (
            typeof className === "string" &&
            (className.includes("react-flow__controls") ||
              className.includes("react-flow__attribution"))
          ) {
            return false;
          }

          return true;
        },
      });

      console.log("snapshot generated");
      handleSnapshotSave(image);

      onSnapshot?.(image);
    } catch (error) {
      console.log("snapshot failed", error);
    }
  };

  useEffect(() => {
    if (!nodes.length) return;

    const timer = setTimeout(() => {
      generateSnapshot();
    }, 1000);

    return () => clearTimeout(timer);
  }, [nodes]);

  const handleNodeClick = useCallback((_event: any, node: any) => {
    setSelectedNode(node);
  }, []);

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
      <div
        ref={graphRef}
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
        </ReactFlow>
      </div>

      {selectedNode && (
        <InspectorForNodes
          selectedNode={selectedNode}
          nodes={nodes}
          edges={edges}
        />
      )}
    </div>
  );
}
