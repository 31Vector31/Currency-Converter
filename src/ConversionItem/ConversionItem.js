import React from 'react';
import styles from "./ConversionItem.module.css";

function ConversionItem({options, value, onChange, id}) {
    return (
        <div>
            <select className={styles.select} onChange={onChange(id, "currency")}>
                {options.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
            <input className={styles.input} onChange={onChange(id, "amount")} value={value} type="number"/>
        </div>
    );
}

export default ConversionItem;