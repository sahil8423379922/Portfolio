import React from "react";
import style from "./CSS Modules/Dashboard.module.css";
import react from "./Images/react.png";
import nodeimg from "./Images/node.png";
import mongoimg from "./Images/mongo.png";
import express from "./Images/express.png";
import sqlimg from "./Images/mysql.png";
import flask from "./Images/flask.png";
import powerbiicon from "./Images/powerbi.png";
import fluttericon from "./Images/flutter.png";
import pythoicon from "./Images/python.png";
import javaicon from "./Images/java.png";
import dsaicon from "./Images/dsa.png";
import cclan from "./Images/clan.png";

export default function Skills() {
  return (
    <div className="container px-4 py-5">
      <h2 className="pb-2 border-bottom">Skills</h2>
      <div className="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-3">
        <SkillCard
          imgSrc={react}
          title="React JS"
          borderColor="rgb(2, 206, 233)"
        />
        <SkillCard
          imgSrc={nodeimg}
          title="Node JS"
          borderColor="rgb(18, 102, 1)"
        />
        <SkillCard
          imgSrc={express}
          title="Express"
          borderColor="rgb(112, 112, 112)"
        />
        <SkillCard
          imgSrc={mongoimg}
          title="MongoDB"
          borderColor="rgb(18, 102, 1)"
        />
        <SkillCard
          imgSrc={sqlimg}
          title="My SQL"
          borderColor="rgb(0, 17, 165)"
        />
        <SkillCard imgSrc={flask} title="Flask" borderColor="rgb(22, 22, 22)" />
        <SkillCard
          imgSrc={powerbiicon}
          title="Flutter"
          borderColor="rgb(255, 153, 1)"
        />
        <SkillCard
          imgSrc={fluttericon}
          title="Flutter"
          borderColor="rgb(1, 153, 190)"
        />
        <SkillCard
          imgSrc={pythoicon}
          title="Python"
          borderColor="rgb(1, 60, 75)"
        />
        <SkillCard
          imgSrc={javaicon}
          title="Java"
          borderColor="rgb(22, 22, 22)"
        />
        <SkillCard
          imgSrc={dsaicon}
          title="Data Structure"
          borderColor="rgb(255, 153, 1)"
        />
        <SkillCard
          imgSrc={cclan}
          title="C & C++"
          borderColor="rgb(1, 153, 190)"
        />
      </div>
    </div>
  );
}

function SkillCard({ imgSrc, title, borderColor }) {
  return (
    <div className="col">
      <div className="card" style={{ border: `1px solid ${borderColor}` }}>
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="me-3">
              <img src={imgSrc} className={style.svgcontainer} alt={title} />
            </div>
            <div className="fs-5">{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
