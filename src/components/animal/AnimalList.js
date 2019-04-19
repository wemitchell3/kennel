import React, { Component } from "react";
import { Link } from "react-router-dom";
import dog from "./DogIcon.svg";
import "./animal.css";

export default class AnimalList extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="content">
          <div className="animalButton">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                this.props.history.push("/animals/new");
              }}
            >
              Admit Animal
            </button>
          </div>
          <h1 className="pageTitle">Our Animals</h1>
          <section className="animals">
            {this.props.animals.map(animal => (
              <div key={animal.id} className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <img src={dog} className="icon--dog" alt="Puppy Icon" />
                    {animal.name}
                    <Link className="nav-link" to={`/animals/${animal.id}`}>
                      Details
                    </Link>
                    <button
                      onClick={() => this.props.deleteAnimal(animal.id)}
                      className="btn btn-success">
                      Discharge
                    </button>
                    
                  </h5>
                </div>
              </div>
            ))}
          </section>
        </section>
      </React.Fragment>
    );
  }
}
