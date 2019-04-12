import React, { Component } from "react";

export default class AnimalList extends Component {
  render() {
    return (
      <section className="content">
        <h1>Our Animals</h1>
        <section className="animals">
          {this.props.animals.map(animal => (
            <div key={animal.id}>{animal.name}</div>
          ))}
        </section>
      </section>
    );
  }
}
