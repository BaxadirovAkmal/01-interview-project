import ReactDom from 'react-dom';
import App from "./App";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import './main.scss'
import 'react-slideshow-image/dist/styles.css'

ReactDom.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById("root")
)