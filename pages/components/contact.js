import React from 'react';

const Contact = () => {
   return (

         <div className="top-space" id="contact">
                     <header>
                        <h2
                           className="h2 article-title"
                           title="Contact"
                           name="Contact"
                        >
                           Contact
                        </h2>
                     </header>
                     <section className="contact-form">
                        {/* <h3 className="h3 form-title">Contact Info</h3> */}
                        <div>
                           <div className="separator" />
                           {/* <div className="separator" /> */}
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
                                    href="https://x.com/sunday_onah_"
                                    className="social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                 >
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 1200 1227"
                                       fill="currentColor"
                                       width="18"
                                       height="18"
                                    >
                                       <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
                                    </svg>
                                 </a>
                              </li>
                              <li className="social-item">
                                 <a
                                    href="https://www.linkedin.com/in/onah-sunday"
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
                     </section>
      </div>
   )
}


export default Contact;
