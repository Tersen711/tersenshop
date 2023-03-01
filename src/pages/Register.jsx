import React, { useState } from "react";
import { Breadcrumb, Form  } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function signUp() {
    let item = { name, password, email };
    console.warn(item);

    // let result = await fetch("http://localhost:3000/api/register", {
    //     method: 'POST',
    //     body: JSON.stringify(item),
    //     headers: {
    //         "Content-Type":'application/json',
    //         "Accept":'application/json'
    //     }
    // })
    // result = await result.json()
    // console.warn("result", result)
  }
  return (
    <>
       <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Sign Up</Breadcrumb.Item>
          </Breadcrumb>
      <div className="col-sm-6 offset-sm-3">
        <h1>Register Page</h1>
        <br />
        <Form
    name="basic"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
        <Form.Item
        name = "name"
        rules ={[{
          required: true,
          message: 'Please input your username!'
        }]}>
        <input
        prefix={<UserOutlined className="site-form-item-icon" />}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="username"
        />
        </Form.Item>
        <br />
        <Form.Item
        name = "password"
        rules ={[{
          required: true,
          message: 'Please input your password!'
        }]}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="password"
        />
        </Form.Item>
        <br />
        <Form.Item
        name = "email"
        rules ={[{
          required: true,
          message: 'Please input your email!'
        }]}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="email"
        />
        </Form.Item>
        <br />
        <Form.Item>
        <button onClick={signUp} className="btn btn-primary">
          Sign Up
        </button>
        </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Register;
