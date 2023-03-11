import React from "react";

const resume = () => {
  return (
    <div>
      <main>
        {/*#RESUME*/}
        <div className="main-content">
          <article className="resume" data-page="resume">
            <header>
              <h2 className="h2 article-title">Resume</h2>
            </header>
            <section className="timeline">
              <div className="title-wrapper">
                <div className="icon-box">
                  <ion-icon name="book-outline" />
                </div>
                <h3 className="h3">Education</h3>
              </div>
              <ol className="timeline-list">
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    Moshood Abiola Polytechnic
                  </h4>
                  <span>2014 — 2016</span>
                  <p className="timeline-text">
                    Ordinary National Diploma – OND, Computer Science
                  </p>
                </li>
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    Nigeria National Petroleum Council
                  </h4>
                  <span>2016 — 2017</span>
                  <p className="timeline-text">Information Technology </p>
                </li>
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    Moshood Abiola Polytechnic
                  </h4>
                  <span>2017 — 2019</span>
                  <p className="timeline-text">
                    Higher National Diploma – HND, Computer Science
                  </p>
                </li>
              </ol>
            </section>
            <section className="timeline">
              <div className="title-wrapper">
                <div className="icon-box">
                  <ion-icon name="book-outline" />
                </div>
                <h3 className="h3">Experience</h3>
              </div>
              <ol className="timeline-list">
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    BIDA Token Migration
                  </h4>
                  <span>2023 — Present</span>
                  <p className="timeline-text">Design The Front-End.</p>
                  <p className="timeline-text">Integration.</p>
                  <h4 className="h4 timeline-item-title">Skills </h4>
                  <div className="technology">
                    <span className="timeline-text">React,</span>
                    <span className="timeline-text">Solidity,</span>
                    <span className="timeline-text">Ethers.js,</span>
                    <span className="timeline-text">Web3,</span>
                    <span className="timeline-text">HTML/CSS.</span>
                  </div>
                </li>
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    Prosperity Portfolio
                  </h4>
                  <span>2022 — 2023</span>
                  <p className="timeline-text">Full Stack Developer</p>
                  <p className="timeline-text">Integration.</p>
                  <h4 className="h4 timeline-item-title">Skills </h4>
                  <div className="technology">
                    <span className="timeline-text">React,</span>
                    <span className="timeline-text">Javascript,</span>
                    <span className="timeline-text">HTML/CSS,</span>
                    <span className="timeline-text">React/Icons</span>
                  </div>
                </li>
              </ol>
            </section>
            <section className="skill">
              <h3 className="h3 skills-title">My skills</h3>
              <ul className="skills-list content-card">
                <div className="myTechnology">
                  <li className="skills-item">
                    {/* FRONT-END */}
                    <h4 className="h4 skills-title">Front-End</h4>
                    <p className="timeline-text">React</p>
                    <p className="timeline-text">HTML/CSS</p>
                    <p className="timeline-text">Javascript</p>
                    <p className="timeline-text">Next.js</p>
                    <p className="timeline-text">Googling, Git</p>
                  </li>
                  <hr className="hr" />

                  {/* BACK-END */}
                  <li className="skills-item">
                    <h4 className="h4 skills-title">Back-End</h4>
                    <p className="timeline-text">solidity</p>
                  </li>
                </div>
              </ul>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
};
export default resume;
