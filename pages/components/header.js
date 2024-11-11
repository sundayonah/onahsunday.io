import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button, Modal } from 'antd';
import Img1 from '../images/my-avatar.png';
import Img2 from '../images/icon-design.svg';
import Img3 from '../images/icon-dev.svg';
import dynamic from 'next/dynamic';


import Portfolio from './portfolio';
import NpmPackages from './npmPackages';

// Dynamically import heavy components
const Resume = dynamic(() => import('./resume'), { 
//   loading: () => <div>Loading...</div>,
  ssr: false 
});
const Experience = dynamic(() => import('./experience'), { ssr: false });
const MySkills = dynamic(() => import('./mySkills'), { ssr: false });
const Clients = dynamic(() => import('./clients'), { ssr: false });
const Contact = dynamic(() => import('./contact'), { ssr: false });
const BackToTopButton = dynamic(() => import('./backToTopButton'), { ssr: false });
const Header = () => {
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
   var peace = '🙋';


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

            <aside className={`sidebar ${active ? 'active' : ''}`} data-sidebar>
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
                     <p className="title">Front-End | Web3 Int.</p>
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
                              style={{ fontSize: '1.5rem', color: 'white' }}
                           ></ion-icon>
                        </button>
                     </li>
                     <li className="navbar-item"></li>
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
                        As a Front-End / web3 Developer, I possess a great love
                        for coding and have gained more than a two years of
                        experience. I have fully immersed myself in web
                        development and web3, and I am continuously seeking new
                        opportunities to learn and improve. I aim to join a
                        reputable IT company where I can work on various
                        challenging projects utilizing the most recent
                        technologies.
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
                              <p className="service-item-text">
                                 The highest quality and most contemporary
                                 design crafted with professional expertise.
                              </p>
                           </div>
                        </li>
                        <li className="service-item">
                           <div className="service-icon-box">
                              <Image
                                 src={Img3}
                                 alt="Web development icon"
                                 width={40}
                              />
                           </div>
                           <div className="service-content-box">
                              <h4 className="h4 service-item-title">
                                 Web3 Integration
                              </h4>
                              <p className="service-item-text">
                                 I specializes in integrating decentralized
                                 applications {`(dApp)`}, using blockchain
                                 technologies and protocols.{' '}
                                 {`< Ethereum, Solana />`}
                              </p>
                           </div>
                        </li>
                     </ul>
                  </section>

                  <Clients />

                  <Experience />

                  <Resume />

                  <Portfolio  />

                  <NpmPackages />

                  <MySkills />

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
