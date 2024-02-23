import React from "react";
import ReactDOM from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
// import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

