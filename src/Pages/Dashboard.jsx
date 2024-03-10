import React from "react";
import mainimage from "./bgimage.png";
import Quallification from "./Quallification";
import Skills from "./Skills";
import Projects from "./Projects";
import UpperCard from "./UpperCard";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";

export default function Dashboard() {
  return (
    <>
      <NavBar />

      <UpperCard />
      <Skills />
      <Quallification />
      <Projects />
    </>
  );
}
