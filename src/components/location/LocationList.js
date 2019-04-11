import React, { Component } from 'react'
import "./location.css"

export default class LocationList extends Component {
    render() {
        return (
            
                <React.Fragment>
                <h1>Location List</h1>
                <section className="locationWrapper">
                <section className="locationCard">
                <h4>Nashville North Location</h4>
                <h5>500 Puppy Way</h5>
                </section>
                <section className="locationCard">
                <h4>Nashville South Location</h4>
                <h5>500 Kitten Way</h5>
                </section>
                </section>
                </React.Fragment>
        );
    }
}