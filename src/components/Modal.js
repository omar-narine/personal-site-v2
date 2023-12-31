import React, { Children } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Modal = ({ isVisible, onClose, children, blurColor }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className={`fixed inset-0 ${blurColor} bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10`}
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[90%] mx-auto md:w-[600px] flex flex-col">
        <div
          className="cursor-pointer text-white place-self-end py-2 z-10"
          onClick={() => onClose()}
        >
          <FaTimes />
        </div>

        <div className="bg-white p-2 rounded-md">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
