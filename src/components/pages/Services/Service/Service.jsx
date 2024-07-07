import React from "react";

const Service = ({name, price, description, imgUrl, exchangeRate}) => {
    return (
    <div className="service-card flex row-gap-2 flex-column">
        <div style={{height: "200px"}} className="flex justify-content-center align-items-center">
            <img src={imgUrl} alt={name} style={{width:"100%"}}/>
        </div>
        <h1>{name}</h1>
        <p className="price">{price} PLN ({(price/exchangeRate.rate).toFixed(2)} {exchangeRate.currencyCode})</p>
        <p>{description}</p>
        <p>
            <button>Lubię to !</button>
        </p>
    </div>
    )
};

export default Service;
