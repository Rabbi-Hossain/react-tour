/* eslint-disable react/prop-types */

import { useState } from 'react';
import './Country.css'
const Country = ({country, markHandler, visitedHandlerFlags}) => {
    const{flags, name, area, population, cca3} = country;

    const [visited, setVisited] = useState(false)

    const visitedHandler = () =>{
        setVisited(!visited)
    }

    // console.log(markHandler);

    return (
        <div className={`style-design ${visited && 'animation'}`}>
            <h2>{name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>code: {cca3}</p>
            <button onClick={()=>markHandler(country)}>Mark</button><br /><br />
            <button onClick={()=>visitedHandlerFlags(country)}>Add Flags</button> 
            <br />
            <br />
            <button onClick={visitedHandler}>{visited ? 'visited' : 'Going'}</button>
            {visited ? 'I have a visited country' : 'I want visited'}
        </div>
    );
};

export default Country;