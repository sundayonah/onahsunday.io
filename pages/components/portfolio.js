import React, { useState } from 'react';
import Image from 'next/image';

import Img1 from '../images/my-avatar.png';
import Img2 from '../images/icon-design.svg';
import Img3 from '../images/icon-dev.svg';
// portfolio
import port1 from '../images/personal.png';
import port2 from '../images/bida-countdown.png';
import port3 from '../images/reactmovie.png';
import port4 from '../images/otoport.png';
import port5 from '../images/bida.png';
import port6 from '../images/uniswap.png';
import port7 from '../images/lead-tracker.png';
import port8 from '../images/kingdomimg.png';
import port9 from '../images/realvenmo.png';
import port10 from '../images/trello-clone.png';
import port11 from '../images/monieProject.png';
import port12 from '../images/augutine.png';

//client img
import clt1 from '../images/bida-logo.png';
import clt2 from '../images/kingdomcoinlogo.jpg';
import Resume from './resume';
import Experience from './experience';
import MySkills from './mySkills';

const Portfolio = () => {
   return (
      <>
         <div className="top-space" id="portfolio">
            <header>
               <h2
                  className="h2 article-title"
                  title="Portfolio"
                  name="Portfolio"
               >
                  Portfolio
               </h2>
            </header>
            <div className="separator" />

            <section className="projects">
               <div className="filter-select-box">
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
                     data-category="web design"
                  >
                     <a
                        href="https://augustin-obi.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <figure className="project-img">
                           <div className="project-item-icon-box">
                              <ion-icon name="eye-outline" />
                           </div>
                           <Image src={port12} alt="metaspark" loading="lazy" />
                        </figure>
                        <h3 className="project-title">E-commerce</h3>
                        <p className="project-category">E-commerce Project</p>
                     </a>
                  </li>
                  <li
                     className="project-item active"
                     data-filter-item=""
                     data-category="web design"
                  >
                     <a
                        href="https://monie-bot.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <figure className="project-img">
                           <div className="project-item-icon-box">
                              <ion-icon name="eye-outline" />
                           </div>
                           <Image
                              src={port11}
                              alt="metaspark"
                              width={500}
                              height={200}
                              loading="lazy"
                           />
                        </figure>
                        <h3 className="project-title">Monie Project</h3>
                        <p className="project-category">Web3 Staking Project</p>
                     </a>
                  </li>
                  <li
                     className="project-item active"
                     data-filter-item=""
                     data-category="web design"
                  >
                     <a
                        href="https://trello-2-0-app.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <figure className="project-img">
                           <div className="project-item-icon-box">
                              <ion-icon name="eye-outline" />
                           </div>
                           <Image src={port10} alt="metaspark" loading="lazy" />
                        </figure>
                        <h3 className="project-title">Todo 2.0</h3>
                        <p className="project-category">Todo Website</p>
                     </a>
                  </li>
                  <li
                     className="project-item active"
                     data-filter-item=""
                     data-category="web design"
                  >
                     <a
                        href="https://venmo-blockchain-three.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <figure className="project-img">
                           <div className="project-item-icon-box">
                              <ion-icon name="eye-outline" />
                           </div>
                           <Image src={port9} alt="metaspark" loading="lazy" />
                        </figure>
                        <h3 className="project-title">
                           Venmo. Solidity, Next, React, Javascript, Truffle,
                        </h3>
                        <p className="project-category">
                           A functional replica of the Venmo website.
                        </p>
                     </a>
                  </li>
                  <li
                     className="project-item active"
                     data-filter-item=""
                     data-category="web design"
                  >
                     <a
                        href="https://kingdom-coin.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <figure className="project-img">
                           <div className="project-item-icon-box">
                              <ion-icon name="eye-outline" />
                           </div>
                           <Image src={port8} alt="metaspark" loading="lazy" />
                        </figure>
                        <h3 className="project-title">
                           Kingdom Coin LaunchPad
                        </h3>
                        <p className="project-category">
                           A decentralize Financial System
                        </p>
                     </a>
                  </li>
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

                  {/* <li
                              className="project-item active"
                              data-filter-item=""
                              data-category="web design"
                           >
                              <a href="#" target="_blank" rel="noreferrer">
                                 <figure className="project-img">
                                    <div className="project-item-icon-box">
                                       <ion-icon name="eye-outline" />
                                    </div>
                                    <Image
                                       src={port6}
                                       alt="metaspark"
                                       loading="lazy"
                                    />
                                 </figure>
                                 <h3 className="project-title">
                                    uniswap Clone
                                 </h3>
                                 <p className="project-category">
                                    <p>
                                       <b>Still Wroking on it</b>
                                    </p>
                                    A decentralized exchange (DEX) platform that
                                    mimics the functionality of Uniswap.
                                 </p>
                              </a>
                           </li> */}

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
      </>
   );
};
export default Portfolio;
