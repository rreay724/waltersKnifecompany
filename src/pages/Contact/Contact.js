import React from "react";
import "./contact.css";
import { ContactForm } from "../../components/index";

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
    return (
      <h1>
        <ContactForm />
      </h1>
    );
  }
}

export default Contact;
