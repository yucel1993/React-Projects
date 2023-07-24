import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Paths from "./components/Paths";
import PeopleDetails from "./components/PeopleDetails";
import FullStack from "./components/FullStack";
import Aws from "./components/Aws";
import React from "./components/React";
import Next from "./components/Next";
import PrivatRoute from "./components/PrivatRoute";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  // const [user , setUser ] = useState(
  //   JSON.parse(sessionStorage.getItem("user")) ||false)
  const [user , setUser ] = useState(false)
  return (
    <>
      <Nav user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paths" element={<Paths />}>
          <Route index element={<FullStack />} />
          <Route path="fullstack" element={<FullStack />}>
            <Route index element={<React />} />
            <Route path="next" element={<Next />} />
          </Route>
          <Route path="aws" element={<Aws />} />
        </Route>
        <Route  element={<PrivatRoute user={user}/>}>
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<PeopleDetails />} />
        </Route>

        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
