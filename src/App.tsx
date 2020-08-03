import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Router from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
