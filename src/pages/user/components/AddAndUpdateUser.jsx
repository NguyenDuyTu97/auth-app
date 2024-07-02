import React from "react";
import ModalComponent from "../../../components/modal";
import { Button, Form, Input } from "antd";
import { addUsersApi, updateUsersApi } from "../../../api/userApi";
import toastMessage from "../../../utils/toast";

export default function AddAndUpdateUser({
  open,
  handleCancel,
  userEdit,
  setUserEdit,

  onLoadData,
}) {
  const handleFinish = async () => {
    let url = addUsersApi;
    if (userEdit?._id) url = updateUsersApi;

    const res = await url(userEdit);
    if (res?.data?.success) {
      toastMessage("success", res?.data?.message, {
        autoClose: 2000,
      });

      handleCancel();
      onLoadData();
    }
  };

  return (
    <ModalComponent
      open={open}
      handleCancel={handleCancel}
      handleOk={handleFinish}
    >
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
          ...userEdit,
        }}
        autoComplete="off"
        onValuesChange={(changedValues, allValues) => {
          setUserEdit({ ...userEdit, ...allValues });
        }}
      >
        <Form.Item
          label="FirstName"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your firstName!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="LastName"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your lastName!",
            },
          ]}
        >
          <Input />
        </Form.Item>

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

        {!userEdit?._id && (
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
        )}
      </Form>
    </ModalComponent>
  );
}
