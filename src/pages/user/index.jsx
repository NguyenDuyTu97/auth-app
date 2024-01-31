import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { deleteUserApi, getUsersApi } from "../../api/userApi";
import toastMessage from "../../utils/toast";
import AddAndUpdateUser from "./components/AddAndUpdateUser";

export default function User() {
  const [users, setUsers] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await getUsersApi();
      if (res?.data?.success) {
        const { data } = res.data;
        const items = [...data];

        setUsers(items);
      }
    } catch (error) {
      console.log(error, "error when get list user");
    }
  };

  const handleDelete = async (id) => {
    if (!id) {
      toastMessage("error", "Yêu cầu chọn user cần xóa", {
        autoClose: 2000,
      });

      return;
    }

    try {
      const res = await deleteUserApi(id);
      if (res?.data?.success) {
        toastMessage("success", "Delete user successfully!", {
          autoClose: 2000,
        });

        getList();
      }
    } catch (error) {
      console.log(error, "error when delete user");
    }
  };

  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
      render: (text, record, index) => {
        const { firstName, lastName } = record || {};
        return <div>{`${firstName} ${lastName}`}</div>;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "operation",
      width: 100,
      render: (text, record) => {
        return (
          <>
            <Button type="primary" icon={<EditOutlined />} />
            <Button
              type="primary"
              danger
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(record?._id)}
            />
          </>
        );
      },
    },
  ];

  // add user modal
  const handleShowAddModal = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <Button type="primary" onClick={handleShowAddModal}>
        Add user
      </Button>
      <Table columns={columns} dataSource={users} />
      {showAddModal && (
        <AddAndUpdateUser
          open={showAddModal}
          handleCancel={handleCloseAddModal}
        />
      )}
    </div>
  );
}
