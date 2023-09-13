import React from 'react';
import { Button, Form, Card } from 'reactstrap';

export default function Contact() {
    return (
<Card>
  <Form id="contactForm">

    
    <div className="mb-3">
      <label className="form-label" for="name">Name</label>
      <input className="form-control" id="name" type="text" placeholder="Name" />
    </div>
    
    <div className="d-grid">
      <Button className="btn btn-primary btn-lg" type="submit">Submit</Button>
    </div>

  </Form>

</Card>
    )
}