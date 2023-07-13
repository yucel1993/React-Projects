import Container from "react-bootstrap/Container";
import { doctorData } from "../helper/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddModal from "./AddModal";
import { useState } from "react";
function Doctor({apps, setApps}) {
  const [show, setShow] = useState(false);
  const [doctor, setDoctor] = useState("");

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row>
        {doctorData.map(({ name, id, img, dep }) => (
          <Col key={id} xs={6} sm={4} md={3} lg={2}>
            <img
              src={img}
              className="img-thumbnail doctor-img"
              alt={name}
              onClick={() => {
                setShow(true);
                setDoctor(name)
              }}
            />
            <h5>{name}</h5>
            <h6>{dep}</h6>
          </Col>
        ))}
      </Row>
      <AddModal apps={apps} setApps={setApps} doctor={doctor} show={show} handleClose={() => setShow(false)} />
    </Container>
  );
}

export default Doctor;
