import React, { Component } from "react";
import "./owner.css";

export default class OwnerList extends Component {
  render() {
    return (
      <section className="content">
        <h1>Our Owners</h1>
        <section className="owners">
           {
            this.props.owners.map(owner =>
                <div key={owner.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                          <p>
                            {owner.name}
                          </p>
                          <p>
                            {owner.phone}
                          </p>
                          <button 
                            onClick={() => this.props.deleteOwner(owner.id)}
                            className="card-link">Fire owner</button>
                        </h5>
                    </div>
                </div>
            )
        }
        </section>
      </section>
    );
  }
}
