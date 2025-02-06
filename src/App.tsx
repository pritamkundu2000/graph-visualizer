import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { GraphContainer } from './components/GraphContainer';
import { NodeCustomizationPanel } from './components/NodeCustomization';
import { UndoRedoControls } from './components/UndoRedoControls';

const ErrorFallback=({error}:{error:Error})=>{
  return(
    <div role='alert'>
      <p>Something went wrong</p>
      <pre style={{color:'red'}}>{error.message}</pre>
    </div>
  )
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Provider store={store}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 3 }}>
            <GraphContainer />
          </div>
          <div style={{ flex: 1 }}>
            <UndoRedoControls />
            <NodeCustomizationPanel />
          </div>
        </div>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;