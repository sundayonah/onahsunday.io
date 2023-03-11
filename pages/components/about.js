import React, { useState, useRef } from "react";
// import "./javascript/script";

//IMAGES
// import Img1 from "../images/my-avatar.png";
// import Img2 from "../images/icon-design.svg";
// import Img3 from "../images/icon-dev.svg";
// import port1 from "../images/personal.png";
// import port2 from "../images/bida-countdown.png";
// import port3 from "../images/reactmovie.png";
// import port4 from "../images/otoport.png";
// import port5 from "../images/bida.png";
// import { switchActiveNavbarLink } from "./js/script";

// Use the function in your component
// switchActiveNavbarLink();

const Navbar = () => {
  const [darkColor, setDarkColor] = useState(false);
  const [elementVisible, setElementVisible] = useState(false);

  // const elementRef = useRef(null);

  // const handleNavClick = () => {
  //   if (elementRef.current) {
  //     elementToggleFunc(elementRef.current);
  //   }
  // };
  // use the function here
  // portpholio();

  return (
    <div className="eneyi">
      <main>
        {/* - #SIDEBAR */}
        <aside className="sidebar" data-sidebar>
          <div className="sidebar-info">
            <figure className="avatar-box">
              <img src="" alt="Onah Sunday" width={80} />
            </figure>
            <div className="info-content">
              <h1 className="name" title="Onah Sunday">
                Onah Sunday
              </h1>
              <p className="title">Web3/Front-End Engineer</p>
            </div>
            <button className="info_more-btn" data-sidebar-btn>
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
        </aside>

        {/*#NAVBAR*/}
        <div className="main-content">
          <nav className="navbar">
            <ul className="navbar-list">
              <li className="navbar-item">
                <button className="navbar-link active" data-nav-link>
                  About
                </button>
              </li>
              <li className="navbar-item">
                <button className="navbar-link" data-nav-link>
                  Resume
                </button>
              </li>
              <li className="navbar-item">
                <button className="navbar-link" data-nav-link>
                  Portfolio
                </button>
              </li>
              <li className="navbar-item">
                <button className="navbar-link" data-nav-link>
                  Blog
                </button>
              </li>
              <li className="navbar-item">
                <button className="navbar-link" data-nav-link>
                  Contact
                </button>
              </li>
              <li className="navbar-item">
                <button className="navbar-link">
                  {/* {darkColor ? (
                    <ion-icon name="moon" />
                  ) : (
                    <ion-icon name="sunny" />
                  )} */}
                </button>
              </li>
            </ul>
          </nav>

          {/*#ABOUT*/}
          <article className="about active" data-page="about">
            <header>
              <h2 className="h2 article-title">About me</h2>
            </header>
            <section className="about-text">
              <p>
                I am an ambitious Front-End / Web3 Developer with more than two
                years of experience, who is passionate about coding and looking
                for a position in a reputable IT company with the chance to work
                with the newest technology on complex and varied projects.
              </p>
              <p>
                My biggest strength has always been my ability to constantly be
                prepared for any challenges that may arise. I also enjoy
                learning about new chances that will allow me to hone my
                abilities and provide me with the ability to collaborate with
                other programmers around the globe.
              </p>
            </section>

            {/*service*/}
            <section className="service">
              <h3 className="h3 service-title">What i am doing!</h3>
              <ul className="service-list">
                <li className="service-item">
                  <div className="service-icon-box">
                    <img src="" alt="design icon" width={40} />
                  </div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">
                      Front-End Developer
                    </h4>
                    <p className="service-item-text">
                      The most modern and high-quality design made at a
                      professional level.
                    </p>
                  </div>
                </li>
                <li className="service-item">
                  <div className="service-icon-box">
                    <img src="" alt="Web development icon" width={40} />
                  </div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">Web3 Developer</h4>
                    <p className="service-item-text">
                      High-quality development of sites at the professional
                      level.
                    </p>
                  </div>
                </li>
              </ul>
            </section>
            {/* <!--
          - clients
         --> */}

            <section className="clients">
              <h3 className="h3 clients-title">Clients</h3>

              <ul className="clients-list has-scrollbar">
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
                </li>
              </ul>
            </section>
          </article>

          {/*#RESUME*/}
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

          {/*#PORTFOLIO*/}
          <article className="portfolio" data-page="portfolio">
            <header>
              <h2 className="h2 article-title">Portfolio</h2>
            </header>
            <section className="projects">
              <ul className="filter-list">
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
              </ul>
              <div className="filter-select-box">
                <button className="filter-select" data-select>
                  <div className="select-value" data-selecct-value>
                    Select category
                  </div>
                  <div className="select-icon">
                    <ion-icon name="chevron-down" />
                  </div>
                </button>
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
                    href="https://bidauction-token-v2migration.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline" />
                      </div>
                      <img src="" alt="finance" loading="lazy" />
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
                  <a href="#" target="_blank" rel="noreferrer">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline" />
                      </div>
                      <img src="" alt="orizon" loading="lazy" />
                    </figure>
                    <h3 className="project-title">Orizon</h3>
                    <p className="project-category">Web development</p>
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
                      <img src="" alt="fundo" loading="lazy" />
                    </figure>
                    <h3 className="project-title">Fundo</h3>
                    <p className="project-category">Web design</p>
                  </a>
                </li>
                <li
                  className="project-item active"
                  data-filter-item=""
                  data-category="applications"
                >
                  <a href="#" target="_blank" rel="noreferrer">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline" />
                      </div>
                      <img src="" alt="brawlhalla" loading="lazy" />
                    </figure>
                    <h3 className="project-title">Brawlhalla</h3>
                    <p className="project-category">Applications</p>
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
                      <img src="" alt="dsm." loading="lazy" />
                    </figure>
                    <h3 className="project-title">DSM.</h3>
                    <p className="project-category">Web design</p>
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
                      <img src="" alt="metaspark" loading="lazy" />
                    </figure>
                    <h3 className="project-title">MetaSpark</h3>
                    <p className="project-category">Web design</p>
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
                      <img src="" alt="summary" loading="lazy" />
                    </figure>
                    <h3 className="project-title">Summary</h3>
                    <p className="project-category">Web development</p>
                  </a>
                </li>
                <li
                  className="project-item active"
                  data-filter-item=""
                  data-category="applications"
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
                      <img src="" alt="task manager" loading="lazy" />
                    </figure>
                    <h3 className="project-title">Movie APP</h3>
                    <p className="project-category">Web Developement</p>
                  </a>
                </li>
                <li
                  className="project-item active"
                  data-filter-item=""
                  data-category="web development"
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
                      <img src="" alt="portfolio" loading="lazy" />
                    </figure>
                    <h3 className="project-title">Blockchain Portfolio</h3>
                    <p className="project-category">Web development</p>
                  </a>
                </li>
              </ul>
            </section>
          </article>

          {/*#BLOG*/}
          <article className="blog" data-page="blog">
            <header>
              <h2 className="h2 article-title">Blog</h2>
            </header>
            <section className="blog-posts">
              <ul className="blog-posts-list">
                <li className="blog-post-item">
                  <a
                    href="https://onahprosperity.github.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <figure className="blog-banner-box">
                      <img
                        src=""
                        alt="Smart Contract Engineer/Auditor "
                        loading="lazy"
                      />
                    </figure>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <p className="blog-category">Porfolio</p>
                        <span className="dot" />
                        <time dateTime="2022-02-23">Nov 09, 2022</time>
                      </div>
                      <h3 className="h3 blog-item-title">
                        Smart Contract Engineer/Auditor
                      </h3>
                      <p className="blog-text">
                        Experimenting with new tools and opportunities for
                        innovation.
                      </p>
                    </div>
                  </a>
                </li>
                <li className="blog-post-item">
                  <a href="#">
                    <figure className="blog-banner-box">
                      <img
                        src="./assets/images/blog-2.jpg"
                        alt="Best fonts every designer"
                        loading="lazy"
                      />
                    </figure>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <p className="blog-category">React Doc</p>
                        <span className="dot" />
                        <time dateTime="2022-02-23">march 2, 2023</time>
                      </div>
                      <h3 className="h3 blog-item-title">Getting Started </h3>
                      <p className="blog-text">
                        React is a JavaScript library for building user
                        interfaces. Learn what React is all about on our
                        homepage or in the tutorial.
                      </p>
                    </div>
                  </a>
                </li>
                <li className="blog-post-item">
                  <a href="#">
                    <figure className="blog-banner-box">
                      <img
                        src="./assets/images/blog-3.jpg"
                        alt="Design digest #80"
                        loading="lazy"
                      />
                    </figure>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <p className="blog-category">Design</p>
                        <span className="dot" />
                        <time dateTime="2022-02-23">Fab 23, 2022</time>
                      </div>
                      <h3 className="h3 blog-item-title">Design digest #80</h3>
                      <p className="blog-text">
                        Excepteur sint occaecat cupidatat no proident, quis
                        nostrum exercitationem ullam corporis suscipit.
                      </p>
                    </div>
                  </a>
                </li>
                <li className="blog-post-item">
                  <a href="#">
                    <figure className="blog-banner-box">
                      <img
                        src="./assets/images/blog-4.jpg"
                        alt="UI interactions of the week"
                        loading="lazy"
                      />
                    </figure>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <p className="blog-category">Design</p>
                        <span className="dot" />
                        <time dateTime="2022-02-23">Fab 23, 2022</time>
                      </div>
                      <h3 className="h3 blog-item-title">
                        UI interactions of the week
                      </h3>
                      <p className="blog-text">
                        Enim ad minim veniam, consectetur adipiscing elit, quis
                        nostrud exercitation ullamco laboris nisi.
                      </p>
                    </div>
                  </a>
                </li>
                <li className="blog-post-item">
                  <a href="#">
                    <figure className="blog-banner-box">
                      <img
                        src="./assets/images/blog-5.jpg"
                        alt="The forgotten art of spacing"
                        loading="lazy"
                      />
                    </figure>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <p className="blog-category">Design</p>
                        <span className="dot" />
                        <time dateTime="2022-02-23">Fab 23, 2022</time>
                      </div>
                      <h3 className="h3 blog-item-title">
                        The forgotten art of spacing
                      </h3>
                      <p className="blog-text">
                        Maxime placeat, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                    </div>
                  </a>
                </li>
                <li className="blog-post-item">
                  <a href="#">
                    <figure className="blog-banner-box">
                      <img
                        src="./assets/images/blog-6.jpg"
                        alt="Design digest #79"
                        loading="lazy"
                      />
                    </figure>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <p className="blog-category">Design</p>
                        <span className="dot" />
                        <time dateTime="2022-02-23">Fab 23, 2022</time>
                      </div>
                      <h3 className="h3 blog-item-title">Design digest #79</h3>
                      <p className="blog-text">
                        Optio cumque nihil impedit uo minus quod maxime placeat,
                        velit esse cillum.
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </section>
          </article>

          {/*#CONTACT*/}
          <article className="contact" data-page="contact">
            <header>
              <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="contact-form">
              {/* <h3 className="h3 form-title">Contact Info</h3> */}
              <div>
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
              {/* <form action="#" className="form" data-form="">
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="fullname"
                    className="form-input"
                    placeholder="Full name"
                    required=""
                    data-form-input=""
                  />
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Email address"
                    required=""
                    data-form-input=""
                  />
                </div>
                <textarea
                  name="message"
                  className="form-input"
                  placeholder="Your Message"
                  required=""
                  data-form-input=""
                  defaultValue={""}
                />
                <button
                  className="form-btn"
                  type="submit"
                  disabled=""
                  data-form-btn=""
                >
                  <ion-icon name="paper-plane" />
                  <span>Send Message</span>
                </button>
              </form> */}
            </section>
          </article>
        </div>
      <script src="./js/script.js" defer />
      </main>
      {/* <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script> */}
    </div>
  );
};
export default Navbar;
