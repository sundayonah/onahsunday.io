import React, { useState } from "react";
import Image from "next/image";
import { Button, Modal } from "antd";

import BackToTopButton from "./backToTopButton";

import Img1 from "../images/my-avatar.png";
import Img2 from "../images/icon-design.svg";
import Img3 from "../images/icon-dev.svg";
// portfolio
import port1 from "../images/personal.png";
import port2 from "../images/bida-countdown.png";
import port3 from "../images/reactmovie.png";
import port4 from "../images/otoport.png";
import port5 from "../images/bida.png";
import port6 from "../images/uniswap.png";
import port7 from "../images/lead-tracker.png";

//client
import clt1 from "../images/bida-logo.png";
const Header = () => {
  //IMAGES
  const [active, setActive] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [visible, setVisible] = useState(false);

  function handleClick() {
    setActive(!active);
  }

  // const handleToggleTheme = () => {
  //   setDarkTheme((prevTheme) => !prevTheme);
  // };

  const showModal = () => {
    setVisible(true);
  };
  var peace = "🙋";

  return (
    <div className="eneyi">
      <Modal
        open={visible}
        footer={null}
        onCancel={() => setVisible(false)}
        title="Notice"
        // set background color here
      >
        <div className="modalContent">
          <p>We will be adding toggle mode soon {peace}.</p>
        </div>
      </Modal>
      <main>
        {/* - #SIDEBAR */}

        <aside className={`sidebar ${active ? "active" : ""}`} data-sidebar>
          <div className="sidebar-info">
            <figure className="avatar-box">
              <Image src={Img1} alt="Onah Sunday" width={85} hieght={85} />
            </figure>
            <div className="info-content">
              <h1 className="name" title="Onah Sunday">
                Onah Sunday
              </h1>
              <p className="title">Front-End / Web3 Dev.</p>
            </div>
            <button className="info_more-btn" onClick={() => handleClick()}>
              <span>Show Contacts</span>
              <ion-icon name="chevron-down" />
            </button>
          </div>
          <div className="sidebar-info_more">
            <div className="separator" />
            <div className="separator" />
            <ul className="social-list">
              <li className="social-item">
                <a
                  href="https://github.com/sundayonah"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="logo-github" />
                </a>
              </li>
              <li className="social-item">
                <a
                  href="https://twitter.com/xhunkleph"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="logo-twitter" />
                </a>
              </li>
              <li className="social-item">
                <a
                  href="https://www.linkedin.com/in/onah-sunday-0b783921a/"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="logo-linkedin" />
                </a>
              </li>
              <li className="social-item">
                <a
                  href="mailto:sundayonah94@gmail.com"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="mail" />
                </a>
              </li>
            </ul>
          </div>
          {/* <h1>hello</h1> */}
        </aside>

        {/*#NAVBAR*/}
        <div className="main-content">
          <nav className="navbar">
            <ul className="navbar-list">
              <li className="navbar-item">
                <button data-nav-link>
                  <a className="navbar-link" href="#about">
                    About
                  </a>
                </button>
              </li>
              <li className="navbar-item">
                <button data-nav-link>
                  <a className="navbar-link" href="#resume">
                    Resume
                  </a>
                </button>
              </li>
              <li className="navbar-item">
                <button data-nav-link>
                  <a className="navbar-link" href="#portfolio">
                    Portfolio
                  </a>
                </button>
              </li>
              <li className="navbar-item">
                <button data-nav-link>
                  <a className="navbar-link" href="#contact">
                    Contact
                  </a>
                </button>
              </li>
              <li className="navbar-item">
                <button onClick={showModal}>
                  <ion-icon
                    className="notification"
                    name="notifications-outline"
                    style={{ fontSize: "1.5rem", color: "white" }}
                  ></ion-icon>
                </button>
              </li>
              <li className="navbar-item">
                {/* <div className={`themeToggle ${darkTheme ? "dark" : "light"}`}>
                  <div onClick={()=>handleToggleTheme()}>
                    {darkTheme ? (
                      <ion-icon name="moon" />
                    ) : (
                      <ion-icon name="sunny" />
                    )}
                  </div>
                </div> */}
              </li>
            </ul>
          </nav>

          {/*#ABOUT*/}
          <article className="about active" id="about" data-page="about">
            <header>
              <h2 className="h2 article-title">About me</h2>
            </header>
            <div className="separator" />

            <section className="about-text">
              <p>
                As a Front-End / web3 Developer, I possess a great love for
                coding and have gained more than a year of experience. I have
                fully immersed myself in web development and web3, and I am
                continuously seeking new opportunities to learn and improve. I
                aim to join a reputable IT company where I can work on various
                challenging projects utilizing the most recent technologies.
              </p>
              <p>
                My greatest strength is my ability to easily handle challenges
                and continuously learn. I am constantly seeking new
                opportunities to sharpen my skills and work alongside
                programmers from all over the world. I am excited to bring my
                experience, passion, and expertise to the table to contribute to
                the company(s) success. With my strong work ethic, commitment,
                and eagerness to learn, I am confident that I can make
                meaningful contributions to any team.
              </p>
            </section>

            {/*service*/}
            <section className="service">
              <h3 className="h3 service-title">What i am doing!</h3>
              <ul className="service-list">
                <li className="service-item">
                  <div className="service-icon-box">
                    <Image src={Img2} alt="design icon" width={40} />
                  </div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">
                      Front-End Developer
                    </h4>
                    {/* <p className="service-item-text">
                      The highest quality and most contemporary design crafted
                      with professional expertise.
                    </p> */}
                  </div>
                </li>
                <li className="service-item">
                  <div className="service-icon-box">
                    <Image src={Img3} alt="Web development icon" width={40} />
                  </div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">Web3 Developer</h4>
                    {/* <p className="service-item-text">
                      I specializes in developing decentralized applications
                      using blockchain technologies and protocols.
                    </p> */}
                  </div>
                </li>
              </ul>
            </section>
            {/*<!---clients-->*/}

            <section className="clients">
              <h3 className="h3 clients-title">Clients</h3>

              <ul className="clients-list has-scrollbar">
                <li className="clients-item">
                  <a href="https://onahprosperity.github.io/" target="_blank">
                    <Image src={Img1} alt="client logo" />
                  </a>
                </li>

                <li className="clients-item">
                  <a
                    href="https://bidauction-token-v2migration.vercel.app/"
                    target="_blank"
                  >
                    <Image src={clt1} alt="client logo" />
                  </a>
                </li>

                {/* <li className="clients-item">
                  <a href="#">
                    <img src="" alt="client logo" />
                  </a>
                </li>

                <li className="clients-item">
                  <a href="#">
                    <img src="" alt="client logo" />
                  </a>
                </li>

                <li className="clients-item">
                  <a href="#">
                    <img src="" alt="client logo" />
                  </a>
                </li>

                <li className="clients-item">
                  <a href="#">
                    <img src="" alt="client logo" />
                  </a>
                </li> */}
              </ul>
            </section>

            {/* RESUME */}
            <div className="top-space" id="resume">
              <header>
                <h2 className="h2 article-title">Resume</h2>
              </header>
              <div className="separator" />

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
                    <p className="timeline-text">Computer Science</p>
                  </li>
                  <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">
                      Nigeria National Petroleum Council
                    </h4>
                    <span>2016 — 2017</span>
                    <p className="timeline-text">Information Technology </p>
                    <p className="timeline-text">NNPC</p>
                  </li>
                  <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">
                      Moshood Abiola Polytechnic
                    </h4>
                    <span>2017 — 2019</span>
                    <p className="timeline-text">
                      Higher National Diploma – HND, Computer Science
                    </p>
                    <p className="timeline-text">Computer Science</p>
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
                      <span className="timeline-text">TailwindCSS,</span>
                      <span className="timeline-text">HTML/CSS.</span>
                    </div>
                  </li>
                  <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">
                      Smart Contract Engineer Portfolio
                    </h4>
                    <span>2022 — 2023</span>
                    <p className="timeline-text">Full Stack Developer</p>
                    {/* <p className="timeline-text">Integration.</p> */}
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
                      <p className="timeline-text">Node.js</p>
                      <p className="timeline-text">Firebase</p>
                      {/* <p className="timeline-text">Node.js</p> */}
                    </li>
                  </div>
                </ul>
              </section>
            </div>

            {/* PORTFOLIO /../././././*/}
            <div className="top-space" id="portfolio">
              <header>
                <h2 className="h2 article-title">Portfolio</h2>
              </header>
              <div className="separator" />

              <section className="projects">
                {/* <ul className="filter-list">
                  <li className="filter-item">
                    <button className="active" data-filter-btn="">
                      All
                    </button>
                  </li>
                  <li className="filter-item">
                    <button data-filter-btn="">Web design</button>
                  </li>
                  <li className="filter-item">
                    <button data-filter-btn="">Applications</button>
                  </li>
                  <li className="filter-item">
                    <button data-filter-btn="">Web development</button>
                  </li>
                </ul> */}
                <div className="filter-select-box">
                  {/* <button className="filter-select" data-select>
                    <div className="select-value" data-selecct-value>
                      Select category
                    </div>
                    <div className="select-icon">
                      <ion-icon name="chevron-down" />
                    </div>
                  </button> */}
                  <ul className="select-list">
                    <li className="select-item">
                      <button data-select-item="">All</button>
                    </li>
                    <li className="select-item">
                      <button data-select-item="">Web design</button>
                    </li>
                    <li className="select-item">
                      <button data-select-item="">Applications</button>
                    </li>
                    <li className="select-item">
                      <button data-select-item="">Web development</button>
                    </li>
                  </ul>
                </div>
                <ul className="project-list">
                  <li
                    className="project-item active"
                    data-filter-item=""
                    data-category="web development"
                  >
                    <a
                      href="https://onahsunday.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline" />
                        </div>
                        <Image src={port1} alt="finance" loading="lazy" />
                      </figure>
                      <h3 className="project-title">Personal Portfolio</h3>
                      <p className="project-category">Web development</p>
                    </a>
                  </li>
                  <li
                    className="project-item active"
                    data-filter-item=""
                    data-category="web development"
                  >
                    <a
                      href="https://xhunteq-movie.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline" />
                        </div>
                        <Image src={port3} alt="orizon" loading="lazy" />
                      </figure>
                      <h3 className="project-title">
                        Search for your Favorite Movie
                      </h3>
                      <p className="project-category">Web development</p>
                    </a>
                  </li>
                  <li
                    className="project-item active"
                    data-filter-item=""
                    data-category="web design"
                  >
                    <a
                      href="https://onahprosperity.github.io/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline" />
                        </div>
                        <Image src={port4} alt="fundo" loading="lazy" />
                      </figure>
                      <h3 className="project-title">
                        Smart Contract Portfolio
                      </h3>
                      <p className="project-category">
                        Smart Contract Engineer/Auditor
                      </p>
                    </a>
                  </li>
                  <li
                    className="project-item active"
                    data-filter-item=""
                    data-category="applications"
                  >
                    <a
                      href="https://bidauction-token-v2migration.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline" />
                        </div>
                        <Image src={port5} alt="brawlhalla" loading="lazy" />
                      </figure>
                      <h3 className="project-title">Bid Auction </h3>
                      <p className="project-category">
                        Migration from Token V1 to To Token V2
                      </p>
                    </a>
                  </li>
                  <li
                    className="project-item active"
                    data-filter-item=""
                    data-category="web design"
                  >
                    <a href="#" target="_blank" rel="noreferrer">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline" />
                        </div>
                        <Image src={port6} alt="dsm." loading="lazy" />
                      </figure>
                      <h3 className="project-title">uniswap Clone</h3>
                      <p className="project-category">
                        A decentralized exchange (DEX) platform that mimics the
                        functionality of Uniswap.
                      </p>
                    </a>
                  </li>
                  <li
                    className="project-item active"
                    data-filter-item=""
                    data-category="web design"
                  >
                    <a href="#" target="_blank" rel="noreferrer">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline" />
                        </div>
                        <Image src={port6} alt="metaspark" loading="lazy" />
                      </figure>
                      <h3 className="project-title">uniswap Clone</h3>
                      <p className="project-category">
                        A decentralized exchange (DEX) platform that mimics the
                        functionality of Uniswap.
                      </p>
                    </a>
                  </li>
                  <li
                    className="project-item active"
                    data-filter-item=""
                    data-category="web development"
                  >
                    <a href="#" target="_blank" rel="noreferrer">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline" />
                        </div>
                        <Image src={port7} alt="summary" loading="lazy" />
                      </figure>
                      <h3 className="project-title">Lead Tracker</h3>
                      <p className="project-category">
                        Lead_Tracker (extension) Where you can add/save your
                        preffered url.
                      </p>
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="top-space" id="contact">
              <header>
                <h2 className="h2 article-title">Contact</h2>
              </header>
              <section className="contact-form">
                {/* <h3 className="h3 form-title">Contact Info</h3> */}
                <div>
                  <div className="separator" />
                  {/* <div className="separator" /> */}
                  <ul className="social-list">
                    <li className="social-item">
                      <a
                        href="https://github.com/sundayonah"
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ion-icon name="logo-github" />
                      </a>
                    </li>
                    <li className="social-item">
                      <a
                        href="https://twitter.com/xhunkleph"
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ion-icon name="logo-twitter" />
                      </a>
                    </li>
                    <li className="social-item">
                      <a
                        href="https://www.linkedin.com/in/onah-sunday-0b783921a/"
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ion-icon name="logo-linkedin" />
                      </a>
                    </li>
                    <li className="social-item">
                      <a
                        href="mailto:sundayonah94@gmail.com"
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ion-icon name="mail" />
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </article>
        </div>
      </main>
      <div>
        <BackToTopButton />
      </div>
    </div>
  );
};
export default Header;
