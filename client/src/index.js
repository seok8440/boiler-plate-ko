import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { applyMiddleware, legacy_createStore } from 'redux';
// import promiseMiddleware from 'redux-promise';
// import ReduxThunk from 'redux-thunk';

// const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk) (legacy_createStore)
const root = createRoot(document.getElementById("root"));

// ReactDOM.render(
//   <Provider
//       store={createStoreWithMiddleware(Reducer,
//           window.__REDUX_DEVTOOLS_EXTENSION__ &&
//           window.__REDUX_DEVTOOLS_EXTENSION__()
//       )}
//   >
//       <App />
//   </Provider>
//   , document.getElementById('root'));
setInterval(() => {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }, 1);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
