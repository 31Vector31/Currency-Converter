import React from 'react';
import HeaderItem from "../HeaderItem";
import {getCoupleCourse} from "../App/App";
import styles from "./Header.module.css";

function Header({exchangeRates}) {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__inner}>
                    <HeaderItem firstCurrency={"USD"} secondCurrency={"UAH"}
                                rate={getCoupleCourse("UAH", "USD", exchangeRates)}/>
                    <HeaderItem firstCurrency={"EUR"} secondCurrency={"UAH"}
                                rate={getCoupleCourse("UAH", "EUR", exchangeRates)}/>
                </div>
            </div>
        </header>
    );
}

export default Header;