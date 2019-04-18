import React, { Component } from "react";
import "./location.css";

export default class LocationList extends Component {
  render() {
    return (
      <article className="content">
        <h1>Our Locations</h1>
        <section className="locations">
          {this.props.locations.map(location => (
            <div key={location.id} className="location">
            <p className="locationName">
                {location.name}
            </p>
            <p className="locationAddress">
                {location.address}
            </p>
            </div>
          ))}
        </section>
      </article>
    );
  }
}
