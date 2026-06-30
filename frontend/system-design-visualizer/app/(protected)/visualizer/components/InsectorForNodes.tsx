import { NodeData } from "@/app/types/page";

interface SelectedNode {
  id: string;
  data: NodeData;
  position: { x: number; y: number };
  type: string;
}

interface InspectorProps {
  selectedNode: SelectedNode | null;
  edges: Array<{
    id: string;
    source: string;
    target: string;
    label: string;
  }>;
  nodes: Array<{ id: string; data: NodeData }>;
}

const InspectorForNodes = ({ selectedNode, edges, nodes }: InspectorProps) => {
  const connectedEdges = selectedNode
    ? edges.filter(
        (e) => e.source === selectedNode.id || e.target === selectedNode.id,
      )
    : [];

  if (!selectedNode) {
    return (
      <div className="w-1/3 h-full bg-zinc-900 border-l border-zinc-800 flex flex-col items-center justify-center gap-2 text-center p-6">
        <span className="text-4xl">🖱️</span>
        <p className="text-zinc-500 text-sm leading-relaxed">
          Click any node on the canvas to inspect its details
        </p>
      </div>
    );
  }

  const { data, id, position } = selectedNode;

  return (
    <div className="w-1/3 h-full bg-zinc-900 border-l border-zinc-800 overflow-y-auto flex flex-col">
      <div
        style={{ backgroundColor: data.color }}
        className="h-1 w-full shrink-0"
      />

      {/* Header — icon + title + badge */}
      <div className="p-4 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <div
            style={{ backgroundColor: data.color + "22" }}
            className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0"
          >
            {TYPE_EMOJI[data.typeKey] ?? "⚙️"}
          </div>
          <div>
            <h2 className="text-white font-semibold text-sm">{data.title}</h2>
            <span
              style={{ backgroundColor: data.color }}
              className="inline-block text-xs font-bold px-2 py-0.5 rounded mt-1 text-black"
            >
              {data.typeKey}
            </span>
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-zinc-800">
        <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">
          Description
        </p>
        <p className="text-xs text-zinc-400 leading-relaxed">
          {data.description}
        </p>
      </div>

      <div className="p-4 border-b border-zinc-800">
        <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">
          Details
        </p>
        <div className="flex flex-col gap-2">
          <Row label="Node ID" value={id} />
          <Row label="Category" value={data.typeKey} />
          <Row
            label="Position"
            value={`x: ${Math.round(position.x)}, y: ${Math.round(position.y)}`}
          />
        </div>
      </div>

      <div className="p-4">
        <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">
          Connections ({connectedEdges.length})
        </p>

        {connectedEdges.length === 0 ? (
          <p className="text-xs text-zinc-600">No connections</p>
        ) : (
          <div className="flex flex-col gap-1">
            {connectedEdges.map((edge) => {
              const isSource = edge.source === selectedNode.id;
              const otherNodeId = isSource ? edge.target : edge.source;

              const otherNode = nodes.find((n) => n.id === otherNodeId);
              const otherName = otherNode?.data.title ?? otherNodeId;

              return (
                <div
                  key={edge.id}
                  className="flex items-center justify-between bg-zinc-800 rounded px-2 py-1.5"
                >
                  <span className="text-xs text-zinc-300">
                    {isSource ? "→" : "←"} {otherName}
                  </span>
                  <span
                    style={{ color: data.color }}
                    className="text-xs font-mono"
                  >
                    {edge.label}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-center">
    <span className="text-xs text-zinc-500">{label}</span>
    <span className="text-xs text-zinc-300 font-mono">{value}</span>
  </div>
);

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

export default InspectorForNodes;
