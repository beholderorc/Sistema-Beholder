import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import NaviBar from './NaviBar';
import CustomizedDialogs from './PreTela';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NaviBar />
    <CustomizedDialogs />
  </React.StrictMode>,
);
