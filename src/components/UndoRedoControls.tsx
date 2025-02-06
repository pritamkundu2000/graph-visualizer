import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { undo, redo } from '../store/actions';

export const UndoRedoControls = () => {
  const dispatch = useDispatch();
  const canUndo = useSelector((state: RootState) => state.history.past.length > 0);
  const canRedo = useSelector((state: RootState) => state.history.future.length > 0);

  return (
    <div 
    // style={{ marginBottom: '10px',padding: '10px'  }}
    >
      <button onClick={() => dispatch(undo())} disabled={!canUndo} className={`border border-black p-2 m-1 disabled:opacity-25`}>
        Undo
      </button>
      <button onClick={() => dispatch(redo())} disabled={!canRedo} 
        // className='border border-black p-2 m-1'
        className={`border border-black p-2 m-1 disabled:opacity-25`}
        >
        Redo
      </button>
    </div>
  );
};