import React, { Component } from "react";
import "./owner.css";

export default class OwnerList extends Component {
  render() {
    return (
      <section className="content">
        <h1>Our Owners</h1>
        <section className="owners">
          {this.props.owners.map(owner => (
            <div key={owner.id}>
            <p>
            {owner.name}
            </p>
            <p>
            {owner.phone}
            </p>
            </div>
          ))}
        </section>
      </section>
    );
  }
}
