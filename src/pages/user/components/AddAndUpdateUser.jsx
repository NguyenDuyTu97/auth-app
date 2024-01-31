import React from "react";
import ModalComponent from "../../../components/modal";
import { Button, Form, Input } from "antd";

export default function AddAndUpdateUser({ open, handleCancel }) {
  const handleFinish = () => {};

  const handleFinishFailed = () => {};

  return (
    <ModalComponent open={open} handleCancel={handleCancel}>
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
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
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
      </Form>
    </ModalComponent>
  );
}
