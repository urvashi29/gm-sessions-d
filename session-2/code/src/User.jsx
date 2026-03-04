import React, { Component } from "react";

// class based component
class User extends Component {
  state = {
    firstName: "alina",
    lastName: "joe",
    age: 20,
    contact: {
      contactNumber: 9090909090,
    },
  };

  handleUpdate = () => {
    this.setState({
      firstName: "alaya",
    });
  };

  render() {
    console.log(this.props.user); //object

    return (
      <>
        <p>
          My Name is {this.state.firstName}, contact number is{" "}
          {this.state.contact.contactNumber}
        </p>
        <button onClick={this.handleUpdate}>Update</button>
      </>
    );
  }
}

export default User;
