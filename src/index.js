import React  , { Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter as Router
} from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider  } from 'react-redux';
// import Auth from  "./Authservice"
import { store ,persister} from './store';
// import './i18n';
// import './index.css';

// import ErrorBoundary from "./components/errorBoundary/errorBoundary"
// import "./config/firebase-config" 

import App from './App';
// import Loader from "./components/loader/loader"
import Toast from "./components/toast/toast"
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Suspense fallback={<Loader/>}>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persister}> 
      <Router>
        <App />
      </Router>
   </PersistGate> 
   </Provider>
//  </Suspense>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();





  // <PersistGate loading={null} persistor={persister}> 
  //     <Toast />

  
//      </PersistGate> 
