import React, { Component } from 'react'
import "./location.css"

export default class LocationList extends Component {
    render() {
        return (
            
                <React.Fragment>
                 <section className="locations">
            {
                this.props.locations.map(location =>
                    <div key={location.id}>
                        {location.name}
                    </div>
                   
                )
            }
            </section>
                </React.Fragment>
        );
    }
}