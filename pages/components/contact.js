import React from 'react';

const Contact = () => {

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
                     </section>
                  </div>
}


export default Contact;
