import React from "react";

const Notification = ({ message }) => {
  return message !== "" ? (
    <div
      className="notification"
      style={
        message.includes("has been already deleted from the server")
          ? { borderColor: "red", color: "red" }
          : {}
      }
    >
      {message}
    </div>
  ) : (
    <div></div>
  );
};

export default Notification;
