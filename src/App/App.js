import React, {useEffect, useState} from 'react';
import {getExchangeRates} from "../APIRequests";
import Header from "../Header/Header";
import Main from "../Main/Main";
import './App.css';

export const getCoupleCourse = (firstCurrency, secondCurrency, exchangeRates) => exchangeRates[firstCurrency] / exchangeRates[secondCurrency];

function App() {

    const [exchangeRates, setExchangeRates] = useState([]);

    useEffect(() => {
        getExchangeRates().then(response => {
            setExchangeRates(response);
        });
    });

    return (
        <div>
            <Header exchangeRates={exchangeRates}/>
            <Main exchangeRates={exchangeRates}/>
        </div>
    );
}

export default App;