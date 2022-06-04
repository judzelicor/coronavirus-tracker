import React from "react"

import {
    Card,
    Map,
} from "./components"

import { Wrapper, Status } from "@googlemaps/react-wrapper"

const handler = ({status}) => {
    if (status == Status.LOADING) return <h1>Loading...</h1>
    if (status == Status.FAILURE) return <h1>Failure...</h1>

    return null
}

class App extends React.Component {
    render() {
        console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
        return (
            <div>
                <h1>This is the app!</h1>
                <Card />
                <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} render={handler}>
                    <Map />
                </Wrapper>
            </div>
        )
    }
}

export default App
