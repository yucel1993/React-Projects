import Button from 'react-bootstrap/Button';
import { useState } from 'react';
function UnderList({ appointment, index, handleDelete }) {
  const [overline, setOverline] = useState(false);
  const handleConsult = () => {
    setOverline(!overline);
    console.log(overline);
  };



  return (
    <div
      className={`mt-5  ${overline ? 'overline' : ''}`}
      style={{ display: 'flex',  alignItems: 'center' }}
      key={index}
    >
      <div  style={{ flex: '1' }}>
        <div style={{ padding: '10px' }}>
          <h4>Patient: {appointment.patientName}</h4>
          <h4>Doctor Name: {appointment.doctorName}</h4>
        </div>
      </div>
      <div style={{ flex: '1' }}>
        <div style={{ padding: '10px' }}>
          <h4>Date: {appointment.appointmentDate}</h4>
        </div>
      </div>
      <div style={{ flex: '1' }}>
        <div style={{ padding: '10px' }}>
          <Button onClick={handleConsult}>Consulted</Button>
          <Button onClick={()=>handleDelete(appointment.patientName)} variant="danger">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UnderList;
