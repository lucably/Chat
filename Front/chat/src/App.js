import React from 'react';
import Routes from './router';
import { BrowserRouter } from 'react-router-dom';

const App = () => (<>
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
</>)

export default App;
