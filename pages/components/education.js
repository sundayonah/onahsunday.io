import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';




const Resume = () => {


   useEffect(() => {
      AOS.init({ duration: 800 });
   }, []);


   return (
      <>
         <div className="top-space">
            <section className="timeline" data-aos="fade-up">
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
                     <p className="timeline-text">Information Technology</p>
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
         </div>
      </>
   );
};

export default Resume;
