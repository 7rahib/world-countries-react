import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, population, flags } = props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>Country Name: {name.common}</h2>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;