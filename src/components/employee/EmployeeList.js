import React, { Component } from "react";
import { Link } from "react-router-dom";
import employeeIcon from "./employeeIcon.png";
import "./employee.css";

export default class EmployeeList extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="content">
          <div className="employeeButton">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                this.props.history.push("/employees/new");
              }}
            >
              Hire Employee
            </button>
          </div>
          <h1 className="pageTitle">Our Employees</h1>
          <section className="employees">
            {this.props.employees.map(employee => (
              <div key={employee.id} className="card">
                <div className="card-body">
                  <div className="card-title">
                    <img
                      src={employeeIcon}
                      className="icon--employee"
                      alt="Employee Icon"
                    />
                    <h3>
                    Name: {employee.name}
                    </h3>
                    <h5>
                    Number: {employee.number}
                    </h5>
                    <h5>
                    Address: {employee.address}
                    </h5>
                    <Link className="nav-link" to={`/employees/${employee.id}`}>
                      Details
                    </Link>
                    <button
                      onClick={() => this.props.deleteEmployee(employee.id)}
                      className="btn btn-success"
                    >
                      Fire Employee
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </section>
      </React.Fragment>
    );
  }
}
