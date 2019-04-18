import React, { Component } from "react"
import { Link } from "react-router-dom";
import ownerIcon from "./ownerIcon.png"
import "./owner.css"

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
                        <img src={ownerIcon} className="icon--owner" alt="Owner Icon" />
                          <p>
                            Name: {owner.name}
                          </p>
                          <p>
                            Phone: {owner.phone}
                          </p>
                          <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
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
