import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Research = () => {

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);


    return (
        <>
            {/* EXPERIENCE */}
            <section className="timeline" id="research">
                <header>
                    <h2 className="h2 article-title" title="Research" name="Research" data-aos="fade-up">
                        Research
                    </h2>
                </header>
                <div className="separator" />

                <ol className="timeline-list">

                    <li className="" data-aos="fade-up">
                        <p className="timeline-text paragraph-dot">
                            Account Abstrcation
                        </p>
                        <p className="timeline-text paragraph-dot">
                            Research on the ETH Proof-of-work and Proof-of-stake algorithm.
                        </p>
                        <p className="timeline-text paragraph-dot">
                            Byzantine Fault Tolerance. (BFT)
                        </p>

                    </li>

                </ol>
            </section>
        </>
    );
};

export default Research;
