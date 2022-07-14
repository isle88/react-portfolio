import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, Form, Modal } from "react-bootstrap";
import { ChevronDoubleUp } from "react-bootstrap-icons";
import styles from "../styles/Contact.module.css";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState({
    title: "",
    body: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setAlert({
          title: "Thank you 🙂",
          body: "I will reply to your message soon",
        });
        setShow(true);
      },
      (error) => {
        setAlert({
          title: "Sorry 😟",
          body: "Please try again",
        });
        setShow(true);
      }
    );
  };

  return (
    <div id="contact" className={styles.padding}>
      <h3 className={styles.title}>Contact me 📧</h3>
      <div className={styles.margin}>
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="user_name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="user_email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              type="text"
              name="message"
              placeholder="Please write your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button
              variant="light"
              type="submit"
              size="sm"
              onClick={handleShow}
            >
              Submit
            </Button>
          </div>
        </Form>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{alert.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{alert.body}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className={styles.up}>
        <a href="#home">
          <ChevronDoubleUp color="grey" size={25} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
