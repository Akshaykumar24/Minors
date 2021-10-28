import axios from "axios";
import React, { Component } from "react";
import styles from "./spread.module.css";

export default class Spread extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      gender: "",
      email: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(e) {
    //console.log(e.target.name, e.target.value);
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
      createdAt: new Date(),
    });
    //console.log(this.state);
  }

  submit() {
    console.log(this.state);
    axios
      .post(
        "https://sheet.best/api/sheets/6f614347-8b62-4df4-a13a-2bb6b71f4280",
        this.state
      )
      .then(() =>
        this.setState({
          name: "",
          age: "",
          gender: "",
          email: "",
        })
      );
  }

  render() {
    console.log(this);
    return (
      <div className={styles.cont}>
        <h2>Fill in the Details</h2>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          className={styles.box}
          placeholder="Enter Name"
        />
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
          className={styles.box}
          placeholder="Enter age"
        />
        <label>Gender</label>
        <input
          type="text"
          name="gender"
          value={this.state.gender}
          onChange={this.handleChange}
          className={styles.box}
          placeholder="Enter gender"
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          className={styles.box}
          placeholder="Enter email"
        />
        <button className={styles.btn} onClick={this.submit}>
          Submit
        </button>
      </div>
    );
  }
}
