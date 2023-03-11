const header = () => {
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
                  <a href="#about">About</a>
                </button>
              </li>
              <li className="navbar-item">
                <button className="navbar-link" data-nav-link>
                  <a href="#resume">Resume</a>
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
          <article className="about active" id="about" data-page="about">
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

            {/* RESUME */}
            <div className="top-space" id="resume">
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
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};
export default header;
