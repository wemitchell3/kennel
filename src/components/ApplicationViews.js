import { Route } from "react-router-dom";
import React, { Component } from "react";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalManager from "../modules/AnimalManager";
import EmployeeManager from "../modules/EmployeeManager";
import LocationManager from "../modules/LocationManager";
import OwnerManager from "../modules/OwnerManager";

export default class ApplicationViews extends Component {
  state = {
    employees: [],
    locations: [],
    animals: [],
    owners: []
  };

  componentDidMount() {
    const newState = {};

    AnimalManager.getAll().then(animals => (newState.animals = animals));
    EmployeeManager.getAll().then(
      employees => (newState.employees = employees)
    );
    LocationManager.getAll().then(
      locations => (newState.locations = locations)
    );
    OwnerManager.getAll()
      .then(owners => (newState.owners = owners))
      .then(() => this.setState(newState));
  }

  deleteAnimal = id => {
    return AnimalManager.removeAndList(id).then(animals =>
      this.setState({
        animals: animals
      })
    );
  };

  deleteEmployee = id => {
    return EmployeeManager.removeAndList(id).then(employees =>
      this.setState({
        employees: employees
      })
    );
  };

  deleteOwner = id => {
    return OwnerManager.removeAndList(id).then(owners =>
      this.setState({
        owners: owners
      })
    );
  };

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <LocationList locations={this.state.locations} />;
          }}
        />
        <Route
          path="/animals"
          render={props => {
            return (
              <AnimalList
                deleteAnimal={this.deleteAnimal}
                animals={this.state.animals}
              />
            );
          }}
        />
        <Route
          path="/employees"
          render={props => {
            return (
              <EmployeeList
                deleteEmployee={this.deleteEmployee}
                employees={this.state.employees}
              />
            );
          }}
        />
        <Route
          path="/owners"
          render={props => {
            return (
              <OwnerList
                deleteOwner={this.deleteOwner}
                owners={this.state.owners}
              />
            );
          }}
        />
      </React.Fragment>
    );
  }
}
