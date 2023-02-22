import React, { useState } from "react";
import LayoutComponents from "../components/LayoutComponents";
import { Breadcrumb  } from 'antd';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    let item = { email, password };
    console.warn(item);
  }
  return (
    <LayoutComponents>
      <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Sign In</Breadcrumb.Item>
          </Breadcrumb>
      <div className="col-sm-6 offset-sm-3">
        <h1>Login Page</h1>
        <br />
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="email"
        />
        <br />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="password"
        />
        <br />
        <button onClick={login} className="btn btn-primary">
          Login
        </button>
      </div>
    </LayoutComponents>
  );
};

export default Login;
