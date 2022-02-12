import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'animate.css/animate.min.css';
import App from './App';
import reportVitals from './reportVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

//To start measuring performance in App, pass a function to log results
//IE:reportVitals(console.log) or send to an analytics endpoint.
//Learn More at: https://bit.ly/CRA-vitals
reportVitals();