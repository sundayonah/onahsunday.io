import React from 'react';

import Img1 from '../images/my-avatar.png';
import Img2 from '../images/icon-design.svg';
import Img3 from '../images/icon-dev.svg';
import clt1 from '../images/bida-logo.png';
import clt2 from '../images/kingdomcoinlogo.jpg';
import clt3 from '../images/logo.png';
import clt4 from '../images/monie.png';
import Image from 'next/image';

const Clients = () => {
   return (
      <>
         <section className="clients">
            <h3 className="h3 clients-title" title="Clients" name="Clients">
               Clients
            </h3>

            <ul className="clients-list has-scrollbar">
               <li className="clients-item">
                  <a href="https://onahprosperity.github.io/" target="_blank">
                     <Image
                        src={Img1}
                        alt="client logo"
                        width={100}
                        height={100}
                     />
                  </a>
               </li>

               <li className="clients-item">
                  <a
                     href="https://bidauction-token-v2migration.vercel.app/"
                     target="_blank"
                  >
                     <Image
                        src={clt1}
                        alt="client logo"
                        width={100}
                        height={100}
                     />
                  </a>
               </li>
               <li className="clients-item">
                  <a href="https://kingdomcoinlaunchpad.io/" target="_blank">
                     <Image
                        src={clt3}
                        alt="client logo"
                        width={100}
                        height={100}
                     />
                  </a>
               </li>
               <li className="clients-item">
                  <a href="https://moniebot.netlify.app/" target="_blank">
                     <Image
                        src={clt4}
                        alt="client logo"
                        width={80}
                        height={100}
                     />
                  </a>
               </li>
               {/* <li className="clients-item">
                  <a href="https://moniebot.netlify.app/" target="_blank">
                     <Image
                        src={clt4}
                        alt="client logo"
                        width={80}
                        height={100}
                     />
                  </a>
               </li> */}
            </ul>
         </section>
      </>
   );
};

export default Clients;
