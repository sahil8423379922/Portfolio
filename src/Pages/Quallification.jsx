import React from "react";
import { Card } from "react-bootstrap";

export default function Quallification() {
  return (
    <div>
      <div class="container px-4 py-5" id="featured-3">
        <h2 class="pb-2 border-bottom">Educational History</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <Card className="mx-2">
            <div class="feature col">
              <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <svg class="bi" width="1em" height="1em">
                  <i class="bi-alarm"></i>
                </svg>
              </div>
              <h3 class="fs-2 text-body-emphasis">B.Tech - ECE</h3>

              <div className="pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-calendar"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg>
                <span className="ps-2 fw-semibold">2019-2023</span>
              </div>

              <p>
                Completed B.Tech in Electronics and Commuication with 65% from
                Allen House Institute of Technology affliated from AKTU
              </p>
            </div>
          </Card>

          <Card className="mx-2">
            <div class="feature col">
              <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <svg class="bi" width="1em" height="1em">
                  <use xlink:href="#people-circle"></use>
                </svg>
              </div>
              <h3 class="fs-2 text-body-emphasis">12th</h3>
              <div className="pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-calendar"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg>
                <span className="ps-2 fw-semibold">2019-2023</span>
              </div>
              <p>
                Completed 12th from Kendriya Vidyalaya Cantt Kanpur in 2019 with
                70% having Physics , Chemmictry and Maths as a Core Subjects
              </p>
            </div>
          </Card>

          <Card className="mx-2">
            <div class="feature col">
              <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <svg class="bi" width="1em" height="1em">
                  <use xlink:href="#toggles2"></use>
                </svg>
              </div>
              <h3 class="fs-2 text-body-emphasis">10th</h3>

              <div className="pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-calendar"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg>
                <span className="ps-2 fw-semibold">2016-2017</span>
              </div>
              <p>
                Completed 12th from Kendriya Vidyalaya Cantt Kanpur in 2017 with
                89% with all primary subjects
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
