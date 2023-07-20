import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import  {useState, useEffect}  from "react";
import axios from "axios";

const Home = () => {
  const [tutorials , setTutorials ] = useState([])

  const getTutorials=async()=>{
const BASE_URL="http://tutorial-api.fullstack.clarusway.com/tutorials/"
try {
  const {data} =await axios(BASE_URL)
  setTutorials(data)
  
} catch (error) {
  console.log(error)
}
  }

  useEffect(() => {
    getTutorials()
  
    
  }, [])
  

  return (
    <>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList  getTutorials={getTutorials} tutorials={tutorials} />
    </>
  );
};

export default Home;
