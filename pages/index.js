import React from "react";

import Head from "next/head";
import Image from "next/image";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//INTERNAL
import About from "./components/about";
import Resume from "./components/resume";
import Header from "./components/header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>xhunTeq.</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <script src="./js/script.js" defer />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <Header />
        {/* <About /> */}
        {/* <Resume /> */}
        <h1>hello</h1>
      </div>
    </div>
  );
}
