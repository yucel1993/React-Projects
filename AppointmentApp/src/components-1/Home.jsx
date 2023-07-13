import AppointmentList from "./AppointmentList"
import Doctor from "./Doctor"
import {appointmentData} from "../helper/data"
import {useState} from "react"

function Home() {
  const [apps, setApps] = useState(appointmentData)
    console.log(appointmentData)
    return (
        <main className="text-center mt-2">
          <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
          <Doctor setApps={setApps} apps={apps}/>
          <AppointmentList apps={apps} setApps={setApps}  />
        </main>
      )
    }

export default Home