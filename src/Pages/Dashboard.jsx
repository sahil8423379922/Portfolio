import React from "react";
import mainimage from "./bgimage.png";
import Quallification from "./Quallification";
import Skills from "./Skills";
import Projects from "./Projects";
import UpperCard from "./UpperCard";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";
import Footer from "./Footer";

export default function Dashboard() {
  return (
    <>
      <section id="home" className="section">
      <UpperCard />
      </section>

      <section id="skills" className="section">
      <Skills />
      </section>

      <section id="qualification" className="qualification">
      <Quallification />
      </section>

      <section id="project" className="section">
      <Projects />
      </section>
      <Footer/>
    </>
  );
}
