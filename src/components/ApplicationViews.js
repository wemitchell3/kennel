import { withRouter } from "react-router";
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
import AnimalDetail from "./animal/AnimalDetail";
import EmployeeDetail from "./employee/EmployeeDetail";
import OwnerDetail from "./owner/OwnerDetail";
import AnimalForm from "./animal/AnimalForm";
import EmployeeForm from "./employee/EmployeeForm";
import OwnerForm from "./owner/OwnerForm"

class ApplicationViews extends Component {
  state = {
    employees: [],
    locations: [],
    animals: [],
    owners: []
  };

  componentDidMount() {
    const newState = {};

    AnimalManager.getAll().then(animals => (newState.animals = animals))
    EmployeeManager.getAll().then(employees => (newState.employees = employees))
    LocationManager.getAll().then(locations => (newState.locations = locations))
    OwnerManager.getAll().then(owners => (newState.owners = owners))
    .then(() => this.setState(newState))
  }

  addAnimal = animal =>
    AnimalManager.post(animal)
      .then(() => AnimalManager.getAll())
      .then(animals =>
        this.setState({
          animals: animals
        })
      );

  deleteAnimal = id => {
    return AnimalManager.removeAndList(id).then(animals => {
      this.props.history.push("/animals");
      this.setState({ animals: animals });
    });
  };

  addEmployee = employee =>
    EmployeeManager.post(employee)
      .then(() => EmployeeManager.getAll())
      .then(employees =>
        this.setState({
          employees: employees
        })
      );

  deleteEmployee = id => {
    return EmployeeManager.removeAndList(id).then(employees => {
      this.props.history.push("/employees");
      this.setState({ employees: employees });
    });
  };

  addOwner = owner =>
    OwnerManager.post(owner)
      .then(() => OwnerManager.getAll())
      .then(owners =>
        this.setState({
          owners: owners
        })
      );

  deleteOwner = id => {
    return OwnerManager.removeAndList(id).then(owners => {
      this.props.history.push("/owners");
      this.setState({ owners: owners });
    });
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
        />{" "}
        <Route
          exact
          path="/animals"
          render={props => {
            return (
              <AnimalList
                {...props}
                deleteAnimal={this.deleteAnimal}
                animals={this.state.animals}
              />
            );
          }}
        />{" "}
        <Route
          path="/animals/new"
          render={props => {
            return (
              <AnimalForm
                {...props}
                addAnimal={this.addAnimal}
                employees={this.state.employees}
              />
            );
          }}
        />{" "}
        <Route
          path="/animals/:animalId(\d+)"
          render={props => {
            // Finds the animal with the id of the route parameter
            let animal = this.state.animals.find(
              animal => animal.id === parseInt(props.match.params.animalId)
            );

            // If the animal isn't found, this will be the default one
            if (!animal) {
              animal = { id: 404, name: "404", breed: "Dog not found" };
            }

            return (
              <AnimalDetail animal={animal} deleteAnimal={this.deleteAnimal} />
            );
          }}
        />{" "}
        <Route
          exact
          path="/employees"
          render={props => {
            return (
              <EmployeeList
                {...props}
                deleteEmployee={this.deleteEmployee}
                employees={this.state.employees}
              />
            );
          }}
        />{" "}
        <Route
          path="/employees/new"
          render={props => {
            return (
              <EmployeeForm
                {...props}
                addEmployee={this.addEmployee}
                employees={this.state.employees}
              />
            );
          }}
        />{" "}
        <Route
          path="/employees/:employeeId(\d+)"
          render={props => {
            // Finds the employee with the id of the route parameter
            let employee = this.state.employees.find(
              employee =>
                employee.id === parseInt(props.match.params.employeeId)
            );

            // If the employee isn't found, this will be the default one
            if (!employee) {
              employee = { id: 404, name: "404", breed: "Employee not found" };
            }

            return (
              <EmployeeDetail
                employee={employee}
                deleteEmployee={this.deleteEmployee}
              />
            );
          }}
        />{" "}
        <Route
          exact
          path="/owners"
          render={props => {
            return (
              <OwnerList
              {...props}
                deleteOwner={this.deleteOwner}
                owners={this.state.owners}
              />
            );
          }}
        />{" "}
        <Route
          path="/owners/new"
          render={props => {
            return (
              <OwnerForm
                {...props}
                addOwner={this.addOwner}
                owners={this.state.owners}
              />
            );
          }}
        />{" "}
        <Route
          path="/owners/:ownerId(\d+)"
          render={props => {
            // Finds the owner with the id of the route parameter
            let owner = this.state.owners.find(
              owner => owner.id === parseInt(props.match.params.ownerId)
            );

            // If the owner isn't found, this will be the default one
            if (!owner) {
              owner = { id: 404, name: "404", breed: "Owner not found" };
            }

            return <OwnerDetail owner={owner} deleteOwner={this.deleteOwner} />;
          }}
        />{" "}
      </React.Fragment>
    );
  }
}

export default withRouter(ApplicationViews);
