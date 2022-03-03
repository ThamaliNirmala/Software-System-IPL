import React, { useState } from "react";
import axios from "axios";
import "./Display.css";
import { Link } from "react-router-dom";

export default class DisplayProfile extends React.Component {
  //create DisplayRecipie method
  state = {
    query: "",
    data: [],
    filteredData: [],
  };

  handleInputChange = (event) => {
    //handle th event
    const query = event.target.value;

    this.setState((prevState) => {
      const filteredData = prevState.data.filter((element) => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      });

      return {
        query,
        filteredData,
      };
    });
  };

  getData = () => {
    //fetch data from th edatabase
    fetch(`http://localhost:8070/profile`)
      .then((response) => response.json())
      .then((data) => {
        const { query } = this.state;
        const filteredData = data.filter((element) => {
          return (
            element.name.toLowerCase().includes(query.toLowerCase()) >= 0 || //the way or style that data should be display
            element.email.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.photoURL.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.about.toLowerCase().includes(query.toLowerCase()) >= 0
          );
        });

        this.setState({
          data,
          filteredData,
        });
      });
  };

  componentWillMount() {
    //create a state
    this.getData();
  }

  render() {
    return (
      <div className="card">
        <div className="App">
          <br />
          <h1
            style={{
              fontFamily: "Copperplate, Papyrus, fantasy",
              fontSize: "50px",
            }}
          >
            {" "}
            All Profiles 👨‍🎓
          </h1>{" "}
          <br></br> {/*get the data*/}
          <div className="container">
            {/* Display data from API */}
            <div className="students" style={{ width: "50%" }}>
              {this.state.filteredData.length === 0 ? (
                <div
                  className="alert alert-danger"
                  style={{ marginLeft: "500px" }}
                >
                  <center>
                    Data is not found<br/><br/>
                    <img src="https://i.ibb.co/ypKnFTb/DDPKLHNVw-AA87-D5.jpg" style={{ width: "200px" }} />
                  </center>{" "}
                  <br />
                 
                </div>
              ) : (
                this.state.filteredData.map((i) => (
                  <p>
                    <div
                      className="student"
                      style={{
                        background: "#DCDCDC",
                        width: "550px",
                        marginLeft: "50px",
                      }}
                    >
                      <div className="details">
                        <div className="card-body">
                          <div style={{ float: "right" }}>
                            <img
                              src={i.photoURL}
                              style={{ width: "200px", height: "200px" }}
                              className="border border-danger rounded-circle"
                            />
                          </div>
                          <p className="card-text">
                            👦<b style={{ color: "red" }}> Name : </b>
                            <br />
                            {i.name}
                          </p>
                          <p className="card-text">
                            📧<b style={{ color: "green" }}> Email : </b>
                            <br />
                            {i.email}{" "}
                          </p>
                          <p className="card-text">
                            📋<b style={{ color: "blue" }}> About : </b>
                            <br />
                            {i.about}{" "}
                          </p>
                        </div>

                        <> </>
                      </div>
                    </div>
                  </p>
                ))
              )}
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}
