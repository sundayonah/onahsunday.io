import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Button, Modal } from 'antd';
import Img1 from '../../public/images/my-avatar.png';
import Img2 from '../../public/images/icon-design.svg';
import Img3 from '../../public/images/icon-dev.svg';
import dynamic from 'next/dynamic';

import Portfolio from './portfolio';
import NpmPackages from './npmPackages';
import ThemeToggle from './ThemeToggle';

import AOS from 'aos';
import 'aos/dist/aos.css';


// Dynamically import heavy components
const Education = dynamic(() => import('./education'), {
   //   loading: () => <div>Loading...</div>,
   ssr: false
});
const Experience = dynamic(() => import('./experience'), { ssr: false });
const MySkills = dynamic(() => import('./mySkills'), { ssr: false });
const Clients = dynamic(() => import('./clients'), { ssr: false });
const Contact = dynamic(() => import('./contact'), { ssr: false });
const Research = dynamic(() => import('./research'), { ssr: false });
const BackToTopButton = dynamic(() => import('./backToTopButton'), { ssr: false });
const Header = () => {
   const [active, setActive] = useState(false);


   function handleClick() {
      setActive(!active);
   }

   useEffect(() => {
      AOS.init({ duration: 800 });
   }, []);

   return (
      <div className="eneyi">
         <main>
            {/* - #SIDEBAR */}
            <aside className={`sidebar ${active ? 'active' : ''}`}>
               <div className="sidebar-flip-container">
                  <div className="sidebar-flip-front">
                     <div className="sidebar-info">
                        <figure className="avatar-box">
                           <Image
                              src={Img1}
                              alt="Onah Sunday"
                              width={85}
                              hieght={85}
                           />
                        </figure>
                        <div className="info-content">
                           <h1 className="name" title="Onah Sunday">
                              Onah Sunday
                           </h1>
                           <p className="title">Full Stack Software Engineer</p>
                        </div>
                        <button
                           className="info_more-btn"
                           onClick={() => handleClick()}
                        >
                           <span>Show Contacts</span>
                           <ion-icon name="chevron-down" />
                        </button>
                     </div>
                     <div className="sidebar-info_more">
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
                              ></a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="sidebar-flip-back">
                     <div className="motivational-text">
                        <p>I'm not just writing code—I'm creating solutions, enabling experiences, and building the future, one commit at a time. I keep building. I keep learning. I keep growing.</p>
                     </div>
                  </div>
               </div>
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
                           <a className="navbar-link" href="#education">
                              Education
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
                     {/* <li className="navbar-item">
                        <button onClick={showModal}>
                           <ion-icon
                              className="notification"
                              name="notifications-outline"
                              style={{ fontSize: '1.5rem' }}
                           ></ion-icon>
                        </button>
                     </li> */}
                     <li className="navbar-item">
                        <ThemeToggle />
                     </li>
                  </ul>
               </nav>

               {/*#ABOUT*/}
               <article className="about active" id="about" data-page="about">
                  <header>
                     <h2
                        className="h2 article-title"
                        title="About Me"
                        name="About Me"
                     >
                        About me
                     </h2>
                  </header>
                  <div className="separator" />
                  <section className="about-text">
                     <p>
                        As a Full Stack Software Engineer, I bring a deep passion for
                        crafting elegant, scalable solutions across the web development
                        and Web3 ecosystems. My expertise spans modern frontend frameworks,
                        backend architecture, blockchain integration, and decentralized
                        application development. I am comfortable leveraging AI-powered
                        tools for code review and optimization, ensuring robust,
                        maintainable codebases. Continuously driven by innovation and
                        excellence, I seek opportunities with forward-thinking organizations
                        where I can contribute to impactful projects utilizing cutting-edge
                        technologies and architectural best practices.
                     </p>
                  </section>

                  {/*service*/}

                  <section className="service">
                     <h3 className="h3 service-title">What I am doing!</h3>
                     <ul className="service-list">
                        <li className="service-item" data-aos="fade-up">
                           <div className="service-icon-box">
                              <Image src={Img2} alt="design icon" width={40} />
                           </div>
                           <div className="service-content-box">
                              <h4 className="h4 service-item-title">Full Stack Software Engineer </h4>
                              <p className="service-item-text">
                                 The highest quality and most contemporary design crafted with
                                 professional expertise.
                              </p>
                           </div>
                        </li>
                        <li className="service-item" data-aos="fade-up" data-aos-delay="100">
                           <div className="service-icon-box">
                              <Image src={Img3} alt="Web development icon" width={40} />
                           </div>
                           <div className="service-content-box">
                              <h4 className="h4 service-item-title">Web3 Integration</h4>
                              <p className="service-item-text">
                                 I specialize in integrating decentralized applications (dApp)
                                 using blockchain technologies.
                              </p>
                           </div>
                        </li>
                     </ul>
                  </section>

                  <Clients />

                  <Experience />

                  {/* <Education /> */}

                  <Portfolio />

                  <NpmPackages />

                  <MySkills />

                  <Research />

                  <Contact />
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
