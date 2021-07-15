import React from "react";
import "./contact.css";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState();
  const save = (key, value) => {
    localStorage.setItem(key, value);
  };

  return (
    <>
      <div className="contact">
        <h1>Saiba mais:</h1>
        <div className="contact-InputEmail">
          <input
            type="text"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" onClick={() => save("ls_email", email)}>
          Cadastrar
        </button>
      </div>
    </>
  );
}
