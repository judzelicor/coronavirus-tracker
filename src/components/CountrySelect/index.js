import React from "react"

function CountrySelect ({ countries }) {
    console.log(countries)
    if (countries.length > 0) {
        return (
            <div>
                {
                    countries.map((country) => {
                        return (
                            <div key={country.name}>{country.name}</div>
                        )
                    })
                }
            </div>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
}

export default CountrySelect