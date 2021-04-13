import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppStateContextProvider } from './services/context/AppStateContext';
import reducer, { appState } from './services/context/reducer';

ReactDOM.render(
  <React.StrictMode>
    <AppStateContextProvider reducer={reducer} appState={appState}>
        <App />
    </AppStateContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
