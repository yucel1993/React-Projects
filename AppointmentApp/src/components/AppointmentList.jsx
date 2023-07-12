import UnderList from "./UnderList";
function AppointmentList({ appointments, setAppointments }) {
  const handleDelete = (patientName) => {
    setAppointments(
      appointments.filter((patient) => patient.patientName !== patientName)
    );
  };
  return (
    <div>
      {appointments.map((appointment, index) => (
        <UnderList
          key={index}
          appointment={appointment}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
export default AppointmentList;
