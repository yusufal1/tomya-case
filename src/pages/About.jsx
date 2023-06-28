import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import WhyTomya from "../components/WhyTomya";
import Mission from "../components/Mission";
import Reference from "../components/Reference";
import Social from "../components/Social";
import PressKit from "../components/PressKit";
import CreateAccount from "../components/CreateAccount";
import Footer from "../components/Footer";
import CookieNotification from "../components/CookieNotification";

const About = ({ mobileMenu }) => {
  return (
    <div>
      <Header />
      <Main />
      <WhyTomya />
      <Mission />
      <Reference />
      <Social/>
      <PressKit/>
      <CreateAccount/>
      <Footer/>
      <CookieNotification/>
    </div>
  );
};

export default About;
