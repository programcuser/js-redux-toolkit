import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// Redux imports
import { Provider } from 'react-redux';
//index2
// import App from './TasksList/components/App.jsx';
// import store from './TasksList/slices/index.js';
//index3 - Data Normalization
// import App from './TasksListNormalization/components/App.jsx';
// import store from './TasksListNormalization/slices/index.js';
//index4 - Entity Adapter
// import App from './TasksListEntityAdapter/components/App.jsx';
// import store from './TasksListEntityAdapter/slices/index.js';
//index5 - Extra Reducers
// import App from './TasksListExtraReducers/components/App.jsx';
// import store from './TasksListExtraReducers//slices/index.js';
//index6 - Thunk
import App from './TasksListThunk/components/App.jsx';
import store from './TasksListThunk//slices/index.js';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//index2
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

//index3 - Data Normalization
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

//index4 - Entity Adapter
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

//index5 - Extra Reducers
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

//index6 - Thunk
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
