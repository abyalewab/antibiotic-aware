import { useEffect, useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import JoinUs from "/src/assets/joinus.png";
import "./contact.css";

export const Contact = () => {
  const toast = useRef(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Message Sent.",
      life: 3000,
    });
  };

  const showError = (message) => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: message,
      life: 3000,
    });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSendClick = () => {
    if (!firstName || !lastName || !email || !message) {
      showError("Please fill out all fields.");
    } else if (!isValidEmail(email)) {
      showError("Please enter a valid email address.");
    } else {
      showSuccess();
    }
  };

  return (
    <div className="flex w-full align-items-center my-8">
      <Toast ref={toast} />
      <div className="contact-div">
        <div className="flex flex-column gap-2 mb-3">
          <label htmlFor="firstName">First Name</label>
          <InputText
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ width: "25vw" }}
          />
        </div>
        <div className="flex flex-column gap-2 mb-3">
          <label htmlFor="lastName">Last Name</label>
          <InputText
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{ width: "25vw" }}
          />
        </div>
        <div className="flex flex-column gap-2 mb-3">
          <label htmlFor="email">Email</label>
          <InputText
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "25vw" }}
          />
        </div>

        <div className="card flex flex-column mb-3">
          <label htmlFor="message" className="mb-2">
            Message
          </label>
          <InputTextarea
            label="Message"
            autoResize
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            cols={30}
            style={{ width: "25vw" }}
          />
        </div>

        <div className="flex flex-column mb-3">
          <Button
            label="Send"
            severity="secondary"
            style={{ width: "25vw" }}
            onClick={handleSendClick}
          />
        </div>
      </div>

      <div className="contact-title">
        <img className="mb-5" alt="JoinUs" src={JoinUs} />
        <div className="mb-2">
          Join the Conversation on Antibiotic Resistance
        </div>
      </div>
    </div>
  );
};
