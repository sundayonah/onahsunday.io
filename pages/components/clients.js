import React, { useEffect } from 'react';
import Img1 from '../../public/images/my-avatar.png';
import clt1 from '../../public/images/bida-logo.png';
import clt2 from '../../public/images/autheo.jpg';
import clt3 from '../../public/images/logo.png';
import clt4 from '../../public/images/monie.png';
import clt5 from '../../public/images/shibase.png';
import clt6 from '../../public/images/wogaaLogo.png';
import clt7 from '../../public/images/paycrest.png';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Clients = () => {

   useEffect(() => {
      AOS.init({ duration: 800 });
   }, []);

   return (
      <>
         <section className="clients" data-aos="fade-up">
            <h3 className="h3 clients-title" title="Clients" name="Clients">
               Clients
            </h3>

            <ul className="clients-list has-scrollbar">
               <li className="clients-item">
                  <a href="https://www.paycrest.io" target="_blank">
                     <Image
                        src={clt7}
                        alt="client logo"
                        width={100}
                        height={100}
                     />
                  </a>
               </li>
               <li className="clients-item">
                  <a href="https://www.wogaa.org/" target="_blank">
                     <Image
                        src={clt6}
                        alt="client logo"
                        width={100}
                        height={100}
                     />
                  </a>
               </li>
               <li className="clients-item">
                  <a href="https://shibase-inu.vercel.app/" target="_blank">
                     <Image
                        src={clt5}
                        alt="client logo"
                        width={100}
                        height={100}
                     />
                  </a>
               </li>
               <li className="clients-item">
                  <a href="https://www.autheo.com" target="_blank">
                     <Image
                        src={clt2}
                        alt="client logo"
                        width={100}
                        height={100}
                     />
                  </a>
               </li>
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
                  <a href="https://kingdom-coin.vercel.app/" target="_blank">
                     <Image
                        src={clt3}
                        alt="client logo"
                        width={100}
                        height={100}
                     />
                  </a>
               </li>
               <li className="clients-item">
                  <a href="https://monie-bot.vercel.app/" target="_blank">
                     <Image
                        src={clt4}
                        alt="client logo"
                        width={80}
                        height={100}
                     />
                  </a>
               </li>
            </ul>
         </section>
      </>
   );
};

export default Clients;