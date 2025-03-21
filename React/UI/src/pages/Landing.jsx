import React from 'react';
import { Link as ScrollLink } from "react-scroll";
import Footer from '../components/Footer';
import logo from '../assets/IMAGE/logo1.jpeg';
import { Link } from 'react-router-dom';
import EventGrid from '../components/EventGrid';
import phone from '../assets/IMAGE/phone-call-svgrepo-com.svg';
import email from '../assets/IMAGE/email-9-svgrepo-com.svg';
import facebook from '../assets/IMAGE/facebook-svgrepo-com.svg';
import insta from '../assets/IMAGE/instagram-svgrepo-com.svg';
import twitter from '../assets/IMAGE/twitter-svgrepo-com.svg';
import youtube from '../assets/IMAGE/social-youtube-svgrepo-com.svg';
import bgImage from '../assets/IMAGE/WhatsApp Image 2025-03-07 at 9.40.32 PM.jpeg';

const Landing = () => {
  return (
    <div>
      <div className="absolute inset-0 bg-[#C9184A] bg-opacity-50">
        <div className="relative z-10">
        <header className="fixed top-0 left-0 w-full bg-[#C9184A] bg-opacity-90 flex justify-between items-center px-6 sm:px-10 py-4 z-50">
            <img src={logo} alt="logo" className="w-12 h-12 sm:w-16 sm:h-16" />
            <nav className="flex flex-wrap items-center space-x-4 sm:space-x-10 text-sm sm:text-lg">
              <Link to="/home" className="text-[#FFF0F3] font-bold hover:underline">Home</Link>
              <ScrollLink to="about" smooth={true} duration={500} className="text-[#FFF0F3] font-bold hover:underline">About</ScrollLink>
              <ScrollLink to="events" smooth={true} duration={500} className="text-[#FFF0F3] font-bold hover:underline">Events</ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} className="text-[#FFF0F3] font-bold hover:underline">Contact</ScrollLink>
              <Link to="/signin">
                <button className="mt-3 sm:mt-0 w-28 h-10 sm:w-32 sm:h-12 text-[#FFF0F3] bg-[#500E10] font-medium rounded-2xl hover:bg-[#977073] hover:text-white">
                  Sign In
                </button>
              </Link>
            </nav>
          </header>

          <section
            id="home"
            className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="text-center mt-20 sm:mt-32 px-4">
              <h1 className="font-serif text-4xl sm:text-5xl font-medium text-[#FFF0F3]">Dancing Leaf</h1>
              <h2 className="font-sans text-xl sm:text-2xl font-medium pt-4 text-[#FF4D6D] italic">
                Find and Book Events Easily
              </h2>
              <p className="text-sm sm:text-lg pt-2 text-white">
                Discover amazing events near you and book your tickets instantly!
              </p>
              <ScrollLink to="events" smooth={true} duration={500}>
                <button className="mt-5 w-28 sm:w-32 h-10 sm:h-12 text-[#F59B9E] bg-[#500E10] font-medium rounded-2xl hover:bg-[#977073] hover:text-white">
                  Explore Events
                </button>
              </ScrollLink>
            </div>
          </section>

          <section className="py-10 bg-[#981D26]" id="about">
            <div className="max-w-5xl mx-auto text-center px-6">
              <h2 className="font-serif text-4xl sm:text-5xl font-medium text-[#590d22]">Dancing Leaf</h2>
              <p className="text-base sm:text-xl italic pt-4 text-white">
                “Unleash Unforgettable Adventure. Reserve Your Spot and Dive into the Excitement!”
              </p>
              <p className="text-base sm:text-xl pt-4 text-white">
                Where Experiences Come to Life. Book Now & Join the Fun.
              </p>
              <Link to="/signup">
                <button className="mt-5 w-28 sm:w-32 h-10 sm:h-12 text-[#F59B9E] bg-[#500E10] font-medium rounded-2xl hover:bg-[#977073] hover:text-white">
                  Register Now
                </button>
              </Link>
            </div>
          </section>

          <section className="py-10 bg-[#F59B9E]" id="events">
            <div className="max-w-7xl mx-auto px-6 sm:px-10">
              <h2 className="text-center font-serif text-3xl sm:text-4xl font-medium text-[#981D26]">Mark Your Calendars</h2>
              <EventGrid isHome={true} showBookButton = {false} showEditButton = {false} showDeleteButton = {false}/>
            </div>
          </section>

          <section className="py-10 bg-[#D76067]" id="contact">
            <h3 className="text-center font-serif text-3xl sm:text-4xl font-medium text-[#981D26]">Contact</h3>
            <div className="flex flex-col lg:flex-row justify-between items-center mt-8 px-6 sm:px-10 space-y-6 lg:space-y-0">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <img src={phone} alt="Phone" className="w-6 h-6" />
                  <p className="text-lg">+91 9876453210</p>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <img src={email} alt="Email" className="w-6 h-6" />
                  <p className="text-lg">dancingleaf@gmail.com</p>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <h4 className="text-xl font-bold text-[#500E10] mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <img src={facebook} alt="Facebook" className="w-8 h-8" />
                  <img src={insta} alt="Instagram" className="w-8 h-8" />
                  <img src={twitter} alt="Twitter" className="w-8 h-8" />
                  <img src={youtube} alt="YouTube" className="w-8 h-8" />
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Landing;
