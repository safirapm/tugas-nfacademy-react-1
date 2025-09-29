import React from "react";

function Contact() {
  return (
    <>
      <div className="container min-vh-100 py-5">
        <h3>Contact Us</h3>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <hr className="my-4" />

        <button className="w-100 btn btn-primary btn-lg" type="submit">
          Send message
        </button>
      </div>
    </>
  );
}

export default Contact;
