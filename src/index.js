import App from "./App";
import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<BrowserRouter>
<App />
</BrowserRouter>
)