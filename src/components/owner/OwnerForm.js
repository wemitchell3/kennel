import React, { Component } from "react";
import "./owner.css";

export default class OwnerForm extends Component {
  // Set initial state
  state = {
    ownerName: "",
    ownerNumber: "",
    ownerAddress: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };
  /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
  constructNewOwner = evt => {
    evt.preventDefault();
    if (this.state.owner === "") {
      window.alert("Please select a caretaker");
    } else {
      const owner = {
        name: this.state.ownerName,
        number: this.state.ownerNumber,
        address: this.state.ownerAddress
      };
      // Create the owner and redirect user to owner list
      this.props
        .addOwner(owner)
        .then(() => this.props.history.push("/owners"));
    }
  };

  render() {
    return (
      <React.Fragment>
        <section className="content">
          <form className="ownerForm">
            <div className="form-group">
              <label htmlFor="ownerName">Owner name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="ownerName"
                placeholder="Bob"
              />
            </div>
            <div className="form-group">
              <label htmlFor="ownerNumber">Owner Phone Number</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="ownerNumber"
                placeholder="867-5309"
              />
            </div>
            <div className="form-group">
              <label htmlFor="ownerAddress">Owner Phone Address</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="ownerAddress"
                placeholder="123 Test Ave"
              />
            </div>
            <button
              type="submit"
              onClick={this.constructNewOwner}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </section>
      </React.Fragment>
    );
  }
}