import { doctorData } from "../helper/data.js";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import Card from "react-bootstrap/Card";

function Doctors({ handleClick }) {
  const [doctor, setDoctor] = useState("");
  const [toggle, setToggle] = useState(false);
  const [patientName, setPatientName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  const handleModalOpen = (event) => {
    setDoctor(event);
    setToggle(true);
  };

  const handleModalClose = () => {
    setToggle(false);
    setDoctor("");
    setPatientName("");
    setAppointmentDate("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Create an appointment object with the entered information
    const appointment = {
      patientName,
      doctorName: doctor,
      appointmentDate,
    };
    handleClick(appointment);
    handleModalClose();
  };

  return (
    <Row>
      {!toggle ? (
        doctorData.map(({ name, dep, img }, index) => {
          return (
            <Col key={index} xl={4} l={3} md={6} sm={12}>
              <Card
                style={{ width: "18rem" }}
                onClick={() => handleModalOpen(name)}
              >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{dep}</Card.Title>
                  <Card.Text>{name}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })
      ) : (
        <Modal show={toggle} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <span className="text-danger">Appointment for </span>
              {doctor}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3" controlId="patientName">
                <Form.Label>Patient Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter patient name"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="appointmentDate">
                <Form.Label>Appointment Date</Form.Label>
                <Form.Control
                  type="datetime-local"
                  placeholder="Enter appointment date"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                />
              </Form.Group>
              <div className="buton">              <Button variant="secondary " onClick={handleModalClose}>
                Close
              </Button>
              <Button variant="primary " type="submit">
                Save changes
              </Button>
              </div>

            </Form>
          </Modal.Body>
        </Modal>
      )}
    </Row>
  );
}

export default Doctors;
