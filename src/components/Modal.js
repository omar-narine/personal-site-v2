import React, { Children } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[90%] mx-auto md:w-[600px] flex flex-col">
        <div
          className="md:hidden cursor-pointer text-white place-self-end py-2"
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
