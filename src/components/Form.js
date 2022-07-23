import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import "../assets/styles/Form.css";

function Form() {
  const [contactName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    } else setName(inputValue);
  };

  const selectHandler = (e) => {
    if (!e.target.value.length) {
      setErrorMessage(`We need your ${e.target.name}.`);
    } else {
      setErrorMessage("");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Something wrong with this email");
      return;
    }

    setName("");
    setMessage("");
    setEmail("");
    alert(`Thanks, i'll be in contact with you soon`);
  };

  return (
    <div>
      <form className="form">
        <input
          value={contactName}
          name="name"
          onChange={handleInputChange}
          onBlur={selectHandler}
          type="name"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={selectHandler}
          type="email"
          placeholder="Email"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={selectHandler}
          type="message"
          placeholder="Message"
        />
        {errorMessage && (
          <div>
            <span className="error-text">{errorMessage}</span>
          </div>
        )}
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
