import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./Components/App/App";
import "./index.css";
import store from "./services/store";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
