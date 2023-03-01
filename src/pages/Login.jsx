import React, { useState, useEffect } from "react";
import { Breadcrumb, Form } from 'antd';
const Login = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    console.log('Finish:', values);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    let item = { email, password };
    console.warn(item);
  }
  return (
    <>
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
        <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
        <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="email"
        />
         </Form.Item>
        <br />
        <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="password"
        />
         </Form.Item>
        <br />
        <Form.Item shouldUpdate>
        {() => (
        <button  disabled={
          !form.isFieldsTouched(true) ||
          !!form.getFieldsError().filter(({ errors }) => errors.length).length} onClick={login} className="btn btn-primary">
          Login
        </button>
          )}
        </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
