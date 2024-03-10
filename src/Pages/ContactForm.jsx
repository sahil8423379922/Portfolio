import React from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function ContactForm() {
  return (
    
    <Container className="pt-5 w-50">
     <form >
  <div class="mb-3">
    <h4 className="pb-2">Enter to Connect</h4>
    <label for="exampleInputEmail1" class="form-label">Full Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email ID</label>
    <input type="enail" class="form-control" id="exampleInputPassword1"/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Remark</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </Container>
  );
}
