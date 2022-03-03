import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Login = ({ history }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authTokenStaff")) {
      //push a user if he already logged in
      history.push("/add-profile");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:8070/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authTokenStaff", data.token);

      history.push("/add-profile");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000); //5s
    }
  };

  const showPassword = () => {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  return (
    <div id="header">
      <section>
        <article>
          <form onSubmit={loginHandler}>
            <div
              className="card"
              style={{
                marginRight: "auto",
                marginLeft: "auto",
                display: "block",
              }}
            >
              <div className="card-header">Login Section</div>
              <div className="card-body">
                <center>
                  <h5 className="card-title">Login Form</h5>
                  {error && (
                    <span className="badge bg-warning">{error}</span>
                  )}{" "}
                  <br />
                  <TextField
                    id="outlined-email-input"
                    label="Email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter Email "
                    margin="normal"
                    variant="outlined"
                    size="small"
                    color="secondary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <br />
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Enter Password "
                    margin="normal"
                    variant="outlined"
                    size="small"
                    color="secondary"
                    disableRipple
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <br />
                  <br />
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disableRipple
                  >
                    <i
                      class="fa fa-sign-in"
                      aria-hidden="true"
                      style={{ marginRight: "4px" }}
                    ></i>
                    <span>login</span>
                  </Button>
                </center>
              </div>
            </div>
          </form>
        </article>
      </section>
    </div>
  );
};

export default Login;
