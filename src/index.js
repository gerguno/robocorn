import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AnswersContextProvider from "./contexts/AnswersContext";
import VoiceContextProvider from "./contexts/VoiceContext";

ReactDOM.render(
  <React.StrictMode>
      <VoiceContextProvider>
          <AnswersContextProvider>
              <App />
          </AnswersContextProvider>
      </VoiceContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

