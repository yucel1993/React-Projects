import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TiDelete } from "react-icons/ti";

function AppointmentList({ apps, setApps }) {
  const handleDoubleClick = (id) => {
    setApps(
      apps.map((item) =>
        item.id === id ? { ...item, consulted: !item.consulted } : item
      )
    );
  };

  const handleClick = (id) => {
    setApps(apps.filter((item) => item.id !== id));
  };
  return (
    <Container classNmae="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      {apps.length < 1 && (
        <img src="./img/appointment.jpg" alt="appointment" width=" 70%" />
      )}

      {apps.map(({ id, patient, consulted, doctor, day }) => (
        <div
          onClick={() => handleDoubleClick(id)}
          key={id}
          className={`appointments ${consulted ? "consulted" : ""}`}
        >
          <Row className="justify-content-between align-items-center">
            <Col xs={12} sm={6} md={6}>
              <h5>{patient}</h5>
              <h5>{doctor}</h5>
            </Col>
            <Col>
              <h5>{day}</h5>
            </Col>
            <Col className="text-end">
              <TiDelete
                onClick={() => handleClick(id)}
                type="button"
                className="text-danger fs-1"
              />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default AppointmentList;
