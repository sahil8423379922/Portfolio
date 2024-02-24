import React from "react";
import mainimage from "./bgimage.png";
import Quallification from "./Quallification";
import Skills from "./Skills";
import Projects from "./Projects";

export default function Dashboard() {
  return (
    <>
      <div className="container py-4">
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
          <div className="row">
            {/* For medium and larger screens, image appears first */}
            <div className="col-md-4 order-md-first mb-3 mb-md-0">
              <img src={mainimage} className="img-fluid" alt="..." />
            </div>
            <div className="col-md-8 order-md-last">
              <div className="container-fluid">
                <h1 className="display-5 fw-bold">Sahil Jaiswal</h1>
                <p className="fs-4">
                  Hi, I am an IT Trainer at Kochartech Kochiva. Also, I am a
                  Robotics Trainer at Bright Champs and a Freelance App
                  Developer. I completed my education in Electronics and
                  Communication Engineering from Allen House Institute of
                  Technology Kanpur in 2023.
                </p>
                <button className="btn btn-primary btn-lg" type="button">
                  Linkedin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Skills />
      <Quallification />
      <Projects />
    </>
  );
}
