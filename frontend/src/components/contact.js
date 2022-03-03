import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div id="header">
      <section>
        <article>
          <div className="card" style={{ width: "100%" }}>
            <h5
              class="display-4"
              style={{ fontSize: "40px", textAlign: "center" }}
            >
              About Developer 🧑‍💻
            </h5>
            <br />
            <div class="card">
              <center>
                <img
                  src="https://i.ibb.co/CsNSnWR/thamali.jpg"
                  style={{ width: "250px" }}
                  class="img-fluid"
                />
              </center>
              <p class="lead" style={{ fontSize: "50px" }}>
                <center>
                  <a
                    href="https://www.facebook.com/thamalinirmala.nirmala.3"
                    target="_blank"
                  >
                    <i
                      className="fa fa-facebook-square"
                      aria-hidden="true"
                      style={{
                        marginRight: "15px",
                        marginTop: "70px",
                        color: "blue",
                      }}
                    ></i>
                  </a>
                  <a href="https://bit.ly/3rZZMO6" target="_blank">
                    <i
                      className="fa fa-whatsapp"
                      aria-hidden="true"
                      style={{
                        marginRight: "15px",
                        marginTop: "50px",
                        color: "green",
                      }}
                    ></i>
                  </a>
                  <a href="https://github.com/ThamaliNirmala" target="_blank">
                    <i
                      className="fa fa-github"
                      aria-hidden="true"
                      style={{
                        marginRight: "15px",
                        marginTop: "50px",
                        color: "black",
                      }}
                    ></i>
                  </a>
                  <a
                    href="https://www.instagram.com/__thamali_nirmala__/"
                    target="_blank"
                  >
                    <i
                      className="fa fa-instagram"
                      aria-hidden="true"
                      style={{ marginTop: "50px", color: "red" }}
                    ></i>
                  </a>
                  <br />
                </center>
              </p>
              <center>
                <i
                  class="fa fa-map-marker"
                  aria-hidden="true"
                  style={{ color: "red", fontSize: "30px" }}
                ></i>
                <span style={{ fontSize: "15px" }}>
                  {" "}
                  Walpola, Bamunakotuwa, Kurunegala, Sri Lanka.
                </span>
                <br />
                <i
                  class="fa fa-envelope"
                  aria-hidden="true"
                  style={{ fontSize: "20px" }}
                ></i>{" "}
                <span> tnirmalaadasooriya@gmail.com</span>
                <br />
                <i
                  class="fa fa-mobile"
                  aria-hidden="true"
                  style={{ fontSize: "40px" }}
                ></i>{" "}
                <span> +94 770113437</span> 🇱🇰
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </center>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Contact;
