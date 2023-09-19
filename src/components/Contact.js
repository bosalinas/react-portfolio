import React, { useState } from 'react';
//import {Button} from "bootstrap"

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [validEmail, setValidEmail] = useState("");
  const [validName, setValidName] = useState("");
  const [validSubject, setValidSubject] = useState("");

  function updateName(input) {
    const typedName = input.value;
    setName(typedName)

    const isValidName = typedName;
    setValidName(isValidName);
    console.log(isValidName)
  }
  function updateSubject(input) {
    const typedSubject = input.value;
    setSubject(typedSubject)

    const isValidSubject = typedSubject;
    setValidSubject(isValidSubject);
    console.log(isValidSubject)
  }

  function updateEmail(input) {
    const typedEmail = input.value;
    setEmail(typedEmail)

    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i
    const isValidEmail = expression.test(typedEmail);
    setValidEmail(isValidEmail);
    console.log(isValidEmail)
  }
  return (
    <div className='contact-card'>
      <form className='form-area'>
        <div className='msg-box'>
          <label for="msg">Message: </label>
          <textarea type="text" placeholder="Write message here" />
        </div>

        <div className='details-box'>
          <label for="name">Name: </label>
          <input className={validName ? "border border-success" : "border border-danger"} type="text" onBlur={(event) => { updateName(event.target) }} />

          <label for="email">Email: </label>
          <input className={validEmail ? "border border-success" : (email.length === 0 ? "" : "border border-danger")} type="email" onBlur={(event) => { updateEmail(event.target) }} />

          <label for="subject">Subject: </label>
          <input className={validSubject ? "border border-success" : "border border-danger"} type="text" onChange={(event) => { updateSubject(event.target) }} />

          <div className="alert-email">
            {!validEmail && email.length > 0 ? "Invalid format" : ""}
          </div>
          <div className="alert-empty">
            {!validName ? "Must enter name" : ""}
          </div>
          <div className="alert-empty">
            {!validName ? "Must enter subject line" : ""}
          </div>

          <button type="submit">Submit</button>
        </div>


      </form>

    </div>
  )
}
