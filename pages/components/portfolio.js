import React, { useState } from 'react';
import Image from 'next/image';

import Img1 from '../images/my-avatar.png';
import Img2 from '../images/icon-design.svg';
import Img3 from '../images/icon-dev.svg';
// portfolio
import port1 from '../images/personal.png';
import port2 from '../images/twitterDApp.png';
import port3 from '../images/reactmovie.png';
import port4 from '../images/otoport.png';
import port5 from '../images/bida.png';
import port6 from '../images/uniswap.png';
import port8 from '../images/kingdomimg.png';
import port9 from '../images/realvenmo.png';
import port10 from '../images/trello-clone.png';
import port11 from '../images/monieProject.png';
import port13 from '../images/solana-token.png';

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
            {/* <div className="separator" /> */}
         <hr className="hr" />


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
                        href="https://twitter-dapp-smoky.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <figure className="project-img">
                           <div className="project-item-icon-box">
                              <ion-icon name="eye-outline" />
                           </div>
                           <Image src={port2} alt="metaspark" loading="lazy" />
                        </figure>
                        <h3 className="project-title">Twitter DApp</h3>
                        <span className="project-category">
                           Twitter Decentralize Application.
                           <p>
                              Tweet securely and transparently with Twitter
                              DApp.
                           </p>
                        </span>
                     </a>
                  </li>
                  <li
                     className="project-item active"
                     data-filter-item=""
                     data-category="web design"
                  >
                     <a
                        href="https://solana-token-beta.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <figure className="project-img">
                           <div className="project-item-icon-box">
                              <ion-icon name="eye-outline" />
                           </div>
                           <Image src={port13} alt="metaspark" loading="lazy" />
                        </figure>
                        <h3 className="project-title">Solana Token</h3>
                        <p className="project-category">
                           Launch your solana token, All in one solana token
                           development and deployment.
                        </p>
                     </a>
                  </li>
                  {/* <li
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
                  </li> */}
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
               </ul>
            </section>
         </div>
      </>
   );
};
export default Portfolio;
