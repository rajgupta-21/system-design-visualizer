export interface NodeData {
  title: string;
  description: string;
  type: string;
  typeKey: string;
  color: string;
  image: string;
}

export type AiResponse = {
  title: string;
  nodes: [
    {
      id: string;
      type: string;
      position: {
        x: number;
        y: number;
      };
      data: NodeData;
    },
  ];
  edges: [
    {
      id: string;
      source: string;
      target: string;
      label: string;
      animated: boolean;
      type: string;
    },
  ];
};

export type DataResponse = {
  message: string;
  Response: AiResponse;
  action: string;
};
