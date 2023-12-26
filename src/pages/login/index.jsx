import { Button, Form, Input } from "antd";
import React from "react";
import { toast } from "react-toastify";
import { loginApi } from "../../api/userApi";
import { setCurrentUser } from "../../utils/localStorage";
import toastMessage from "../../utils/toast";
import "./style.scss";
import { redirect, useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const res = await loginApi(values);
      if (res?.data?.success) {
        toastMessage("success", "Login success!", {
          autoClose: 2000,
        });

        setCurrentUser(res.data.data);
        navigate("/");
      }
    } catch ({ response }) {
      toastMessage("error", response?.data?.message, {
        autoClose: 2000,
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
