import React from "react";
import { Stack, Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const LoginUi = () => {
  const { logout, signInGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handleGoogleLogin = () => {
    signInGoogle().then((res) => {
      localStorage.setItem("isAuth", "true");
      history.push(location.state?.from || "/home");
    });
  };
  return (
    <div style={{ marginTop: "100px", width: "100%", height: "30vh" }}>
      <Stack gap={2} className="col-md-5 mx-auto ">
        <h2> Please Login </h2>
        <Button onClick={handleGoogleLogin} variant="secondary">
          Sign In Using Google
        </Button>
        <Button onClick={logout} variant="outline-secondary">
          Logout
        </Button>
      </Stack>
    </div>
  );
};

export default LoginUi;
