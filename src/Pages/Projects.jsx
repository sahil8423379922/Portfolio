import React from "react";
import p1 from "./Images/Projects/p1.jpg";
import p2 from "./Images/Projects/p2.jpg";
import p3 from "./Images/Projects/p3.jpg";
import i1 from "./Images/Projects/i1.jpg";
import i2 from "./Images/Projects/i2.jpg";
import i3 from "./Images/Projects/i3.jpg";
import i4 from "./Images/Projects/i4.jpg";
import i5 from "./Images/Projects/i5.jpg";
import i6 from "./Images/Projects/i6.jpg";
import style from "./CSS Modules/Dashboard.module.css";
import javaicon from "./Images/java.png";
import xmlicon from "./Images/Projects/xml.png";
import firebaseicon from "./Images/Projects/firebase.png";
import playstoreicon from "./Images/playstore.png";
import githubicon from "./Images/github.png";
import sqlicon from "./Images/sql.png";

export default function Projects() {
  return (
    <div className="container">
      <h2 className="pb-2 border-bottom">Projects Done By Me</h2>
      <div className="card p-4 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        <div className="row pt-2 mb-3">
          <p className="fs-3 text-center fw-semibold text-primary-emphasis">
            IIT Preparation App
          </p>
          <div className="col-lg-3">
            <div className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={i1} className="d-block w-100" alt="Project 1" />
                </div>
                <div className="carousel-item">
                  <img src={i2} className="d-block w-100" alt="Project 2" />
                </div>
                <div className="carousel-item">
                  <img src={i3} className="d-block w-100" alt="Project 3" />
                </div>
                <div className="carousel-item">
                  <img src={i4} className="d-block w-100" alt="Project 3" />
                </div>
                <div className="carousel-item">
                  <img src={i5} className="d-block w-100" alt="Project 3" />
                </div>
                <div className="carousel-item">
                  <img src={i6} className="d-block w-100" alt="Project 3" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <h5 className="fw-semibold pt-2">Description</h5>
            <p className="fs-5">
              IIT Preparation app is a Online learning application created by
              using Java as backend and XML as frontend also this app can render
              PDF and user can take oline quiz also data is stored in both Mysql
              Database and Firebase
            </p>
            <h5 className="fw-semibold pt-3">Tech Stack Used</h5>

            <div className="row">
              <div className="col-md-3 mb-3">
                <div
                  className={`card ${style.tecktackcard} `}
                  style={{ border: "1px solid rgb(255, 153, 1)" }}
                >
                  <div className="card-body m-0 p-2">
                    <div className="row">
                      <div className="col-4">
                        <img
                          src={javaicon}
                          className={style.techstackcard}
                          alt="Java icon"
                        />
                      </div>
                      <div className="col-8 fs-6">Java</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-3">
                <div
                  className={`card ${style.tecktackcard} `}
                  style={{ border: "1px solid rgb(255, 153, 1)" }}
                >
                  <div className="card-body m-0 p-2">
                    <div className="row">
                      <div className="col-4">
                        <img
                          src={xmlicon}
                          className={style.techstackcard}
                          alt="XML icon"
                        />
                      </div>
                      <div className="col-8 fs-6">XML</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-3">
                <div
                  className={`card ${style.tecktackcard} `}
                  style={{ border: "1px solid rgb(255, 153, 1)" }}
                >
                  <div className="card-body m-0 p-2">
                    <div className="row">
                      <div className="col-4">
                        <img
                          src={sqlicon}
                          className={style.techstackcard}
                          alt="Firebase icon"
                        />
                      </div>
                      <div className="col-8 fs-6">Mysql</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-3">
                <div
                  className={`card ${style.tecktackcard} `}
                  style={{ border: "1px solid rgb(255, 153, 1)" }}
                >
                  <div className="card-body m-0 p-2">
                    <div className="row">
                      <div className="col-4">
                        <img
                          src={firebaseicon}
                          className={style.techstackcard}
                          alt="Firebase icon"
                        />
                      </div>
                      <div className="col-8 fs-6">Firebase</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h5 className="fw-semibold pt-3">Explore the Work</h5>

            <div className="row">
              <div className="col-md-3 mb-3">
                <div
                  className={`card ${style.tecktackcard} `}
                  style={{ border: "1px solid rgb(255, 153, 1)" }}
                >
                  <a href="https://play.google.com/store/apps/details?id=com.english.iit_preparation_guide">
                    <div className="card-body m-0 p-2">
                      <div className="row">
                        <div className="col-4">
                          <img
                            src={playstoreicon}
                            className={style.techstackcard}
                            alt="Playstore icon"
                          />
                        </div>
                        <div className="col-8 fs-6">Playstore</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-md-3 mb-3">
                <a href="https://github.com/sahil8423379922">
                  <div
                    className={`card ${style.tecktackcard} `}
                    style={{ border: "1px solid rgb(255, 153, 1)" }}
                  >
                    <div className="card-body m-0 p-2">
                      <div className="row">
                        <div className="col-4">
                          <img
                            src={githubicon}
                            className={style.techstackcard}
                            alt="Github icon"
                          />
                        </div>
                        <div className="col-8 fs-6">Github</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card p-4 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        <div className="row pt-2 mb-3">
          <p className="fs-3 text-center fw-semibold text-primary-emphasis">
            Python Programming App
          </p>
          <div className="col-lg-3">
            <div className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={p1} className="d-block w-100" alt="Project 1" />
                </div>
                <div className="carousel-item">
                  <img src={p2} className="d-block w-100" alt="Project 2" />
                </div>
                <div className="carousel-item">
                  <img src={p3} className="d-block w-100" alt="Project 3" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <h5 className="fw-semibold pt-2">Description</h5>
            <p className="fs-5">
              Python programming app is an online education app created to help
              students learn Python Programming. Students can attend MCQs,
              access notes on different topics of Python, track progress, and
              login using their phone number and OTP.
            </p>
            <h5 className="fw-semibold pt-3">Tech Stack Used</h5>

            <div className="row">
              <div className="col-md-3 mb-3">
                <div
                  className={`card ${style.tecktackcard} `}
                  style={{ border: "1px solid rgb(255, 153, 1)" }}
                >
                  <div className="card-body m-0 p-2">
                    <div className="row">
                      <div className="col-4">
                        <img
                          src={javaicon}
                          className={style.techstackcard}
                          alt="Java icon"
                        />
                      </div>
                      <div className="col-8 fs-6">Java</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-3">
                <div
                  className={`card ${style.tecktackcard} `}
                  style={{ border: "1px solid rgb(255, 153, 1)" }}
                >
                  <div className="card-body m-0 p-2">
                    <div className="row">
                      <div className="col-4">
                        <img
                          src={xmlicon}
                          className={style.techstackcard}
                          alt="XML icon"
                        />
                      </div>
                      <div className="col-8 fs-6">XML</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-3">
                <div
                  className={`card ${style.tecktackcard} `}
                  style={{ border: "1px solid rgb(255, 153, 1)" }}
                >
                  <div className="card-body m-0 p-2">
                    <div className="row">
                      <div className="col-4">
                        <img
                          src={firebaseicon}
                          className={style.techstackcard}
                          alt="Firebase icon"
                        />
                      </div>
                      <div className="col-8 fs-6">Firebase</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-3">
                <div
                  className={`card ${style.tecktackcard} `}
                  style={{ border: "1px solid rgb(255, 153, 1)" }}
                >
                  <div className="card-body m-0 p-2">
                    <div className="row">
                      <div className="col-4">
                        <img
                          src={sqlicon}
                          className={style.techstackcard}
                          alt="Firebase icon"
                        />
                      </div>
                      <div className="col-8 fs-6">Mysql</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h5 className="fw-semibold pt-3">Explore the Work</h5>

            <div className="row">
              <div className="col-md-3 mb-3">
                <div
                  className={`card ${style.tecktackcard} `}
                  style={{ border: "1px solid rgb(255, 153, 1)" }}
                >
                  <a href="https://play.google.com/store/apps/details?id=com.priyanka.python_programming&hl=en&gl=US">
                    <div className="card-body m-0 p-2">
                      <div className="row">
                        <div className="col-4">
                          <img
                            src={playstoreicon}
                            className={style.techstackcard}
                            alt="Playstore icon"
                          />
                        </div>
                        <div className="col-8 fs-6">Playstore</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-md-3 mb-3">
                <a href="https://github.com/sahil8423379922">
                  <div
                    className={`card ${style.tecktackcard} `}
                    style={{ border: "1px solid rgb(255, 153, 1)" }}
                  >
                    <div className="card-body m-0 p-2">
                      <div className="row">
                        <div className="col-4">
                          <img
                            src={githubicon}
                            className={style.techstackcard}
                            alt="Github icon"
                          />
                        </div>
                        <div className="col-8 fs-6">Github</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
