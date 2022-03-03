import { useEffect } from "react";

const PrivateAssistantStaff = ({ history }) => {
  useEffect(() => {
    if (!localStorage.getItem("authTokenStaff")) {
      //push a user if he already logged in
      history.push("/add-profile");
    }
  }, [history]); //dependency array

  const logoutHandler = () => {
    localStorage.removeItem("authTokenStaff");
    history.push("/login");
  };

  return (
    <div>
      <button
        onClick={logoutHandler}
        style={{ float: "right" }}
        className="btn btn-warning"
      >
        <i class="fa fa-reply-all" aria-hidden="true"></i> Logout
      </button>
    </div>
  );
};

export default PrivateAssistantStaff;
