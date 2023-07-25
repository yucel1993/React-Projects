import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Project from "../components/project/Project";
import Contact from "../components/contact/Contact";

function AppRouter() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
