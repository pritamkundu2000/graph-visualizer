

import { ReactFlow, Controls } from '@xyflow/react';
import type { NodeMouseHandler, Node} from "@xyflow/react"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { nodePositionChanged } from '../store/actions';
import { nodeSelected } from '../store/actions';

// type FlowNode=Node<{
//   label: string,
//   color: string,
//   fontSize:number
// }>

export const GraphContainer = () => {
  const dispatch = useDispatch();
  const presentState = useSelector((state: RootState) => state.history.present);
  const nodes = presentState.graph.nodes;
  const nodeStyling = presentState.nodeStyling;
  const edges = presentState.graph.edges;

  // const flowNodes = nodes.map(node => ({
  //   id: node.id,
  //   position: node.position,
  //   data: {
  //     label: node.data.label,
  //     color: nodeStyling[node.id].color,
  //     fontSize: nodeStyling[node.id].fontSize,
  //   },
  //   style: {
  //     backgroundColor: nodeStyling[node.id].color,
  //     fontSize: nodeStyling[node.id].fontSize,
  //   },
  // }));

  const flowNodes: Node[] = nodes.map(node => ({
    ...node,
    type: 'custom',
    data: {
      ...node.data,
      fontSize: nodeStyling[node.id].fontSize
    },
    style: {
      backgroundColor: nodeStyling[node.id].color,
      fontSize: `${nodeStyling[node.id].fontSize}px`
    }
  }));

  // const flowEdges = edges.map(edge => ({
  //   id: edge.id,
  //   source: edge.source,
  //   target: edge.target,
  //   animated: true,
  // }));

  const flowEdges=edges.map((edge)=>({
    id: edge.id,
    source: edge.source,
    target: edge.target,
    animated: true,
    style:{
      strokeWidth:2,
      stroke: '#ffcc00'
    }
  }))

  const onNodeDragStop = (_event: React.MouseEvent, node:Node) => {
    dispatch(nodePositionChanged(node.id, node.position));
  };
  // const onNodeDragStop = (_, node:Node) => {
  //   dispatch(nodePositionChanged(node.id, node.position));
  // };

  const handleNodeClick:NodeMouseHandler=(_event: React.MouseEvent,node:Node)=>{
    dispatch(nodeSelected(node.id))
  }
  // const handleNodeClick=(_,node:Node)=>{
  //   dispatch(nodeSelected(node.id))
  // }

  return (
    <div style={{ height: '100vh' }}>
      <ReactFlow
        nodes={flowNodes}
        edges={flowEdges}
        onNodeDragStop={onNodeDragStop}
        onNodeClick={handleNodeClick}
      >
        {/* <Background /> */}
        <Controls />
      </ReactFlow>
    </div>
  );
};