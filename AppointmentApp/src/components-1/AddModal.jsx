import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";

function AddModal({ show, handleClose, doctor , apps, setApps}) {
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0,10));
  const handleSubmit=(e)=>{
    e.preventDefault()
    setApps([...apps,{
      
        id: new Date().getTime(),
        patient: name,
        day: date,
        consulted: false,
        doctor: doctor,
      

    },])
    handleClose()
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {doctor}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
              
            >
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  value={name}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Date
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  placeholder="Enter the Date"
                />
              </Col>
            </Form.Group>
            <div className="text-center">
              <Button
                variant="secondary"
                className="ms-3 me-3"
                onClick={handleClose}
              >
                Close
              </Button>
              <Button type="submit" variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
