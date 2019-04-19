import React, { Component } from "react";
import "./employee.css";

export default class EmployeeForm extends Component {
  // Set initial state
  state = {
    employeeName: "",
    employeeNumber: "",
    employeeAddress: ""
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
  constructNewEmployee = evt => {
    evt.preventDefault();
    if (this.state.employee === "") {
      window.alert("Please select a caretaker");
    } else {
      const employee = {
        name: this.state.employeeName,
        number: this.state.employeeNumber,
        address: this.state.employeeAddress
      };
      // Create the employee and redirect user to employee list
      this.props
        .addEmployee(employee)
        .then(() => this.props.history.push("/employees"));
    }
  };

  render() {
    return (
      <React.Fragment>
        <section className="content">
          <form className="employeeForm">
            <div className="form-group">
              <label htmlFor="employeeName">Employee name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="employeeName"
                placeholder="Employee Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="employeeNumber">Employee Phone Number</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="employeeNumber"
                placeholder="Employee Phone Number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="employeeAddress">Employee Phone Address</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="employeeAddress"
                placeholder="Employee Phone Address"
              />
            </div>
            <button
              type="submit"
              onClick={this.constructNewEmployee}
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
