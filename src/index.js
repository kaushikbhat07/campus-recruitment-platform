import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./Redux/configureStore";
import { Provider } from "react-redux";
import { initializeApp } from "firebase/app";

const store = configureStore();

const firebaseConfig = {
    apiKey: "AIzaSyCjWgDqwaMPRxYmg_SuH3S9AFnWF1PrdYw",
    authDomain: "campus-hire.firebaseapp.com",
    projectId: "campus-hire",
    storageBucket: "campus-hire.appspot.com",
    messagingSenderId: "497233302397",
    appId: "1:497233302397:web:b5141527fc94bb3a75f214",
    measurementId: "G-YDZ38Z0T13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
