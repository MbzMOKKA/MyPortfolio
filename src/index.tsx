//Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { globalStyle as GlobalStyle } from "./utils/style/";
import App from "./components/App";
import "./utils/style/fonts.css";
import "./utils/style/animations.css";
import store from "./redux_toolkit/store";
import { Provider } from "react-redux";

//Render
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <GlobalStyle />
            <App />
        </Provider>
    </BrowserRouter>
);
