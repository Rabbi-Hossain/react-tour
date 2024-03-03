import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries'
const Countries = () => {

    const [country, setCountry] = useState([])

    const [visitedcountry, setVisitedcountry] = useState([])

    const [visitedFlags, setVisitedFlags] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])

    const markHandler = country =>{
        // console.log('This visited country');
        
        const newVisitedCountry = [...visitedcountry, country]
        setVisitedcountry(newVisitedCountry)
        
    }


    const visitedHandlerFlags = flags =>{
        
        const newVisitedFlags = [...visitedFlags, flags]
        setVisitedFlags(newVisitedFlags)
    }

    return (
        <div>
                
            <h2>Countries:{country.length}</h2>

            {/* visited country name */}
            <div>
                <h2>Visited Countries:{visitedcountry.length}</h2>
                {
                    visitedcountry.map(contr=><li key={contr.cca3}>{contr.name.common}</li>)
                }
            </div>

            {/* visited flags */}
            <div className="flags-style">
                {
                    visitedFlags.map(flags =><img key={flags.cca3} src={flags.flags.png}></img>)
                }
            </div>


            {/* main visited container */}
            <div className="card-design">
                {
                    country.map(country => <Country key={country.cca3} visitedHandlerFlags={visitedHandlerFlags} markHandler={markHandler}  country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;