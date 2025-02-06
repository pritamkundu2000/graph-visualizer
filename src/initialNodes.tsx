// initialNodes.ts
// import type {Node as XYNode, Edge as XYEdge} from "@xyflow/react"
// import type {Node as XYNode} from "@xyflow/react"


export interface Node {
    id: string;
    position: { x: number; y: number };
    data: { label: string };
  }
   
export interface Edge {
  id: string;
  source: string;
  target: string;
}

// export const initialNodes: Node[] = Array.from({ length: 10 }, (_, i) => ({
//   id: `node-${i}`,
//   position: { x: i * 100, y: 50 },
//   data: { label: `Node ${i}` },
// }));

// export const initialNodes: XYNode[] = Array.from({ length: 10 }, (_, i) => ({
//   id: `node-${i}`,
//   position: { x: i * 100, y: 50 },
//   data: { label: `Node ${i}` },
// }));
export const initialNodes: CustomNode[] = Array.from({ length: 10 }, (_, i) => ({
  id: `node-${i}`,
  position: { x: i * 100, y: 50 },
  data: { label: `Node ${i}` },
}));

export const initialEdges: CustomEdge[] = Array.from({ length: 9 }, (_, i) => ({
  id: `edge-${i}`,
  source: `node-${i}`,
  target: `node-${i + 1}`,
}));

// types.ts
export interface NodeStylingState {
  [nodeId: string]: {
    color: string;
    fontSize: number;
  };
} 

// export interface CustomNode extends XYNode{
//   data:{
//     label: string,
//     color: string,
//     fontSize:number
//   }
// }
// export interface CustomEdge extends XYEdge{
//   animated?: boolean
// }

export interface CustomNode {
  id: string;
  position: { x: number; y: number };
  data: {
    label: string;
    color?: string;
    fontSize?: number;
  };
}

export interface CustomEdge {
  id: string;
  source: string;
  target: string;
}