import React from "react";
import mainimage from "./bgimage.png";
import Quallification from "./Quallification";
import Skills from "./Skills";
import Projects from "./Projects";
import UpperCard from "./UpperCard";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import Certificate from "./Certificate";

export default function Dashboard() {
  return (
    <>
      <section id="home" className="section">
      <UpperCard />
      </section>

      <section id="skills" className="section">
      <Skills />
      </section>

      <section id="education" className="qualification">
      <Quallification />
      </section>

      <section id="project" className="section">
      <Projects />
      </section>

      <section id="certificate" className="section">
      <Certificate />
      </section>

      <Footer/>
    </>
  );
}
