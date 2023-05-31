/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Head from "next/head";
import LightTheme from "../../layouts/Light";
import Intro5 from "../../components/Intro5/intro5";
import AboutUs6 from "../../components/About-us6/about-us6";
import Works3 from "../../components/Works3/works3";
import NavbarArch from "../../components/Navbar-arch/navbar-arch";
import WorksStyle5 from "../../components/Works-style5/works-style5";
import FooterArch from "../../components/Footer-arch/footer-arch.jsx";
import TestimonialsArch from "../../components/Testimonials-arch/testimonials-arch";
import MinimalArea2 from "../../components/Minimal-Area2/minimal-area2";


const Homepage = () => {
  const navbarRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <>
      <Head>
        <link rel="stylesheet" defer href="/css/arch-skin-light.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Khand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LightTheme>
        <NavbarArch navbarRef={navbarRef} theme="themeL" />
        <Intro5 />
        <AboutUs6 />
        <Works3 />        
        <WorksStyle5 />
        <MinimalArea2 />
        <TestimonialsArch />
        <FooterArch />
      </LightTheme>
    </>
  );
};

export default Homepage;
