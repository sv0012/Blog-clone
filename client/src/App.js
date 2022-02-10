import { BrowserRouter } from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess';
import './App.css';
import ContextProvider from './context/ContextProvider';




function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <AppWithRouterAccess />
        </BrowserRouter>
      </ContextProvider>

    </>


  );
}

export default App;