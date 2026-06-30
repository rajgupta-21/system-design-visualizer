export interface NodeData {
  title: string;
  description: string;

  type: string;
  typeKey: string;

  color: string;

  image?: string;
}

export interface FlowNode {
  id: string;

  type: string;

  position: {
    x: number;
    y: number;
  };

  data: NodeData;
}

export interface FlowEdge {
  id: string;

  source: string;

  target: string;

  label?: string;

  animated?: boolean;

  type?: string;
}

export interface AiResponse {
  id: string;

  title: string;

  description?: string;

  previewImage?: string;

  image?: string;

  nodes: FlowNode[];

  edges: FlowEdge[];

  createdAt?: string;
}

export interface DataResponse {
  message: string;

  Response: AiResponse;

  designId: string;

  action: "success" | "failure";
}

export interface User {
  id: string;

  name: string;

  email: string;

  isVerified: boolean;

  createdAt: string;
}

export interface DataResponseForUser {
  message: string;

  user: User;

  action: "success" | "failure";
}
