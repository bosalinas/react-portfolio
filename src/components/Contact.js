import React from 'react';

export default function Contact() {
    return (
<div className='contact-card'>
  <form className='form-area'>
    <div className='msg-box'>
      <label for="msg">Message: </label>
      <textarea type="text" placeholder="Write message here" />
    </div>
    
    <div className='details-box'>
      <label for="name">Name: </label>
      <input type="text"/>
      
      <label for="email">Email: </label>
      <input type="email"  />
    
      <label for="subject">Subject: </label>
      <input type="text" />
    
      <button type="submit">Submit</button>
    </div>

  </form>

</div>
    )
}