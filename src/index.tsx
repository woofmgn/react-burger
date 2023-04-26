import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./Components/App/App";
import "./index.css";
import store from "./services/store";

// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter basename="/react-burger">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
