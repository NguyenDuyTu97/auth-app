import { Modal } from "antd";
import React from "react";

export default function ModalComponent({
  title = "Basic Modal",
  open,
  handleOk,
  handleCancel,
  children,
  ...props
}) {
  return (
    <Modal title={title} open={open} onOk={handleOk} onCancel={handleCancel}>
      {children}
    </Modal>
  );
}
