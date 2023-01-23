import React from "react";
// import ReactDOM  from "react-dom";
import {createRoot} from 'react-dom/client'
import CounterApp from "./CounterApp";

import './index.css';
const container = document.querySelector('#root');
// const saludo= <h1>Hola mundo</h1>;
const root = createRoot(container) 
root.render(<CounterApp value={15} />);