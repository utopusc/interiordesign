import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/cursor";
import ScrollToTop from "../components/scrollToTop";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/main.scss";
import LightTheme from "../layouts/Light";
import Team3 from "../components/Team3/team3";
import Intro5 from "../components/Intro5/intro5";
import AboutUs6 from "../components/About-us6/about-us6";
import Services6 from "../components/Services6/services6";
import CaseStudy from "../components/Case-study/case-study";
import NavbarArch from "../components/Navbar-arch/navbar-arch";
import LatestNews from "../components/Latest-news/latest-news";
import WorksStyle5 from "../components/Works-style5/works-style5";
import FooterArch from "../components/Footer-arch/footer-arch.jsx";
import ContactArch from "../components/Contact-arch/contact-arch";
import TestimonialsArch from "../components/Testimonials-arch/testimonials-arch";


const MyApp = () => {
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
      <Head>
        <title>Vie</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <Cursor />
      <LoadingScreen />
      <LightTheme>
        <NavbarArch navbarRef={navbarRef} theme="themeL" />
        <Intro5 />
        <AboutUs6 />
        <Services6 />
        <WorksStyle5 />
        <CaseStudy />
        <Team3 />
        <TestimonialsArch />
        <LatestNews />
        <ContactArch />
        <FooterArch />
      </LightTheme>
      <ScrollToTop />
      <Script id="wow" src="/js/wow.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script id="wowInit" strategy="lazyOnload">{`new WOW().init();`}</Script>
    </>
  );
};

export default MyApp;

