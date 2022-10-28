import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/redux-store";
import {BrowserRouter} from 'react-router-dom'
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const rerender = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
         
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};


rerender(store.getState());


export default rerender;