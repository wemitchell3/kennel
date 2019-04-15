import React, { Component } from "react";
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
                            {employee.name}
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
