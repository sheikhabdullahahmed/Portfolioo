import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './Context';
import './index.css'; 


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
