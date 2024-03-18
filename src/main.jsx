import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { SignUp } from './Reduxauth/signup.jsx'
import { Provider } from 'react-redux'
import { store } from './Reduxauth/Store.js';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <SignUp/>
    {/* <App /> */}
    </Provider>
  </React.StrictMode>,
)
