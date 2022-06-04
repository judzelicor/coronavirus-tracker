import React from "react"

import {
    Card,
    Map,
    CountrySelect
} from "./components"

import { Wrapper, Status } from "@googlemaps/react-wrapper"

import axios from "axios"

const handler = ({status}) => {
    if (status == Status.LOADING) return <h1>Loading...</h1>
    if (status == Status.FAILURE) return <h1>Failure...</h1>

    return null
}

class App extends React.Component {
    state = {
        countries: [],
        country: "Worldwide"
    }

    async componentDidMount() {
        const response = await axios.get("http://localhost:3001/api/get-locations")
            .then(result => result.data)
            .then(data => this.setState({countries: data.data}))
    }

    render() {
        return (
            <div>
                <h1>This is the app!</h1>
                <Card country={"country"} />
                <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} render={handler}>
                    <Map />
                </Wrapper>
                <CountrySelect countries={this.state.countries} />
            </div>
        )
    }
}

export default App
