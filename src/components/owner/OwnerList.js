import React, { Component } from "react"
import { Link } from "react-router-dom";
import ownerIcon from "./ownerIcon.png"
import "./owner.css"

export default class OwnerList extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="content">
          <div className="ownerButton">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                this.props.history.push("/owners/new");
              }}
            >
              Add Owner
            </button>
          </div>
        <h1 className="pageTitle">Our Owners</h1>
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
                            className="btn btn-success">Fire owner</button>
                        </h5>
                    </div>
                </div>
            )
        }
        </section>
      </section>
      </React.Fragment>
    );
  }
}
