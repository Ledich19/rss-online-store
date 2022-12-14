import React from "react";
import "./Modal.css";

type Props = {
  children?: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  return <div className="Modal">Modal</div>;
};

export default Modal;
