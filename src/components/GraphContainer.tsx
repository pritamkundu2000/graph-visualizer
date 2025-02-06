// import { ReactFlow, Controls, Background } from '@xyflow/react';
// import type {Node, SelectionDragHandler} from "@xyflow/react"
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../store/store';
// import { nodePositionChanged } from '../store/actions';

// type FlowNode=Node<{
//   label: string,
//   color: string,
//   fontSize:number
// }>

// export const GraphContainer = () => {
//   const dispatch = useDispatch();
//   const presentState = useSelector((state: RootState) => state.present);
//   const nodes = presentState.graph.nodes;
//   const nodeStyling = presentState.nodeStyling;
//   const edges = presentState.graph.edges;

//   const flowNodes = nodes.map(node => ({
//     id: node.id,
//     position: node.position,
//     data: {
//       label: node.data.label,
//       color: nodeStyling[node.id].color,
//       fontSize: nodeStyling[node.id].fontSize,
//     },
//     style: {
//       backgroundColor: nodeStyling[node.id].color,
//       fontSize: nodeStyling[node.id].fontSize,
//     },
//   }));

//   const flowEdges = edges.map(edge => ({
//     id: edge.id,
//     source: edge.source,
//     target: edge.target,
//     animated: true,
//   }));

//   const onNodeDragStop = (_, node) => {
//     dispatch(nodePositionChanged(node.id, node.position));
//   };

//   return (
//     <div style={{ height: '100vh' }}>
//       <ReactFlow
//         nodes={flowNodes}
//         edges={flowEdges}
//         onNodeDragStop={onNodeDragStop}
        
//       >
//         {/* <Background /> */}
//         <Controls />
//       </ReactFlow>
//     </div>
//   );
// };

import { ReactFlow, Controls, Background } from '@xyflow/react';
import type {Node, NodeMouseHandler} from "@xyflow/react"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { nodePositionChanged } from '../store/actions';
import { nodeSelected } from '../store/actions';

type FlowNode=Node<{
  label: string,
  color: string,
  fontSize:number
}>

export const GraphContainer = () => {
  const dispatch = useDispatch();
  const presentState = useSelector((state: RootState) => state.history.present);
  const nodes = presentState.graph.nodes;
  const nodeStyling = presentState.nodeStyling;
  const edges = presentState.graph.edges;

  const flowNodes = nodes.map(node => ({
    id: node.id,
    position: node.position,
    data: {
      label: node.data.label,
      color: nodeStyling[node.id].color,
      fontSize: nodeStyling[node.id].fontSize,
    },
    style: {
      backgroundColor: nodeStyling[node.id].color,
      fontSize: nodeStyling[node.id].fontSize,
    },
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

  const onNodeDragStop = (_, node) => {
    dispatch(nodePositionChanged(node.id, node.position));
  };

  const handleNodeClick=(_,node)=>{
    dispatch(nodeSelected(node.id))
  }

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