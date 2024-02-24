import React from "react";

export default function Quallification() {
  return (
    <div>
      <div class="container px-4 py-5" id="featured-3">
        <h2 class="pb-2 border-bottom">Educational History</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg class="bi" width="1em" height="1em">
                <i class="bi-alarm"></i>
              </svg>
            </div>
            <h3 class="fs-2 text-body-emphasis">B.Tech - ECE</h3>
            <p>
              Completed B.Tech in Electronics and Commuication with 65% from
              Allen House Institute of Technology affliated from AKTU
            </p>
          </div>
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg class="bi" width="1em" height="1em">
                <use xlink:href="#people-circle"></use>
              </svg>
            </div>
            <h3 class="fs-2 text-body-emphasis">12th</h3>
            <p>
              Completed 12th from Kendriya Vidyalaya Cantt Kanpur in 2019 with
              70% having Physics , Chemmictry and Maths as a Core Subjects
            </p>
          </div>
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg class="bi" width="1em" height="1em">
                <use xlink:href="#toggles2"></use>
              </svg>
            </div>
            <h3 class="fs-2 text-body-emphasis">10th</h3>
            <p>
              Completed 12th from Kendriya Vidyalaya Cantt Kanpur in 2017 with
              89% with all primary subjects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
