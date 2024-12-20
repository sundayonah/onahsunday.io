import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {

   useEffect(() => {
      AOS.init({ duration: 800, once: true });
   }, []);


   return (
      <>
         {/* EXPERIENCE */}
         <section className="timeline" id="resume">
            <header>
               <h2 className="h2 article-title" title="Resume" name="Resume" data-aos="fade-up">
                  Resume
               </h2>
            </header>
            <div className="separator" />
            <div className="title-wrapper" data-aos="fade-up">
               <div className="icon-box">
                  <ion-icon name="book-outline" />
               </div>
               <h3 className="h3">Experience</h3>
            </div>
            <ol className="timeline-list">

               <li className="timeline-item" data-aos="fade-up">
                  <h4 className="h4 timeline-item-title">
                     Full Stack Software Engineer @Paycrest, Inc
                  </h4>
                  <span>November 2024 — Present</span>
                  <p className="timeline-text">
                     Paycrest, a platform transforming cross-border payments with seamless cryptocurrency-to-fiat and fiat-to-cryptocurrency exchanges. Designed and implemented core mechanisms for automated liquidity aggregation and management, ensuring efficient, scalable, and user-friendly payment processes while advancing financial inclusion in underserved global markets.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Implemented Centiiv Payment Service Provider (PSP) with test.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Implemented Flutterwave Multi-Currency Payment Provider Integration with test.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Implemented HoneyCoin Payment Service Provider (PSP) with test.
                  </p>

                  <h4 className="h4 timeline-item-title">Skills </h4>
                  <div className="techStack">
                     <span className="timeline-text">Go</span>

                  </div>
               </li>


               <li className="timeline-item" data-aos="fade-up">
                  <h4 className="h4 timeline-item-title">
                     Web3 Engineer @GOWFO
                  </h4>
                  <span>February 2024 — Present</span>
                  <p className="timeline-text">
                     WFO is an extreme sports network on a mission to help fans,
                     creators, and athletes of extreme sports collaborate, widen
                     their audience, and monetize their content. working as:
                  </p>

                  <p className="timeline-text paragraph-dot">
                     A Smart contract Developer.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Web3 Integration.
                  </p>

                  <h4 className="h4 timeline-item-title">Skills </h4>
                  <div className="techStack">
                     <span className="timeline-text">Solidity,</span>
                     <span className="timeline-text">React,</span>
                     <span className="timeline-text">Javascript,</span>
                     <span className="timeline-text">Next.js,</span>
                  </div>
               </li>



               <li className="timeline-item" data-aos="fade-up">
                  <h4 className="h4 timeline-item-title">
                     Full Stack Developer @wogaa
                  </h4>
                  <span>July 2024 — September 2024</span>
                  <p className="timeline-text">
                     Word of God Abundantly Assembly (WOGA) is a church with a
                     mission to inspire and uplift lives through the guiding
                     principles of the Word of God. Their focus is on empowering
                     individuals to overcome life’s challenges and live
                     triumphantly. Rooted in biblical teachings, WOGA emphasizes
                     faith, spiritual growth, and community support, aiming to
                     transform lives through truth, guidance, and the message of
                     hope. Their outreach extends to helping the downcast,
                     raising leaders, and preparing members for a fulfilling,
                     faith-driven life
                  </p>

                  <p className="timeline-text paragraph-dot">
                     Full Stack Developer
                  </p>

                  <h4 className="h4 timeline-item-title">Skills </h4>
                  <div className="techStack">
                     <span className="timeline-text">Javascript,</span>
                     <span className="timeline-text">Next.js,</span>
                     <span className="timeline-text">Typescript,</span>
                     <span className="timeline-text">Zod,</span>
                     <span className="timeline-text">Framer Motion,</span>
                     <span className="timeline-text">TailwindCSS,</span>
                     <span className="timeline-text">Nodemailer,</span>
                     <span className="timeline-text">Firebase,</span>
                  </div>
               </li>

               <li className="timeline-item" data-aos="fade-up">
                  <h4 className="h4 timeline-item-title">
                     Full stack Developer @Best Descovery Generation
                  </h4>
                  <span>June 2023 — July 2023</span>
                  <p className="timeline-text paragraph-dot">
                     Utilized Express to build a robust and efficient backend
                     server.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Designed and maintained the MongoDB database, handling data
                     storage and management.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Integrated Nodemailer for sending transactional emails and
                     notifications.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Developed the user interface using React and Next.js,
                     ensuring a responsive and performant web application.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Implemented Tailwind CSS for styling and layout design,
                     creating an attractive and user-friendly interface.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Utilized Redux/toolkit for state management, enabling
                     efficient data handling and application-wide state updates.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Integrated NextAuth.js for user authentication, including
                     user registration, login, and session management.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Implemented React Paystack to facilitate secure payment
                     processing, enabling users to make payments seamlessly.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Employed Axios to retrieve data from external sources,
                     enabling dynamic content and real-time updates.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Handled all aspects of database management in MongoDB,
                     including schema design, data indexing, and query
                     optimization.
                  </p>
                  <h4 className="h4 timeline-item-title">Skills </h4>
                  <div className="techStack">
                     <span className="timeline-text">React,</span>
                     <span className="timeline-text">Next.js,</span>
                     <span className="timeline-text">Javascript,</span>
                     <span className="timeline-text">Redux Toolkit,</span>
                     <span className="timeline-text">Express,</span>
                     <span className="timeline-text">Paystack,</span>
                     <span className="timeline-text">TailwindCSS,</span>
                     <span className="timeline-text">HTML/CSS.</span>
                     <span className="timeline-text">mongoDB,</span>
                     <span className="timeline-text">Nodemailer</span>
                  </div>
               </li>

               <li className="timeline-item" data-aos="fade-up">
                  <h4 className="h4 timeline-item-title">
                     Front-end & Web3 Integration @The KingdonCoin LaunchPad
                  </h4>
                  <span>March 2023 — May 2023</span>
                  <p className="timeline-text paragraph-dot">
                     Led the integration of Web3 technology to enhance the
                     blockchain connectivity.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Designed and built the entire frontend of the platform.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Implemented wallet connection features using
                     thirdweb-dev/react.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Utilized Ethers.js for seamless interactions with the
                     Ethereum blockchain.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Designed and built the entire frontend of the platform
                     using Tailwind CSS.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Listening for and reacting to blockchain events, such as
                     token transfers or contract interactions.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Designed and built the entire frontend of the platform
                     using React.js, Tailwind CSS for a responsive and visually
                     appealing user interface.
                  </p>

                  <h4 className="h4 timeline-item-title">Skills </h4>
                  <div className="techStack">
                     <span className="timeline-text">React,</span>
                     <span className="timeline-text">Next.js,</span>
                     <span className="timeline-text">Javascript,</span>
                     <span className="timeline-text">Antd,</span>
                     <span className="timeline-text">React-Context,</span>
                     <span className="timeline-text">MetaMask,</span>
                     <span className="timeline-text">TailwindCSS,</span>
                     <span className="timeline-text">HTML/CSS.</span>
                     <span className="timeline-text">Solidity,</span>
                     <span className="timeline-text">Ethers.js,</span>
                     <span className="timeline-text">Hardhat,</span>
                  </div>
               </li>

               <li className="timeline-item" data-aos="fade-up">
                  <h4 className="h4 timeline-item-title">
                     front-end & wen3 integration @BIDA Token Migration
                  </h4>
                  <span>Feb 2023 — March 2023</span>
                  <p className="timeline-text paragraph-dot">
                     Front-End Development using antd and Tailwind CSS for a
                     clean and efficient user interface.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Leveraged Ethers.js for seamless interactions with the
                     Ethereum blockchain.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Utilized moment.js for time-related operations.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Implemented wallet connection features using
                     @web3-react/core to provide secure and user-friendly
                     connectivity to blockchain networks.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Collaborated on audits of smart contracts, identifying
                     vulnerabilities and ensuring compliance with industry
                     security standards.
                  </p>

                  <h4 className="h4 timeline-item-title">Skills </h4>
                  <div className="techStack">
                     <span className="timeline-text">React,</span>
                     <span className="timeline-text">React-Context,</span>
                     <span className="timeline-text">Javascript,</span>
                     <span className="timeline-text">MetaMask,</span>
                     <span className="timeline-text">TailwindCSS,</span>
                     <span className="timeline-text">HTML.</span>
                     <span className="timeline-text">Solidity,</span>
                     <span className="timeline-text">Ethers.js,</span>
                     <span className="timeline-text">Mocha,</span>
                  </div>
               </li>

               <li className="timeline-item" data-aos="fade-up">
                  <h4 className="h4 timeline-item-title">
                     full stack developer @Smart Contract Engineer Portfolio
                  </h4>
                  <p className="timeline-text paragraph-dot">
                     Designed and developed the entire project, handling both
                     the frontend and backend aspects.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Utilized React for the frontend development, creating an
                     interactive and user-friendly interface.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Employed JavaScript for frontend and backend
                     functionalities.
                  </p>
                  <p className="timeline-text paragraph-dot">
                     Implemented CSS for styling and layout design, ensuring an
                     aesthetically pleasing presentation.
                  </p>
                  <p className="timeline-text">Full Stack Developer</p>
                  {/* <p className="timeline-text">Integration.</p> */}
                  <h4 className="h4 timeline-item-title">Skills </h4>
                  <div className="techStack">
                     <span className="timeline-text">React,</span>
                     <span className="timeline-text">Javascript,</span>
                     <span className="timeline-text">HTML/CSS,</span>
                     <span className="timeline-text">React/Icons</span>
                  </div>
               </li>
            </ol>
         </section>
      </>
   );
};

export default Experience;
