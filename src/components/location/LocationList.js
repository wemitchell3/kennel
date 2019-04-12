import React, { Component } from "react";
import "./location.css";

export default class LocationList extends Component {
  render() {
    return (
      <section className="content">
        <h1>Our Locations</h1>
        <section className="locations">
          {this.props.locations.map(location => (
            <div key={location.id}>
            <p>
                {location.name}
            </p>
            <p>
                {location.address}
            </p>
            </div>
          ))}
        </section>
      </section>
    );
  }
}
