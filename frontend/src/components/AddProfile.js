import { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const AddProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [photoURL, setPhoto] = useState("");
  const [loading, setLoading] = useState(false); //additional
  const [isError, setIsError] = useState(false);

  const profileHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    setIsError(false); //additional

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:8070/profile/add",
        { name, email, about, photoURL },
        config
      );
      toast("Success! New Profile Added 😘");
      setLoading(false);
    } catch (error) {
      toast(
        "Error! New Profile not Added Duplicate Key Found: BirthDay Person Name must be unique"
      );
      setLoading(false);
      setIsError(true);
      setTimeout(() => {}, 5000); //5s
    }
  };

  return (
    <div>
      <form onSubmit={profileHandler}>
        <div className="card">
          <div className="card-body">
            <center>
              <div className="nav-flex-icons">
                <Link
                  to={`/dis-profile`}
                  style={{
                    float: "right",
                    marginRight: "10px",
                    textDecoration: "none",
                  }}
                >
                  <Button variant="contained" color="primary">
                    View Profile
                  </Button>
                </Link>
              </div>
              <br />
              <br />
              <br />
              <h5
                className="card-title"
                style={{
                  fontFamily: "Copperplate, Papyrus, fantasy",
                  fontSize: "25px",
                }}
              >
                Add New Profile 👨‍🎓
              </h5>
              <br />
              <TextField
                id="outlined-with-placeholder"
                label="Enter Name"
                placeholder="ex: Kasun"
                margin="normal"
                variant="outlined"
                type="text"
                size="small"
                color="secondary"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                pattern="[A-Za-z]+"
              />
              <br />
              <TextField
                id="outlined-with-placeholder"
                label="Enter email"
                placeholder="URL of Image1"
                margin="normal"
                variant="outlined"
                type="text"
                size="small"
                color="secondary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                pattern="[0-9a-zA-Z%&$@.]+@[a-zA-Z]+\.+[a-zA-Z]{2,3}"
              />
              <br />
              <TextField
                id="outlined-with-placeholder"
                label="Enter your about"
                margin="normal"
                variant="outlined"
                placeholder="About"
                type="text"
                size="small"
                color="secondary"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                required
              />
              <br />
              <TextField
                id="outlined-with-placeholder"
                label="Enter Image URL"
                margin="normal"
                variant="outlined"
                placeholder="URL of Image"
                type="text"
                size="small"
                color="secondary"
                value={photoURL}
                onChange={(e) => setPhoto(e.target.value)}
                required
              />
              <br />

              <br />

              {isError && (
                <small className="mt-3 d-inline-block text-danger">
                  Something went wrong. Please try again later.
                </small>
              )}
              <br />
              {/*decision*/}
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                disabled={loading}
              >
                <i class="fa fa-upload" aria-hidden="true"></i>{" "}
                <h6 style={{ marginLeft: "5px" }}> </h6>{" "}
                {loading ? "Uploading..." : "Upload"}
              </Button>
              <ToastContainer
                style={{ marginTop: "5px", position: "absolute" }}
              />
              <br />
              <br />
            </center>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProfile;
