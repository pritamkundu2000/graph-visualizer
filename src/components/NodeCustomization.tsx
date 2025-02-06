// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { nodeColorChanged, nodeFontSizeChanged } from '../store/actions';

export const NodeCustomizationPanel = () => {
  // const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const dispatch = useDispatch();
  const presentState = useSelector((state: RootState) => state.history.present);
  const nodeStyling = presentState.nodeStyling;

  const selectedNodeId=useSelector((state:RootState)=>state.history.present.ui.selectedNodeId)
  console.log(selectedNodeId)
 
  const handleColorChange = (color: string) => {
    if (selectedNodeId) {
      // dispatch(nodeColorChanged(selectedNodeId.nodeId, color));
      dispatch(nodeColorChanged(selectedNodeId, color));
      console.log("color changed, ", color)
      console.log(selectedNodeId)
    }
  };

  const handleFontSizeChange = (fontSize: number) => {
    if (selectedNodeId) {
      // dispatch(nodeFontSizeChanged(selectedNodeId.nodeId, fontSize));
      dispatch(nodeFontSizeChanged(selectedNodeId, fontSize));
      console.log("font size changed, ", fontSize)
    }
  };

  // const selectedNodeStyles=selectedNodeId? nodeStyling[selectedNodeId.nodeId] : undefined
  const selectedNodeStyles=selectedNodeId? nodeStyling[selectedNodeId] : undefined

  const currentColor=selectedNodeStyles?.color || "#ffcc00"
  const currentFontSize= selectedNodeStyles?.fontSize || 16

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}
    className=' text-center'
    >
      <h3 className=' text-center text-xl mb-10'>Node Customization</h3>
      {selectedNodeId ? (
        <>
          <div className=' text-blue-500'>Selected Node: {selectedNodeId}</div>
          <div>
            <label>Color: </label>
            <input
              type="color"
              // value={nodeStyling[selectedNodeId].color}
              value={currentColor}
              onChange={(e) => handleColorChange(e.target.value)}
            />
          </div>
          <div>
            <label>Font Size: </label>
            <select
              // value={nodeStyling[selectedNodeId].fontSize}
              className=' border border-black'
              value={currentFontSize}
              onChange={(e) => handleFontSizeChange(Number(e.target.value))}
            >
              {[12, 14, 16, 18, 20, 22, 24].map((size) => (
                <option key={size} value={size}>
                  {size}px
                </option>
              ))}
            </select>
          </div>
        </>
      ) : (
        <p>Select a node to customize</p>
      )}
    </div>
  );
};