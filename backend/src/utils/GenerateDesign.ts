import { grok } from "../services/grokAi.service";

export const NODE_TYPE_META: Record<
  string,
  { color: string; image: string; displayType: string }
> = {
  client: {
    color: "#3B82F6",
    image: "/icons/client.png",
    displayType: "Client",
  },
  gateway: {
    color: "#8B5CF6",
    image: "/icons/gateway.png",
    displayType: "Gateway",
  },
  service: {
    color: "#F97316",
    image: "/icons/service.png",
    displayType: "Service",
  },
  database: {
    color: "#22C55E",
    image: "/icons/database.png",
    displayType: "Database",
  },
  cache: { color: "#EAB308", image: "/icons/redis.png", displayType: "Cache" },
  queue: { color: "#EC4899", image: "/icons/queue.png", displayType: "Queue" },
  worker: {
    color: "#14B8A6",
    image: "/icons/worker.png",
    displayType: "Worker",
  },
  storage: {
    color: "#6366F1",
    image: "/icons/storage.png",
    displayType: "Storage",
  },
  cdn: { color: "#0EA5E9", image: "/icons/cdn.png", displayType: "CDN" },
  external: {
    color: "#F43F5E",
    image: "/icons/external.png",
    displayType: "External API",
  },
  monitoring: {
    color: "#A855F7",
    image: "/icons/monitoring.png",
    displayType: "Monitoring",
  },
  auth: { color: "#10B981", image: "/icons/auth.png", displayType: "Auth" },
};

export const GenerateDesign = async ({ prompt }: { prompt: string }) => {
  if (!prompt) throw new Error("Prompt is required");

  try {
    const response = await grok.chat.completions.create({
      model: "grok-4.3",

      messages: [
        {
          role: "system",
          content: `
You are an expert system design architect.
Convert user descriptions into a production-grade architecture diagram in JSON.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COVERAGE — always include ALL relevant layers
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. CLIENT LAYER      → Web app, Mobile app
2. API LAYER         → API Gateway, Load Balancer
3. SERVICE LAYER     → Core backend microservices
4. DATA LAYER        → Databases, Caches, Blob storage
5. ASYNC LAYER       → Message queues, Background workers
6. INFRA LAYER       → CDN, Auth service, Monitoring, third-party APIs

Minimum 10 nodes. A well-designed system has 12–18.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NODE TYPE KEYS — pick exactly one per node
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use these exact typeKey values (lowercase):

typeKey        displayType       color       image path
-----------    ---------------   --------    -------------------------
client         Client            #3B82F6     /icons/client.png
gateway        Gateway           #8B5CF6     /icons/gateway.png
service        Service           #F97316     /icons/service.png
database       Database          #22C55E     /icons/database.png
cache          Cache             #EAB308     /icons/redis.png
queue          Queue             #EC4899     /icons/queue.png
worker         Worker            #14B8A6     /icons/worker.png
storage        Storage           #6366F1     /icons/storage.png
cdn            CDN               #0EA5E9     /icons/cdn.png
external       External API      #F43F5E     /icons/external.png
monitoring     Monitoring        #A855F7     /icons/monitoring.png
auth           Auth              #10B981     /icons/auth.png

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EDGE RELATIONSHIP LABELS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use these as the label value on edges:
HTTP | gRPC | GraphQL | WebSocket | publishes | subscribes | reads | writes | invalidates | streams | CDN | OAuth | JWT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LAYOUT POSITIONING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Place nodes in layers. Use these Y values per layer:

Layer           Y value    Notes
-----------     -------    ----------------------------
Client          0          x: 0, 300, 600 ...
Gateway/CDN     180        x: spread 220px apart
Services        380        x: spread 220px apart
Database/Cache  580        x: aligned under their service
Queue           780
Worker          950
External        1120
Auth/Monitoring 1300

Horizontal spacing: minimum 220px between nodes in the same layer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXACT JSON FORMAT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{
  "title": "System name here",

  "nodes": [
    {
      "id": "node_1",
      "type": "architecture",
      "position": { "x": 300, "y": 0 },
      "data": {
        "title": "API Gateway",
        "description": "Handles auth, routing, and rate limiting for all incoming requests.",
        "type": "Gateway",
        "typeKey": "gateway",
        "color": "#8B5CF6",
        "image": "/icons/gateway.png"
      }
    }
  ],

  "edges": [
    {
      "id": "edge_1",
      "source": "node_1",
      "target": "node_2",
      "label": "HTTP",
      "animated": true,
      "type": "smoothstep"
    }
  ]
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STRICT RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Every node's type field must be exactly "architecture" (this is for ReactFlow custom node)
- Every node's data.typeKey must be one of the 12 types in the table above
- Every node's data.color must match the color in the table for that typeKey
- Every node's data.image must match the image path in the table for that typeKey
- Every edge source and target must match an existing node id exactly
- animated: true for live traffic edges; false for storage reads
- Edge type is always "smoothstep"
- No two nodes at the same layer should have the same x value
- Return ONLY the raw JSON. No markdown. No explanation. No code fences.
          `,
        },
        {
          role: "user",
          content: prompt,
        },
      ],

      response_format: { type: "json_object" },
    });

    const content = response.choices[0]?.message.content;
    if (!content) throw new Error("Empty AI response");

    return JSON.parse(content);
  } catch (error) {
    console.error("AI generation failed:", error);
    throw error;
  }
};
