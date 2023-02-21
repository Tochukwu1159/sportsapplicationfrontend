import React from "react";
import {
  Hero,
  AboutSection,
  SideIndicator,
  AboutCardWrapper,
  AboutCard,
  ProductSection,
  TestimonialSection,
  TestimonialCardWrapper,
} from "../styles/LandingStyles";
import heroImage from "../assets/icon/Lionel.png";
import loginIcon from "../assets/icon/Login.svg";
import DashboardIcon from "../assets/icon/Dashboard.svg";
import Spinning from "../assets/icon/Spinning.svg";
import StyleButton from "../styles/ButtonStyles.js";
import SliderItem from "../components/Landing/SliderItem.jsx";
import { Navbar } from "../components/Landing/Navbar";
import { Footer } from "../components/Landing/Footer";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export const LandingPage = () => {
  useEffect(() => {
        AOS.init();
      }, [])

  const slideData = [
    {
      name: "Adekola Johnson",
      message:
        "Football is more than just a game; it's a passion, a way of life. From the roar of the crowd to the thrill of victory and agony of defeat, it's an experience like no other. It's a sport that unites people, transcending language, culture, and borders, bringing together fans from all corners of the world. use my school fee to purchase a recharge card via my bank’s USSD, this was really heartbreaking to me, but thanks to Reacharge2Cash, I was able to convert my recharge card to cash in no time.",
    },
    {
      name: "King David",
      message:
        "This plaVolleyball is a sport that requires skill, agility, and teamwork. It's not just about hitting the ball over the net, it's about anticipating your opponent's next move and working together with your teammates to outmaneuver them. It's a game that demands both physical and mental toughness, and rewards those who can rise to the challenge. Volleyball is more than just a sport, it's a passion and a way of life.tform is easy and straightforward. I was in a tight situation and needed to sell my excess recharge card for cash because of my pressing need at that point in time, and this platform bailed me out",
    },
    {
      name: "Paul James",
      message:
        "Tennis is a perfect combination of violent action taking place in an atmosphere of total tranquility. - Billie Jean King. The beauty of tennis lies not only in the physical demands of the sport but also in the mental aspect. As Andre Agassi once said, In tennis, it is not the opponent you fear, it is the failure itself. It takes immense focus, determination, and skill to master the game of tennis and rise to the top.ow about this platform from a friend of mine, and ever since I have been using their services, I have never been disappointed at any point, the customer response services are great.",
    },
    {
      name: "John Doe",
      message:
        "Cricket is a pressure game, and when it comes to an India-Pakistan match, the pressure is doubled. - Imran Khan. Cricket is not just a sport but a religion in some parts of the world. The thrill of watching a game and the euphoria of victory are hard to match. It is a game that tests your patience, skill, and mental toughness, and those who conquer it become legends.k God for making me stumble on this platform, before now I have searched all over the internet looking for a reliable and secure platform to carry out recharge card sales transactions but ended up being scammed.",
    },
  ];
  return (
    <div>
      {/* HERO SECTION  */}
      <Navbar landing />
      <Hero>
        <div data-aos="fade-right" className="heroText">
          <p>
            <b>Sport world- connect with sports lovers</b>
          </p>
          <small>
          A progressive web application to record, network and find like-minded sports interested
people.
          
          </small>
          <Link to="/register">
            <StyleButton height="48px" width="185px">
              Get Started
            </StyleButton>
          </Link>
        </div>
        <div className="heroImage">
          <img data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500" src={heroImage} alt="" />
        </div>
      </Hero>
      {/* ABOUT SECTION */}
      <AboutSection id="about">
        <SideIndicator />
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="aboutDescription">
          <h2>Record, Connect, Interact... </h2>
          <small>Football, Basketball, Ice Hockey,
Motorsports, Bandy, Rugby, Skiing, Shooting</small>
        </div>
      </AboutSection>

      {/* TESTIMONIAL SECTION */}
      <TestimonialSection data-aos="fade-up" id="contactUs">
        <h1>Famous Sports Quote </h1>
        <p>
        "The difference between the impossible and the possible lies in a person's determination." - Tommy Lasorda
        </p>
      </TestimonialSection>
      <TestimonialCardWrapper>
        <SliderItem data-aos="fade-up" data-aos-anchor-placement="bottom-center" slideData={slideData} />
      </TestimonialCardWrapper>
      <Footer />
    </div>
  );
};
