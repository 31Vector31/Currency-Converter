import React from 'react';

function HeaderItem({firstCurrency, secondCurrency, rate}) {
    return (
        <div className="header-item">1 {firstCurrency} = {rate} {secondCurrency}</div>
    );
}

export default HeaderItem;