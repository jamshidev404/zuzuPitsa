import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
// import { combineReducers, createStore } from "react-redux";
import { productReducer } from "./redux/productReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const reducers = combineReducers({ products: productReducer })
const store = createStore(reducers)

root.render(
  <div className='wrapper'>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </div>
);
    