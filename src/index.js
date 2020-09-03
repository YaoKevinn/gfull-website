import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { StateProvider } from './StateProvider';
// import reducer, { initialState } from './reducer';


ReactDOM.render(
  <React.Fragment>
    {/* <StateProvider initialState={initialState} reducer=   {reducer}> */}
        <App />
    {/* </StateProvider> */}
  </React.Fragment>,
  document.getElementById('root')
);

serviceWorker.unregister();
