



import "./App.scss";
import { useState } from "react";
import AppointmentList from "./components/AppointmentList";
import Doctors from "./components/Doctors";
function App() {
  const [appointments, setAppointments] = useState([]);
  const handleAddAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };
  return (
    <div className="App container w-75 m-auto text-center bg-light ">
      <h1 className="mt-5">Big Promises Hospital</h1>
      <h2 className="mt-5">Our Top Best Saviours </h2>
      <Doctors handleClick={handleAddAppointment} />
      <AppointmentList appointments={appointments} setAppointments={setAppointments}/>
    </div>
  );
}
export default App;
