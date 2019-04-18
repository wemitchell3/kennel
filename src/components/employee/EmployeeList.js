import React, { Component } from "react"
import { Link } from "react-router-dom";
import employeeIcon from "./employeeIcon.png"
import "./employee.css"

export default class EmployeeList extends Component {
  render() {
    return (
      <section className="content">
        <h1>Our Employees</h1>
        <section className="employees">
        {
            this.props.employees.map(employee =>
                <div key={employee.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                        <img src={employeeIcon} className="icon--employee" alt="Employee Icon" />
                            {employee.name}
                            <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                            <button
                                onClick={() => this.props.deleteEmployee(employee.id)}
                                className="card-link">Fire Employee</button>
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
