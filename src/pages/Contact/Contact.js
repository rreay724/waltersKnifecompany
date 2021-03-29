import React from "react";
import axios from "axios";
import "./contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      status: "Submit",
    };
  }

  render() {
    return <h1>Contact Page</h1>;
  }
}

export default Contact;
