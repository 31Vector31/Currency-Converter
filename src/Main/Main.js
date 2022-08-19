import React, {useState} from 'react';
import ConversionItem from "../ConversionItem/ConversionItem";
import Arrows from "../Arrows";
import {getCoupleCourse} from "../App/App";
import styles from "./Main.module.css";

const defaultOptions = ["USD", "EUR", "UAH"];
const defaultConversionItemValue = {"0": {"currency": "USD", "amount": "1"}, "1": {"currency": "USD", "amount": "1"}};

function Main({exchangeRates}) {

    const [conversionItemValues, setConversionItemValues] = useState(defaultConversionItemValue);

    const changeConversionItemValue = (idSelectedItem, typeSelectedItem) => event => {
        const newConversionItemValue = {
            ...conversionItemValues[idSelectedItem],
            [typeSelectedItem]: event.target.value
        };
        const newConversionItemValus = {...conversionItemValues, [idSelectedItem]: newConversionItemValue};
        setConversionItemValues(Object.fromEntries(Object.entries(newConversionItemValus).map(([key, value]) => {
            let element;
            if (key == idSelectedItem) element = newConversionItemValus[idSelectedItem];
            else element = {
                ...value,
                "amount": getCoupleCourse(value.currency, newConversionItemValus[idSelectedItem].currency, exchangeRates) * newConversionItemValus[idSelectedItem].amount
            };
            return [key, element];
        })));
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.main__inner}>
                    <ConversionItem onChange={changeConversionItemValue} options={defaultOptions}
                                    value={conversionItemValues[0].amount} id={0}/>
                    <Arrows/>
                    <ConversionItem onChange={changeConversionItemValue} options={defaultOptions}
                                    value={conversionItemValues[1].amount} id={1}/>
                </div>
            </div>
        </main>
    );
}

export default Main;