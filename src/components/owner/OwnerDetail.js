import React, { Component } from "react"
import ownerIcon from "./ownerIcon.png"
import "./owner.css"

export default class Owner extends Component {
    state = {
        saveDisabled: false
    }
    
    render() {
        return (
            <section className="content">
                <div key={ this.props.owner.id } className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={ ownerIcon } className="icon--owner" alt="Owner Icon" />
                            { this.props.owner.name}
                        </h4>
                        <h6 className="card-title">{ this.props.owner.breed }</h6>
                        <button onClick={
                            () => {
                                this.setState(
                                    { saveDisabled: true },
                                    () => this.props.deleteOwner(this.props.owner.id)
                                )
                            }
                        }
                        disabled={ this.state.saveDisabled }
                        className="card-link">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}