import React, { Component } from "react"
import employeeIcon from "./employeeIcon.png"
import "./employee.css"

export default class Employee extends Component {
    state = {
        saveDisabled: false
    }
    
    render() {
        return (
            <article className="content">
            <section className="employeeDetail">
                <div key={ this.props.employee.id } className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={ employeeIcon } className="icon--employee" alt="Employee Icon" />
                            <p>
                            { this.props.employee.name }
                            </p>
                            <p>
                            { this.props.employee.number }
                            </p>
                            <p>
                            { this.props.employee.address }
                            </p>
                            
                        </h4>
                        <h6 className="card-title">{ this.props.employee.breed }</h6>
                        <button onClick={
                            () => {
                                this.setState(
                                    { saveDisabled: true },
                                    () => this.props.deleteEmployee(this.props.employee.id)
                                )
                            }
                        }
                        disabled={ this.state.saveDisabled }
                        className="btn btn-success">Fire Employee</button>
                    </div>
                </div>
                </section>
            </article>
        )
    }
}