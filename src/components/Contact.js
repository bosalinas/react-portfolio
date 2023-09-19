import React, { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const [validEmail, setValidEmail] = useState(null);
  const [validName, setValidName] = useState(null);
  const [validSubject, setValidSubject] = useState(null);
  const [validMsg, setValidMsg] = useState(null);

  function updateName(input) {
    const typedName = input.value;
    setName(typedName);
    setValidName(typedName ? true : false);
  }

  function updateSubject(input) {
    const typedSubject = input.value;
    setSubject(typedSubject);
    setValidSubject(typedSubject ? true : false);
  }

  function updateMsg(input) {
    const typedMsg = input.value;
    setMsg(typedMsg);
    setValidMsg(typedMsg ? true : false);
  }

  function updateEmail(input) {
    const typedEmail = input.value;
    setEmail(typedEmail);
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i
    const isValidEmail = expression.test(typedEmail);
    setValidEmail(isValidEmail);
  }

  return (
    <div className='contact-card'>
      <form className='form-area'>
        <div className='msg-box'>
          <label htmlFor="msg">Message: </label>
          <textarea className={validMsg ? "border border-success" : (validMsg === false ? "border border-danger" : "")}
            type="text"
            onBlur={(event) => updateMsg(event.target)} placeholder="Write message here" />
        </div>

        <div className='details-box'>
          <label htmlFor="name">Name: </label>
          <input
            className={validName ? "border border-success" : (validName === false ? "border border-danger" : "")}
            type="text"
            onBlur={(event) => updateName(event.target)}
          />

          <label htmlFor="email">Email: </label>
          <input
            className={validEmail ? "border border-success" : (email.length > 0 && validEmail === false ? "border border-danger" : "")}
            type="email"
            onBlur={(event) => updateEmail(event.target)}
          />

          <label htmlFor="subject">Subject: </label>
          <input
            className={validSubject ? "border border-success" : (validSubject === false ? "border border-danger" : "")}
            type="text"
            onBlur={(event) => updateSubject(event.target)}
          />

          <div className="alert-email">
            {validEmail === false && email.length > 0 ? "Invalid format" : ""}
          </div>
          <div className="alert-empty">
            {validName === false ? "Must enter name" : ""}
          </div>
          <div className="alert-empty">
            {validSubject === false ? "Must enter subject line" : ""}
          </div>
          <div className="alert-empty">
            {validMsg === false ? "Must enter message" : ""}
          </div>

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}