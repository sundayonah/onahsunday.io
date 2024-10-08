import React, { useEffect, useState } from 'react';

import Head from 'next/head';

//INTERNAL
import Header from './components/header';

export default function Home() {
   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

   useEffect(() => {
      const intervalId = setInterval(() => {
         setCurrentYear(new Date().getFullYear());
      }, 1000 * 60 * 60 * 24 * 365); // update every year
      return () => clearInterval(intervalId);
   }, []);

   var peace = '👋';

   return (
      <div className="">
         <Head>
            <title>Front-end / Web3 Developer / Integration</title>
            <meta name="description" content="My Portfolio" />
            <link rel="icon" href="/favicon.ico" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossorigin
            />
            <script
               type="module"
               src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
               defer
            />

            <link
               href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
               rel="stylesheet"
            />
         </Head>
         <div>
            <Header />

            <div
               style={{
                  textAlign: 'center',
                  marginTop: '-3rem',
                  marginBottom: '5rem',
                  color: '#fff',
               }}
            >
               <p>
                  &copy; {currentYear} xhunTeq. {peace} Jesus is Lord.
               </p>
            </div>
         </div>
      </div>
   );
}
