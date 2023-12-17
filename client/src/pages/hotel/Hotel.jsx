import React from 'react'
import Header from '../../components/header/Header';
import Navber from '../../components/navber/Navber';
import './hotel.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
  faBed,
  faCalendar,
  faPerson
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns'
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { useState } from 'react';
import Carousel from '../../components/carousel/Carousel';
import { Link, useNavigate } from 'react-router-dom';

export const Hotel = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const [slideOpen, setSlideOpen] = useState(false);

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    childern: 0,
    room: 1
  });

  const handleOperation = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleSlide = (i) => {
    setSlideIndex(i);
    setSlideOpen(true);
  }

  const handleMove = (d) => {
    let newSlideIndex;
    if (d === "l") {
      newSlideIndex = slideIndex === 0 ? 5 : slideIndex - 1;
    } else {
      newSlideIndex = slideIndex === 5 ? 0 : slideIndex + 1;
    }
    setSlideIndex(newSlideIndex);
  }

  const navigate = useNavigate();
  const handleSearch = () => {
    // navigate('/hotels', {state:{date,options}})
  }

  return (
    <div>
      <Navber />
      <Header type='list' />
      <div className="hotel">
        {slideOpen &&
          <div className="slide">
            <FontAwesomeIcon icon={faCircleXmark} onClick={() => setSlideOpen(false)} className="close" />
            <FontAwesomeIcon icon={faCircleArrowLeft} onClick={() => handleMove("l")} className="arrow" />
            <div className="slideContainer">
              <img src={photos[slideIndex].src} alt="" className="slideImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} onClick={() => handleMove("r")} className="arrow" />
          </div>
        }
        <div className="hotelContainer">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Tower Street Apartments</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPrice">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {
              photos.map((photo, i) => (
                <div className="hotelImgContainer">
                  <img onClick={() => handleSlide(i)} src={photo.src} alt="" className="hotelImg" />
                </div>
              ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="detailsTitle">Stay in the heart of City with world-class service at Radisson Blu Chattogram Bay View</h1>
              <p className="hotelDesc">
                <p>You're eligible for a Genius discount at Radisson Blu Chattogram Bay View! To save at this property, all you have to do is sign in.</p>
                <p>Featuring a fitness centre, Radisson Blu Chittagong Bay View offers accommodation in Chittagong. Guests can enjoy the on-site multi-cuisine restaurant. Free WiFi is available throughout the property.</p>
                <p>Rooms come with a flat-screen satellite TV and a seating area for your convenience. All rooms have views of the mountains or city. Every room is equipped with a private bathroom fitted with a shower.</p>
                <p>You will find a 24-hour front desk and concierge desk at the property. Free parking is offered.</p>
                <p>Couples particularly like the location — they rated it 9.4 for a two-person trip.</p>
                <h4>Radisson Blu Chattogram Bay View has been welcoming Booking.com guests since 18 Oct 2015.</h4>
              </p>
              <h1 className="detailsTitle">Most popular facilities</h1>
              <div className="facilities">
                <div className='ph-content'>
                  <span className='ph-icon'>
                    <svg class="bk-icon -streamline-parking_sign ph-icon" fill="green" height="20" width="20" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zm-9.75-1.5a1.5 1.5 0 0 1-1.5 1.5H10.5l.75.75v-4.5L10.5 9h2.25a1.5 1.5 0 0 1 1.5 1.5zm1.5 0a3 3 0 0 0-3-3H10.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h2.25a3 3 0 0 0 3-3zm-4.5 6.75v-4.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z"></path></svg>
                  </span>
                  <span className='ph-text'>Free private parking available</span>
                </div>
                <div className='ph-content'>
                  <span className='ph-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24"><path d="M13.868 3.379a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0zm1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0zm-4.125 13.875v4.5a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-1.5 0zm9.505-10.122a2.25 2.25 0 0 0-3.12.624 1.15 1.15 0 0 1-1.364.442 12.11 12.11 0 0 0-8.516 0 1.15 1.15 0 0 1-1.37-.44 2.252 2.252 0 1 0-3.75 2.494 5.642 5.642 0 0 0 6.62 2.19l-1.004-.706v10.018a2.25 2.25 0 0 0 4.5 0h-1.5a2.25 2.25 0 0 0 4.5 0l.006-10.024H15l-.255.705a5.636 5.636 0 0 0 6.628-2.185 2.25 2.25 0 0 0-.625-3.118zm-.832 1.248a.75.75 0 0 1 .208 1.04 4.137 4.137 0 0 1-4.87 1.605.75.75 0 0 0-1.004.705l-.006 10.024a.75.75 0 1 1-1.5 0c0-1-1.5-1-1.5 0a.75.75 0 0 1-1.5 0V11.736a.75.75 0 0 0-1.005-.705 4.143 4.143 0 0 1-4.86-1.61.752.752 0 1 1 1.25-.833A2.65 2.65 0 0 0 8.279 9.6a10.608 10.608 0 0 1 7.457.001 2.65 2.65 0 0 0 3.141-1.015.75.75 0 0 1 1.039-.207zM18 5.254a2.25 2.25 0 0 1 4.5 0l.75-.75h-6l.75.75zm-1.5 0c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75 3.75 3.75 0 1 0-7.5 0zm4.5-3v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0zm-19.5 3a2.25 2.25 0 0 1 4.5 0l.75-.75h-6l.75.75zm-1.5 0c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75 3.75 3.75 0 1 0-7.5 0zm4.5-3v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0z"></path></svg>
                  </span>
                  <span className='ph-text'>Room service</span>
                </div>
                <div className='ph-content'>
                  <span className='ph-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24"><path d="M8.252 24h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5zm3.75-.75v-9a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0zm7.5-16.19a1.5 1.5 0 0 0-1.06-2.56H4.062a1.5 1.5 0 0 0-1.06 2.56l7.72 7.72a.75.75 0 0 0 1.06 0l7.72-7.72zM18.44 6l-7.72 7.72h1.061L4.062 6h14.379zM.752 1.5h2.822a.75.75 0 0 1 .671.415l1.836 3.67a.75.75 0 1 0 1.342-.67L5.587 1.244A2.25 2.25 0 0 0 3.574 0H.752a.75.75 0 1 0 0 1.5zm15.81 3.603a2.997 2.997 0 1 1 1.511 2.038.75.75 0 0 0-.713 1.319 4.497 4.497 0 1 0-2.268-3.06.75.75 0 1 0 1.47-.297z"></path></svg>
                  </span>
                  <span className='ph-text'>Bar</span>
                </div>
                <div className='ph-content'>
                  <span className='ph-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24"><path d="M3.75 4.5h12a.75.75 0 0 1 .75.75v7.5a6.75 6.75 0 0 1-13.5 0v-7.5a.75.75 0 0 1 .75-.75zm0-1.5A2.25 2.25 0 0 0 1.5 5.25v7.5a8.25 8.25 0 0 0 16.5 0v-7.5A2.25 2.25 0 0 0 15.75 3h-12zm-3 18h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zm16.5-15h1.5a3.763 3.763 0 0 1 3.75 3.752 3.762 3.762 0 0 1-3.752 3.748H17.1a.75.75 0 0 0 0 1.5h1.65A5.263 5.263 0 0 0 24 9.752 5.264 5.264 0 0 0 18.752 4.5H17.25a.75.75 0 0 0 0 1.5z"></path></svg>
                  </span>
                  <span className='ph-text'>Good breakfast</span>
                </div>
                <div className='ph-content'>
                  <span className='ph-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24"><path d="M5.999.75v22.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zm3 0V7.5a2.259 2.259 0 0 1-2.252 2.25 2.258 2.258 0 0 1-2.248-2.252V.75a.75.75 0 0 0-1.5 0V7.5a3.76 3.76 0 0 0 3.748 3.75 3.76 3.76 0 0 0 3.752-3.748V.75a.75.75 0 0 0-1.5 0zm6.75 15.75h3c1.183.046 2.203-.9 2.25-2.111a2.22 2.22 0 0 0 0-.168c-.25-6.672-.828-9.78-3.231-13.533a1.508 1.508 0 0 0-2.77.81V23.25a.75.75 0 0 0 1.5 0V1.503c0 .003.001 0 .003 0a.006.006 0 0 1 .008.002c2.21 3.45 2.75 6.354 2.99 12.773v.053a.696.696 0 0 1-.721.67L15.749 15a.75.75 0 0 0 0 1.5z"></path></svg>
                  </span>
                  <span className='ph-text'>Restaurants</span>
                </div>
                <div className='ph-content'>
                  <span className='ph-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24"><path d="M23.097 21.71c-.896.187-1.71-.114-2.442-.76a4.629 4.629 0 0 1-.74-.837.75.75 0 0 0-1.272-.004 3.557 3.557 0 0 1-2.925 1.661 2.98 2.98 0 0 1-2.559-1.608.75.75 0 0 0-1.26-.11 4.418 4.418 0 0 1-3.286 1.719c-1.121-.058-2.216-.68-2.876-1.677a.75.75 0 0 0-1.214-.05 6.17 6.17 0 0 1-1.125 1.033c-.833.588-1.677.85-2.49.675a.75.75 0 1 0-.315 1.466c1.285.276 2.526-.107 3.67-.915a7.084 7.084 0 0 0 1.438-1.33l-1.214-.05a5.257 5.257 0 0 0 4.126 2.346c1.807-.084 3.417-.926 4.476-2.303l-1.26-.11a4.49 4.49 0 0 0 3.892 2.414 5.07 5.07 0 0 0 4.192-2.361l-1.272-.004c.192.308.533.739 1.022 1.17 1.057.931 2.32 1.4 3.74 1.104a.75.75 0 0 0-.306-1.468zm0-4.5c-.896.187-1.71-.114-2.442-.76a4.629 4.629 0 0 1-.74-.837.75.75 0 0 0-1.272-.004 3.557 3.557 0 0 1-2.925 1.661 2.98 2.98 0 0 1-2.559-1.608.75.75 0 0 0-1.26-.11 4.418 4.418 0 0 1-3.286 1.719c-1.121-.058-2.216-.68-2.876-1.677a.75.75 0 0 0-1.214-.05 6.17 6.17 0 0 1-1.125 1.033c-.833.588-1.677.85-2.49.675a.75.75 0 1 0-.315 1.466c1.285.276 2.526-.107 3.67-.915a7.084 7.084 0 0 0 1.438-1.33l-1.214-.05a5.257 5.257 0 0 0 4.126 2.346c1.807-.084 3.417-.926 4.476-2.303l-1.26-.11a4.49 4.49 0 0 0 3.892 2.414 5.07 5.07 0 0 0 4.192-2.361l-1.272-.004c.192.308.533.739 1.022 1.17 1.057.931 2.32 1.4 3.74 1.104a.75.75 0 0 0-.306-1.468zm-1.722-8.64a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0zm1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0zM7.777 14.636l3.831-2.4a.75.75 0 0 0 .166-1.13L8.964 7.9a2.25 2.25 0 0 1 .687-3.494l4.264-2.135a.751.751 0 1 1 .686 1.333l-.01.006-3.405 1.702a1.502 1.502 0 0 0-.448 2.334l5.375 6.142a.75.75 0 1 0 1.128-.988l-5.377-6.145-.002-.003v-.001l3.394-1.697.027-.013A2.25 2.25 0 0 0 13.238.93L8.98 3.065a3.749 3.749 0 0 0-1.144 5.824l2.81 3.206.166-1.13-3.831 2.4a.75.75 0 0 0 .796 1.272z"></path></svg>
                  </span>
                  <span className='ph-text'>Outdoor swimming pool</span>
                </div>
                <div className='ph-content'>
                  <span className='ph-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24"><path d="M19.5 9h2.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 0 0 1.5h7.5A2.25 2.25 0 0 0 24 12.75v-3a2.25 2.25 0 0 0-2.25-2.25H19.5a.75.75 0 0 0 0 1.5zM5.25 13.5h-1.5l.75.75v-6L3.75 9h7.5a.75.75 0 0 0 0-1.5h-7.5a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h1.5a.75.75 0 0 0 0-1.5zM15 12v2.25a.75.75 0 0 0 1.5 0V12a.75.75 0 0 0-1.5 0zM0 8.25v6a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-1.5 0zm1.28 15.53l22.5-22.5A.75.75 0 0 0 22.72.22L.22 22.72a.75.75 0 1 0 1.06 1.06zM4.5.75A2.25 2.25 0 0 1 2.25 3 2.25 2.25 0 0 0 0 5.25a.75.75 0 0 0 1.5 0 .75.75 0 0 1 .75-.75A3.75 3.75 0 0 0 6 .75a.75.75 0 0 0-1.5 0z"></path></svg>
                  </span>
                  <span className='ph-text'>Non-smoking rooms</span>
                </div>
                <div className='ph-content'>
                  <span className='ph-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" class="bi bi-check-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" /> <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" /> </svg>
                  </span>
                  <span className='ph-text'>24-hour security</span>
                </div>
                <div className='ph-content'>
                  <span className='ph-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24"><path d="M6 .75v6a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-1.5 0zm4.28 2.47l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l3-3H6.22l3 3a.75.75 0 1 0 1.06-1.06zM18 6.75v-6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zm1.72-3.53l-3 3h1.06l-3-3a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06zM22.5 16.5v5.25a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75v-10.5a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v5.25zm1.5 0v-5.25A2.25 2.25 0 0 0 21.75 9H2.25A2.25 2.25 0 0 0 0 11.25v10.5A2.25 2.25 0 0 0 2.25 24h19.5A2.25 2.25 0 0 0 24 21.75V16.5zM9 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm1.5 7.5a4.5 4.5 0 1 0-9 0v.75c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-.75zm-1.5 0v.75l.75-.75h-7.5l.75.75v-.75a3 3 0 1 1 6 0zM18 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm1.5 7.5a4.5 4.5 0 1 0-9 0v.75c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-.75zm-1.5 0v.75l.75-.75h-7.5l.75.75v-.75a3 3 0 1 1 6 0z"></path></svg>
                  </span>
                  <span className='ph-text'>Lift</span>
                </div>
                <div className='ph-content'>
                  <span className='ph-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24"><path d="M14.25 18.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zm2.08-5.833a8.25 8.25 0 0 0-11.666 0 .75.75 0 0 0 1.06 1.06 6.75 6.75 0 0 1 9.546 0 .75.75 0 0 0 1.06-1.06zm3.185-3.182c-4.979-4.98-13.051-4.98-18.03 0a.75.75 0 1 0 1.06 1.06c4.394-4.393 11.516-4.393 15.91 0a.75.75 0 1 0 1.06-1.06zm2.746-3.603C17.136-.043 6.864-.043.24 6.132A.75.75 0 1 0 1.26 7.23c6.05-5.638 15.429-5.638 21.478 0a.75.75 0 0 0 1.022-1.098z"></path></svg>
                  </span>
                  <span className='ph-text'>Free WiFi</span>
                </div>
                <div className='ph-content'>
                  <span className='ph-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24"><path d="M.75 24h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zM24 2.25A2.25 2.25 0 0 0 21.75 0H4.5a2.25 2.25 0 0 0-2.25 2.25v6A2.25 2.25 0 0 0 4.5 10.5H12a.75.75 0 0 1 .75.75v12c0 .414.336.75.75.75h9.75a.75.75 0 0 0 .75-.75v-21zm-1.5 0v21l.75-.75H13.5l.75.75v-12A2.25 2.25 0 0 0 12 9H4.5a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75h17.25a.75.75 0 0 1 .75.75zM18.75 24h4.5a.75.75 0 0 0 .75-.75v-10.5a.75.75 0 0 0-.75-.75h-3A2.25 2.25 0 0 0 18 14.25v9c0 .414.336.75.75.75zm0-1.5l.75.75v-9a.75.75 0 0 1 .75-.75h3l-.75-.75v10.5l.75-.75h-4.5zM6 9.75v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm2.25-4.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0zm13.5-.75h-4.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm0 3h-4.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM2.344 18c0 .866.012 1.295.069 1.833C2.69 22.437 4.003 24 6.844 24c2.234 0 3.38-1.189 3.977-3.297.057-.203.11-.411.168-.66l.136-.599c.029-.126.054-.228.077-.32a1.5 1.5 0 0 0-1.454-1.874H3.094a.75.75 0 0 0-.75.75zm1.5 0l-.75.75h6.655c-.027.107-.054.22-.086.357l-.135.595c-.053.229-.1.415-.15.592-.434 1.53-1.085 2.206-2.534 2.206-1.97 0-2.736-.912-2.94-2.825-.05-.47-.06-.861-.06-1.675zm-.75-.75a3 3 0 0 0-3 3 .75.75 0 0 0 1.5 0 1.5 1.5 0 0 1 1.5-1.5.75.75 0 0 0 0-1.5z"></path></svg>
                  </span>
                  <span className='ph-text'>Tea/coffee maker in all rooms</span>
                </div>
                <div className='ph-content'>
                  <span className='ph-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 128 128"><path d="M108.42 55.84H44.26a9 9 0 0 0-8.94 8.94v20.67H19.58a9 9 0 0 0-8.93 8.94v14.8a9 9 0 0 0 8.93 8.94h6.47c2.2 7.332 9.928 11.491 17.26 9.291a13.861 13.861 0 0 0 9.29-9.291h22.8c2.2 7.332 9.928 11.491 17.26 9.291a13.861 13.861 0 0 0 9.29-9.291h1.53c7.658-.006 13.864-6.212 13.87-13.87V64.78a9 9 0 0 0-8.93-8.94zm.93 8.94v20.67H92.68V63.84h15.74a.94.94 0 0 1 .93.94zM68 85.45V63.84h16.68v21.61zM44.26 63.84H60v21.61H43.32V64.78c0-.52.42-.94.94-.94zM39.32 120a5.87 5.87 0 1 1 5.87-5.87 5.88 5.88 0 0 1-5.87 5.87zm49.36 0a5.87 5.87 0 1 1 5.87-5.87 5.87 5.87 0 0 1-5.87 5.87zm14.8-9.87H102c-2.2-7.332-9.928-11.491-17.26-9.291a13.861 13.861 0 0 0-9.29 9.291H52.6c-2.2-7.332-9.928-11.491-17.26-9.291a13.861 13.861 0 0 0-9.29 9.291h-6.47a.94.94 0 0 1-.93-.94v-14.8a.94.94 0 0 1 .93-.94h89.77v10.81a5.87 5.87 0 0 1-5.87 5.87zm-92.29-82a4 4 0 0 1 5.467-1.451l.003.001 6.69 3.88 12.33-6-13.79-8a4 4 0 0 1 4-6.91l18.4 10.73 13.07-6.4a4.003 4.003 0 1 1 3.52 7.19l-36 17.6a4 4 0 0 1-3.76-.13l-8.54-5a4 4 0 0 1-1.39-5.52z"></path></svg>
                  </span>
                  <span className='ph-text'>Airport shuttle</span>
                </div>
                <div className='ph-content'>
                  <span className='ph-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24"><path d="M11.25.75v7.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zm4.031.914l-3.75 3h.938l-3.75-3a.75.75 0 1 0-.938 1.172l3.75 3a.75.75 0 0 0 .938 0l3.75-3a.75.75 0 1 0-.938-1.172zM1.883 7.024l6.495 3.75a.75.75 0 0 0 .75-1.299l-6.495-3.75a.75.75 0 1 0-.75 1.3zM4.69 3.99l.723 4.748.468-.812-4.473 1.748a.75.75 0 0 0 .546 1.398l4.473-1.748a.75.75 0 0 0 .468-.812l-.723-4.748a.75.75 0 1 0-1.482.226zM2.632 18.274l6.495-3.75a.75.75 0 1 0-.75-1.298l-6.495 3.75a.75.75 0 1 0 .75 1.299zm-1.224-3.948l4.473 1.748-.468-.812-.723 4.748a.75.75 0 0 0 1.482.226l.723-4.748a.75.75 0 0 0-.468-.812l-4.473-1.748a.75.75 0 0 0-.546 1.398zM12.75 23.25v-7.5a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zm-4.031-.914l3.75-3h-.938l3.75 3a.75.75 0 0 0 .937-1.172l-3.75-3a.75.75 0 0 0-.937 0l-3.75 3a.75.75 0 0 0 .938 1.172zm13.399-5.36l-6.495-3.75a.75.75 0 0 0-.75 1.298l6.495 3.75a.75.75 0 0 0 .75-1.299zm-2.807 3.034l-.724-4.748-.468.812 4.473-1.748a.75.75 0 0 0-.546-1.398l-4.473 1.748a.75.75 0 0 0-.468.812l.723 4.748a.75.75 0 0 0 1.483-.226zm2.057-14.285l-6.495 3.75a.75.75 0 0 0 .75 1.3l6.495-3.75a.75.75 0 0 0-.75-1.3zm1.224 3.95l-4.473-1.749.468.812.724-4.748a.75.75 0 0 0-1.483-.226l-.723 4.748a.75.75 0 0 0 .468.812l4.473 1.748a.75.75 0 0 0 .546-1.398zM11.625 7.6L8.377 9.475a.75.75 0 0 0-.375.65v3.75a.75.75 0 0 0 .375.65l3.248 1.874a.75.75 0 0 0 .75 0l3.248-1.875a.75.75 0 0 0 .375-.649v-3.75a.75.75 0 0 0-.375-.65L12.375 7.6a.75.75 0 0 0-.75 0zm.75 1.3h-.75l3.248 1.874-.375-.649v3.75l.375-.65-3.248 1.876h.75l-3.248-1.876.375.65v-3.75l-.375.65L12.375 8.9z"></path></svg>
                  </span>
                  <span className='ph-text'>Air conditioning</span>
                </div>
                <div className='ph-content'>
                  <span className='ph-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24"><path d="M15.788.659a2.25 2.25 0 0 0 0 3.181l4.37 4.371a2.25 2.25 0 0 0 3.183-3.181L18.97.659a2.25 2.25 0 0 0-3.181 0zm1.06 1.06a.75.75 0 0 1 1.06 0l4.373 4.371a.75.75 0 0 1-1.061 1.06l-4.372-4.37a.75.75 0 0 1 0-1.06zM11.545.657a2.25 2.25 0 0 0-.001 3.182v.002l8.616 8.614a2.251 2.251 0 1 0 3.18-3.186L14.73.658a2.25 2.25 0 0 0-3.18-.005l-.006.006zm1.061 1.06l.002-.001a.75.75 0 0 1 1.06.001l8.613 8.613a.751.751 0 1 1-1.061 1.064L12.605 2.78a.75.75 0 0 1 0-1.061zM1.72 16.848a.75.75 0 0 1 1.06 0l4.372 4.371a.75.75 0 0 1-1.07 1.051L1.719 17.91a.75.75 0 0 1 0-1.06zm-1.061-1.06a2.25 2.25 0 0 0 0 3.181L5.03 23.34a2.25 2.25 0 0 0 3.19-3.172l-4.38-4.38v-.001a2.25 2.25 0 0 0-3.183 0zm1.06-3.184a.75.75 0 0 1 1.06 0l8.616 8.615a.751.751 0 0 1-1.064 1.062L1.719 13.67a.75.75 0 0 1-.003-1.062l.002-.003zM.66 11.543l-.006.007A2.25 2.25 0 0 0 .66 14.73l8.61 8.61a2.251 2.251 0 0 0 3.186-3.182L3.84 11.544a2.25 2.25 0 0 0-3.181 0zm6.428 4.309l8.765-8.765H14.79l2.121 2.121v-1.06l-8.764 8.764h1.06l-2.121-2.121v1.06zm-1.06-1.061a.75.75 0 0 0 0 1.06l2.12 2.122a.75.75 0 0 0 1.061 0l8.765-8.765a.75.75 0 0 0 0-1.06l-2.121-2.122a.75.75 0 0 0-1.061 0l-8.765 8.765z"></path></svg>
                  </span>
                  <span className='ph-text'>Fitness centre</span>
                </div>
                <div className='ph-content'>
                  <span className='ph-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24"><path d="M21.75 21h-18l.75.75v-6l-.75.75h18a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75zm0 1.5A2.25 2.25 0 0 0 24 20.25v-3A2.25 2.25 0 0 0 21.75 15h-18a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h18zM15 15.75v6a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-1.5 0zm-15 0v6a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-1.5 0zm7.5-13.5A3.75 3.75 0 0 1 3.75 6 3.75 3.75 0 0 0 0 9.75a.75.75 0 0 0 1.5 0A2.25 2.25 0 0 1 3.75 7.5C6.65 7.5 9 5.15 9 2.25a.75.75 0 0 0-1.5 0zm4.5 0a8.25 8.25 0 0 1-8.25 8.25.75.75 0 0 0 0 1.5c5.385 0 9.75-4.365 9.75-9.75a.75.75 0 0 0-1.5 0z"></path></svg>
                  </span>
                  <span className='ph-text'>Designated smoking area</span>
                </div>
                <div className='ph-content'>
                  <span className='ph-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24"><path d="M14.244 14.156a6.75 6.75 0 0 0-6.75-5.906A6.747 6.747 0 0 0 .73 14.397a.75.75 0 0 0 1.494.134 5.25 5.25 0 0 1 5.27-4.781 5.253 5.253 0 0 1 5.262 4.594.75.75 0 1 0 1.488-.188zM10.125 4.125a2.625 2.625 0 1 1-5.25 0V1.5h5.25v2.625zm1.5 0V1.5a1.5 1.5 0 0 0-1.5-1.5h-5.25a1.5 1.5 0 0 0-1.5 1.5v2.625a4.125 4.125 0 0 0 8.25 0zM23.25 22.5H.75l.75.75v-7.5a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v7.5l.75-.75zm0 1.5a.75.75 0 0 0 .75-.75v-7.5a2.25 2.25 0 0 0-2.25-2.25H2.25A2.25 2.25 0 0 0 0 15.75v7.5c0 .414.336.75.75.75h22.5zM4.376 5.017a9.42 9.42 0 0 1 3.12-.517 9.428 9.428 0 0 1 3.133.519.75.75 0 0 0 .49-1.418A10.917 10.917 0 0 0 7.498 3a10.91 10.91 0 0 0-3.611.6.75.75 0 0 0 .49 1.417zM15.75 14.27a3.001 3.001 0 0 1 6 .16.75.75 0 1 0 1.5.04 4.501 4.501 0 1 0-9-.24.75.75 0 1 0 1.5.04zm3.75-3.77V8.25a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 1.5 0zM17.25 9h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5z"></path></svg>
                  </span>
                  <span className='ph-text'>24-hour front desk</span>
                </div>
                <div className='ph-content'>
                  <span className='ph-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24"><path d="M16.01 15a4.5 4.5 0 1 0-9 0l.75-.75a3.75 3.75 0 1 0 0 7.5 4.96 4.96 0 0 0 2.245-.59 3.277 3.277 0 0 1 3.018.005c.677.365 1.44.567 2.22.585a3.75 3.75 0 1 0 .018-7.5l.749.75zm-1.5 0c0 .414.336.75.75.75a2.25 2.25 0 0 1 0 4.5 3.435 3.435 0 0 1-1.536-.41 4.786 4.786 0 0 0-4.42-.005 3.457 3.457 0 0 1-1.562.415A2.247 2.247 0 0 1 5.51 18a2.25 2.25 0 0 1 2.25-2.25.75.75 0 0 0 .75-.75 3 3 0 1 1 6 0zm-9.75-3.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3-6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3.75 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0z"></path></svg>
                  </span>
                  <span className='ph-text'>Pets allowed</span>
                </div>
                <div className='ph-content'>
                  <span className='ph-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24"><path d="M13.125 3.56a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0zm1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0zm3.454 18.335l-1.836-3.67a.75.75 0 0 0-.671-.415H11.25a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v6c0 .414.336.75.75.75h3.75a.75.75 0 0 1 .671.415l2.25 4.5a.75.75 0 0 1-1.342.67zm-1.342.671a2.25 2.25 0 1 0 4.026-2.012l-2.25-4.5A2.25 2.25 0 0 0 16.5 14.81h-3.75l.75.75v-6a2.25 2.25 0 0 0-4.5 0v7.5a2.25 2.25 0 0 0 2.25 2.25h4.322l-.67-.415 1.835 3.672zm-4.362-.958a5.25 5.25 0 0 1-5.25-9.096.75.75 0 1 0-.75-1.299 6.75 6.75 0 1 0 6.75 11.694.75.75 0 1 0-.75-1.3z"></path></svg>
                  </span>
                  <span className='ph-text'>Facilities for disabled guests</span>
                </div>
              </div>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Property highlights</h1>
              <div className='ph-content'>
                <span className='ph-icon'>
                  <svg class="bk-icon -streamline-geo_pin_heart ph-icon" height="20" width="20" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M64 128a8 8 0 0 1-6.67-3.58c-4.21-6.35-13.62-21.53-22.15-38.1C25.11 66.76 20 52.52 20 44 20 19.7 39.7 0 64 0s44 19.7 44 44c0 8.52-5.11 22.76-15.18 42.32-8.53 16.57-17.94 31.75-22.15 38.1A8 8 0 0 1 64 128zM64 8C44.118 8 28 24.118 28 44c0 15.36 23.45 57.08 36 76 12.55-18.92 36-60.64 36-76 0-19.882-16.118-36-36-36zm0 60a4 4 0 0 1-2.89-1.23l-18.19-19c-5.616-5.901-5.384-15.238.517-20.853 5.73-5.452 14.739-5.415 20.423.083l.14.14.15-.14c5.639-5.88 14.976-6.074 20.855-.435 5.88 5.638 6.074 14.976.436 20.855-.144.15-.291.296-.441.44l-18.09 18.9A4 4 0 0 1 64 68zM53.42 30.67a7.853 7.853 0 0 0-1.08.08 6.76 6.76 0 0 0-3.69 11.45L64 58.22l15.28-15.95a6.753 6.753 0 0 0-9.48-9.62l-3 3a4 4 0 0 1-5.65 0l-3-3a6.75 6.75 0 0 0-4.73-1.98z"></path></svg>
                </span>
                <span className='ph-text'>Top location: Highly rated by recent guests (8.0)</span>
              </div>
              <p>Breakfast info</p>
              <div className='ph-text'><span>Continental, Full English/Irish, Vegetarian, Asian, American</span></div>
              <div className='ph-content'>
                <span className='ph-icon'>
                  <svg class="bk-icon -streamline-parking_sign ph-icon" height="20" width="20" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zm-9.75-1.5a1.5 1.5 0 0 1-1.5 1.5H10.5l.75.75v-4.5L10.5 9h2.25a1.5 1.5 0 0 1 1.5 1.5zm1.5 0a3 3 0 0 0-3-3H10.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h2.25a3 3 0 0 0 3-3zm-4.5 6.75v-4.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z"></path></svg>
                </span>
                <span className='ph-text'>Free private parking available at the hotel</span>
              </div>
              {/* <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2> */}
              <a href='#reserve' className='button'>Reserve or Book Now!</a>
            </div>
          </div>
          <h1 id='reserve' className="detailsTitle">
            Availability
          </h1>
          {
            date &&
            <div className='ph-content'>
              <span className='ph-icon'>
                <svg class="" height="16" width="16" fill='red' viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M12 15.75A1.125 1.125 0 1 0 12 18a1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm.75-2.25V5.25a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path></svg>
              </span>
              <span className='ph-text error-text'>Select dates to see this property's availability and prices</span>
            </div>
          }
          <div className="Search">
            <div className="SearchItem">
              <FontAwesomeIcon className='headerIcon' icon={faCalendar} />
              <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "dd-MM-yyyy")} to ${format(date[0].endDate, "dd-MM-yyyy")}`}</span>
              {openDate &&
                <DateRange
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className='date'
                  minDate={new Date()}
                />}
            </div>
            <div className="SearchItem">
              <FontAwesomeIcon className='Icon' icon={faPerson} />
              <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult . ${options.childern} childern . ${options.room} room`}</span>
              {openOptions &&
                <div className="options">
                  <div className="optionsItem">
                    <span className="optionsItemText">Adults</span>
                    <div className="optionCounter">
                      <button disabled={options.adult <= 1} className='optionsCounter' onClick={() => handleOperation('adult', 'd')}>-</button>
                      <span className='optionsItemNumber'>{options.adult}</span>
                      <button className='optionsCounter' onClick={() => handleOperation('adult', 'i')}>+</button>
                    </div>
                  </div>
                  <div className="optionsItem">
                    <span className="optionsItemText">Childern</span>
                    <div className="optionCounter">
                      <button disabled={options.childern <= 0} className='optionsCounter' onClick={() => handleOperation('childern', 'd')}>-</button>
                      <span className='optionsItemNumber'>{options.childern}</span>
                      <button className='optionsCounter' onClick={() => handleOperation('childern', 'i')}>+</button>
                    </div>
                  </div>
                  <div className="optionsItem">
                    <span className="optionsItemText">Room</span>
                    <div className="optionCounter">
                      <button disabled={options.room <= 1} className='optionsCounter' onClick={() => handleOperation('room', 'd')}>-</button>
                      <span className='optionsItemNumber'>{options.room}</span>
                      <button className='optionsCounter' onClick={() => handleOperation('room', 'i')}>+</button>
                    </div>
                  </div>
                </div>
              }
            </div>
            <div className="SearchItem">
              <button onClick={handleSearch} className='Btn'>Apply</button>
            </div>
          </div>
          <div className="room">
            <table>
              <thead>
                <tr>
                  <th>Room type</th>
                  <th>Guests</th>
                  <th>Price</th>
                  <th>Select rooms</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className='tdData'>
                      <span className="roomTitle">Family Suite</span>
                      <div className='ph-content'>
                        <span className='ph-text'>3 Single Beds</span>
                        <span className='ph-icon'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><title>ionicons-v5-g</title><path d="M432,224V96a16,16,0,0,0-16-16H96A16,16,0,0,0,80,96V224a48,48,0,0,0-48,48V432H68V400H444v32h36V272A48,48,0,0,0,432,224Zm-192,0H120V192a16,16,0,0,1,16-16h88a16,16,0,0,1,16,16Zm32-32a16,16,0,0,1,16-16h88a16,16,0,0,1,16,16v32H272Z" /></svg>
                        </span>
                      </div>
                      <div className="roomFacilities">
                        <div className='ph-content'>
                          <span className='ph-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24"><path d="M11.25.75v7.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zm4.031.914l-3.75 3h.938l-3.75-3a.75.75 0 1 0-.938 1.172l3.75 3a.75.75 0 0 0 .938 0l3.75-3a.75.75 0 1 0-.938-1.172zM1.883 7.024l6.495 3.75a.75.75 0 0 0 .75-1.299l-6.495-3.75a.75.75 0 1 0-.75 1.3zM4.69 3.99l.723 4.748.468-.812-4.473 1.748a.75.75 0 0 0 .546 1.398l4.473-1.748a.75.75 0 0 0 .468-.812l-.723-4.748a.75.75 0 1 0-1.482.226zM2.632 18.274l6.495-3.75a.75.75 0 1 0-.75-1.298l-6.495 3.75a.75.75 0 1 0 .75 1.299zm-1.224-3.948l4.473 1.748-.468-.812-.723 4.748a.75.75 0 0 0 1.482.226l.723-4.748a.75.75 0 0 0-.468-.812l-4.473-1.748a.75.75 0 0 0-.546 1.398zM12.75 23.25v-7.5a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zm-4.031-.914l3.75-3h-.938l3.75 3a.75.75 0 0 0 .937-1.172l-3.75-3a.75.75 0 0 0-.937 0l-3.75 3a.75.75 0 0 0 .938 1.172zm13.399-5.36l-6.495-3.75a.75.75 0 0 0-.75 1.298l6.495 3.75a.75.75 0 0 0 .75-1.299zm-2.807 3.034l-.724-4.748-.468.812 4.473-1.748a.75.75 0 0 0-.546-1.398l-4.473 1.748a.75.75 0 0 0-.468.812l.723 4.748a.75.75 0 0 0 1.483-.226zm2.057-14.285l-6.495 3.75a.75.75 0 0 0 .75 1.3l6.495-3.75a.75.75 0 0 0-.75-1.3zm1.224 3.95l-4.473-1.749.468.812.724-4.748a.75.75 0 0 0-1.483-.226l-.723 4.748a.75.75 0 0 0 .468.812l4.473 1.748a.75.75 0 0 0 .546-1.398zM11.625 7.6L8.377 9.475a.75.75 0 0 0-.375.65v3.75a.75.75 0 0 0 .375.65l3.248 1.874a.75.75 0 0 0 .75 0l3.248-1.875a.75.75 0 0 0 .375-.649v-3.75a.75.75 0 0 0-.375-.65L12.375 7.6a.75.75 0 0 0-.75 0zm.75 1.3h-.75l3.248 1.874-.375-.649v3.75l.375-.65-3.248 1.876h.75l-3.248-1.876.375.65v-3.75l-.375.65L12.375 8.9z"></path></svg>
                          </span>
                          <span className='ph-text'>Air conditioning</span>
                        </div>
                        <div className='ph-content'>
                          <span className='ph-icon'>
                            <svg class="bk-icon -streamline-shower" fill="green" height="20" width="20" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M15.375 10.875a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0zm1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0zm.375 12.375V18.7l-.667.745C20.748 18.98 24 15.925 24 10.5a2.25 2.25 0 0 0-4.5 0c0 1.945-.609 3.154-1.64 3.848a3.973 3.973 0 0 1-2.132.652H9a3.75 3.75 0 1 0 0 7.5h3a2.25 2.25 0 0 0 0-4.5H9a.75.75 0 0 0 0 1.5h3a.75.75 0 0 1 0 1.5H9a2.25 2.25 0 0 1 0-4.5h6.74a5.426 5.426 0 0 0 2.957-.908C20.154 14.613 21 12.932 21 10.5a.75.75 0 0 1 1.5 0c0 4.6-2.628 7.069-6.083 7.455a.75.75 0 0 0-.667.745v4.55a.75.75 0 0 0 1.5 0zm-7.5-1.5v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zM.75 1.5h1.5l-.53-.22 1.402 1.402a.75.75 0 0 0 1.06-1.06L2.78.22A.75.75 0 0 0 2.25 0H.75a.75.75 0 1 0 0 1.5zm2.983 3.754a.01.01 0 0 1 .016.002c-.542-1.072-.1-2.426 1.008-2.988a2.25 2.25 0 0 1 2.037 0c-.041-.022-.043-.029-.04-.034l.002-.002-3.013 3.012zm1.07 1.05l3.002-3A1.489 1.489 0 0 0 7.51.951 3.766 3.766 0 0 0 4.079.929 3.75 3.75 0 0 0 2.43 5.971a1.49 1.49 0 0 0 2.382.323zm3.408-.968l1.116.62a.75.75 0 1 0 .728-1.312l-1.116-.62a.75.75 0 1 0-.728 1.312zm1.964-2.233l1.615.44a.75.75 0 1 0 .394-1.448l-1.615-.44a.75.75 0 1 0-.394 1.448zm4.217 1.15l1.615.44a.75.75 0 0 0 .396-1.447l-1.615-.44a.75.75 0 0 0-.396 1.447zM5.697 7.388l.577 1.038a.75.75 0 1 0 1.312-.728L7.009 6.66a.75.75 0 1 0-1.312.728zM3.284 8.94l.44 1.615a.75.75 0 1 0 1.448-.394l-.44-1.615a.75.75 0 1 0-1.448.394zm1.15 4.219l.246.896a.75.75 0 1 0 1.446-.396l-.245-.896a.75.75 0 1 0-1.446.396z"></path></svg>
                          </span>
                          <span className='ph-text'>Private bathroom</span>
                        </div>
                      </div>
                      <hr />
                      <div className="roomFacilities">
                        <div className='ph-content'>
                          <span className='ph-icon'>
                            <svg class="bk-icon -streamline-checkmark" fill="#008009" height="20" width="20" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                          </span>
                          <span className='ph-text'>Shower</span>
                        </div>
                        <div className='ph-content'>
                          <span className='ph-icon'>
                            <svg class="bk-icon -streamline-checkmark" fill="#008009" height="20" width="20" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                          </span>
                          <span className='ph-text'>Toilet</span>
                        </div>
                        <div className='ph-content'>
                          <span className='ph-icon'>
                            <svg class="bk-icon -streamline-checkmark" fill="#008009" height="20" width="20" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                          </span>
                          <span className='ph-text'>Towels</span>
                        </div>
                        <div className='ph-content'>
                          <span className='ph-icon'>
                            <svg class="bk-icon -streamline-checkmark" fill="#008009" height="20" width="20" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                          </span>
                          <span className='ph-text'>Linen</span>
                        </div>
                        <div className='ph-content'>
                          <span className='ph-icon'>
                            <svg class="bk-icon -streamline-checkmark" fill="#008009" height="20" width="20" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                          </span>
                          <span className='ph-text'>Toilet paper</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <FontAwesomeIcon className='roomIcon' icon={faPerson} />
                    <FontAwesomeIcon className='roomIcon' icon={faPerson} />
                    <FontAwesomeIcon className='roomIcon' icon={faPerson} />
                  </td>
                  <td>
                    <div className='tdData'>
                      <span className="price">USD 59$</span>
                      <span className='ph-text'>+USD 9.5$ taxes and charges</span>
                    </div>
                  </td>
                  <td>
                    <div className='roomData'>
                      <span className='roomNumberContent'>
                        <label htmlFor="roomNumber">201</label>
                        <input type="checkbox" name="201" id="roomNumber" />
                      </span>
                      <span className='roomNumberContent'>
                        <label htmlFor="roomNumber">202</label>
                        <input type="checkbox" name="202" id="roomNumber" />
                      </span>
                      <span className='roomNumberContent'>
                        <label htmlFor="roomNumber">203</label>
                        <input type="checkbox" name="203" id="roomNumber" />
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='tdData'>
                      <span className="roomTitle">Deluxe Twin Room</span>
                      <div className='ph-content'>
                        <span className='ph-text'>1 Double Bed</span>
                        <span className='ph-icon'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><title>ionicons-v5-g</title><path d="M432,224V96a16,16,0,0,0-16-16H96A16,16,0,0,0,80,96V224a48,48,0,0,0-48,48V432H68V400H444v32h36V272A48,48,0,0,0,432,224Zm-192,0H120V192a16,16,0,0,1,16-16h88a16,16,0,0,1,16,16Zm32-32a16,16,0,0,1,16-16h88a16,16,0,0,1,16,16v32H272Z" /></svg>
                        </span>
                      </div>
                      <div className="roomFacilities">
                        <div className='ph-content'>
                          <span className='ph-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24"><path d="M11.25.75v7.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zm4.031.914l-3.75 3h.938l-3.75-3a.75.75 0 1 0-.938 1.172l3.75 3a.75.75 0 0 0 .938 0l3.75-3a.75.75 0 1 0-.938-1.172zM1.883 7.024l6.495 3.75a.75.75 0 0 0 .75-1.299l-6.495-3.75a.75.75 0 1 0-.75 1.3zM4.69 3.99l.723 4.748.468-.812-4.473 1.748a.75.75 0 0 0 .546 1.398l4.473-1.748a.75.75 0 0 0 .468-.812l-.723-4.748a.75.75 0 1 0-1.482.226zM2.632 18.274l6.495-3.75a.75.75 0 1 0-.75-1.298l-6.495 3.75a.75.75 0 1 0 .75 1.299zm-1.224-3.948l4.473 1.748-.468-.812-.723 4.748a.75.75 0 0 0 1.482.226l.723-4.748a.75.75 0 0 0-.468-.812l-4.473-1.748a.75.75 0 0 0-.546 1.398zM12.75 23.25v-7.5a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zm-4.031-.914l3.75-3h-.938l3.75 3a.75.75 0 0 0 .937-1.172l-3.75-3a.75.75 0 0 0-.937 0l-3.75 3a.75.75 0 0 0 .938 1.172zm13.399-5.36l-6.495-3.75a.75.75 0 0 0-.75 1.298l6.495 3.75a.75.75 0 0 0 .75-1.299zm-2.807 3.034l-.724-4.748-.468.812 4.473-1.748a.75.75 0 0 0-.546-1.398l-4.473 1.748a.75.75 0 0 0-.468.812l.723 4.748a.75.75 0 0 0 1.483-.226zm2.057-14.285l-6.495 3.75a.75.75 0 0 0 .75 1.3l6.495-3.75a.75.75 0 0 0-.75-1.3zm1.224 3.95l-4.473-1.749.468.812.724-4.748a.75.75 0 0 0-1.483-.226l-.723 4.748a.75.75 0 0 0 .468.812l4.473 1.748a.75.75 0 0 0 .546-1.398zM11.625 7.6L8.377 9.475a.75.75 0 0 0-.375.65v3.75a.75.75 0 0 0 .375.65l3.248 1.874a.75.75 0 0 0 .75 0l3.248-1.875a.75.75 0 0 0 .375-.649v-3.75a.75.75 0 0 0-.375-.65L12.375 7.6a.75.75 0 0 0-.75 0zm.75 1.3h-.75l3.248 1.874-.375-.649v3.75l.375-.65-3.248 1.876h.75l-3.248-1.876.375.65v-3.75l-.375.65L12.375 8.9z"></path></svg>
                          </span>
                          <span className='ph-text'>Air conditioning</span>
                        </div>
                        <div className='ph-content'>
                          <span className='ph-icon'>
                            <svg class="bk-icon -streamline-shower" fill="green" height="20" width="20" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M15.375 10.875a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0zm1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0zm.375 12.375V18.7l-.667.745C20.748 18.98 24 15.925 24 10.5a2.25 2.25 0 0 0-4.5 0c0 1.945-.609 3.154-1.64 3.848a3.973 3.973 0 0 1-2.132.652H9a3.75 3.75 0 1 0 0 7.5h3a2.25 2.25 0 0 0 0-4.5H9a.75.75 0 0 0 0 1.5h3a.75.75 0 0 1 0 1.5H9a2.25 2.25 0 0 1 0-4.5h6.74a5.426 5.426 0 0 0 2.957-.908C20.154 14.613 21 12.932 21 10.5a.75.75 0 0 1 1.5 0c0 4.6-2.628 7.069-6.083 7.455a.75.75 0 0 0-.667.745v4.55a.75.75 0 0 0 1.5 0zm-7.5-1.5v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zM.75 1.5h1.5l-.53-.22 1.402 1.402a.75.75 0 0 0 1.06-1.06L2.78.22A.75.75 0 0 0 2.25 0H.75a.75.75 0 1 0 0 1.5zm2.983 3.754a.01.01 0 0 1 .016.002c-.542-1.072-.1-2.426 1.008-2.988a2.25 2.25 0 0 1 2.037 0c-.041-.022-.043-.029-.04-.034l.002-.002-3.013 3.012zm1.07 1.05l3.002-3A1.489 1.489 0 0 0 7.51.951 3.766 3.766 0 0 0 4.079.929 3.75 3.75 0 0 0 2.43 5.971a1.49 1.49 0 0 0 2.382.323zm3.408-.968l1.116.62a.75.75 0 1 0 .728-1.312l-1.116-.62a.75.75 0 1 0-.728 1.312zm1.964-2.233l1.615.44a.75.75 0 1 0 .394-1.448l-1.615-.44a.75.75 0 1 0-.394 1.448zm4.217 1.15l1.615.44a.75.75 0 0 0 .396-1.447l-1.615-.44a.75.75 0 0 0-.396 1.447zM5.697 7.388l.577 1.038a.75.75 0 1 0 1.312-.728L7.009 6.66a.75.75 0 1 0-1.312.728zM3.284 8.94l.44 1.615a.75.75 0 1 0 1.448-.394l-.44-1.615a.75.75 0 1 0-1.448.394zm1.15 4.219l.246.896a.75.75 0 1 0 1.446-.396l-.245-.896a.75.75 0 1 0-1.446.396z"></path></svg>
                          </span>
                          <span className='ph-text'>Private bathroom</span>
                        </div>
                      </div>
                      <hr />
                      <div className="roomFacilities">
                        <div className='ph-content'>
                          <span className='ph-icon'>
                            <svg class="bk-icon -streamline-checkmark" fill="#008009" height="20" width="20" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                          </span>
                          <span className='ph-text'>Shower</span>
                        </div>
                        <div className='ph-content'>
                          <span className='ph-icon'>
                            <svg class="bk-icon -streamline-checkmark" fill="#008009" height="20" width="20" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                          </span>
                          <span className='ph-text'>Toilet</span>
                        </div>
                        <div className='ph-content'>
                          <span className='ph-icon'>
                            <svg class="bk-icon -streamline-checkmark" fill="#008009" height="20" width="20" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                          </span>
                          <span className='ph-text'>Towels</span>
                        </div>
                        <div className='ph-content'>
                          <span className='ph-icon'>
                            <svg class="bk-icon -streamline-checkmark" fill="#008009" height="20" width="20" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                          </span>
                          <span className='ph-text'>Linen</span>
                        </div>
                        <div className='ph-content'>
                          <span className='ph-icon'>
                            <svg class="bk-icon -streamline-checkmark" fill="#008009" height="20" width="20" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                          </span>
                          <span className='ph-text'>Toilet paper</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <FontAwesomeIcon className='roomIcon' icon={faPerson} />
                    <FontAwesomeIcon className='roomIcon' icon={faPerson} />
                  </td>
                  <td>
                    <div className='tdData'>
                      <span className="price">USD 64$</span>
                      <span className='ph-text'>+USD 11$ taxes and charges</span>
                    </div>
                  </td>
                  <td>
                    <div className='roomData'>
                      <span className='roomNumberContent'>
                        <label htmlFor="roomNumber">301</label>
                        <input type="checkbox" name="301" id="roomNumber" />
                      </span>
                      <span className='roomNumberContent'>
                        <label htmlFor="roomNumber">302</label>
                        <input type="checkbox" name="302" id="roomNumber" />
                      </span>
                      <span className='roomNumberContent'>
                        <label htmlFor="roomNumber">303</label>
                        <input type="checkbox" name="303" id="roomNumber" />
                      </span>
                      <span className='roomNumberContent'>
                        <label htmlFor="roomNumber">304</label>
                        <input type="checkbox" name="304" id="roomNumber" />
                      </span>
                      <span className='roomNumberContent'>
                        <label htmlFor="roomNumber">305</label>
                        <input type="checkbox" name="305" id="roomNumber" />
                      </span>
                      <span className='roomNumberContent'>
                        <label htmlFor="roomNumber">306</label>
                        <input type="checkbox" name="306" id="roomNumber" />
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='reserve'>
              <div className='reserveHead'></div>
              <div className='tdData' style={{ padding: '10px 8px' }}>
                <span className='ph-text'>1 room for</span>
                <span className="price">USD 59$</span>
                <span className='ph-text'>+USD 9.5$ taxes and charges</span>
                <button className='button'>Reserve</button>
              </div>
            </div>
          </div>
          <div className="review">
            <div className='top'>
              <span>Guest Review</span>
              <a href='#reserve'>See availability</a>
            </div>
            <div className='mid'>
              <span>3.0</span>
              <div>
                <span>Poor</span>
                <span>&nbsp;·&nbsp;1 review </span>
              </div>
            </div>
            <span className='cat'>Categories:</span>
            <div className='ratting'>
              <div className="content">
                <div className='contentText'>
                  <span className='catName'>Staff <svg xmlns="http://www.w3.org/2000/svg" width='10' height='10' fill="#CC0000" viewBox="0 0 24 24"><path d="M23.292 10.24a1.413 1.413 0 0 0-1.994.127l-7.448 8.464a.251.251 0 0 1-.438-.166V1.413a1.412 1.412 0 0 0-2.824 0v17.252a.251.251 0 0 1-.438.166L2.7 10.367a1.413 1.413 0 1 0-2.119 1.867L10.233 23.2a2.352 2.352 0 0 0 3.534 0l9.652-10.967a1.412 1.412 0 0 0-.127-1.993z"></path></svg></span>
                  <span className='rate'>5.0</span>
                </div>
                <span className='contentBox'></span>
              </div>
              <div className="content">
                <div className='contentText'>
                  <span className='catName'>Staff <svg xmlns="http://www.w3.org/2000/svg" width='10' height='10' fill="#CC0000" viewBox="0 0 24 24"><path d="M23.292 10.24a1.413 1.413 0 0 0-1.994.127l-7.448 8.464a.251.251 0 0 1-.438-.166V1.413a1.412 1.412 0 0 0-2.824 0v17.252a.251.251 0 0 1-.438.166L2.7 10.367a1.413 1.413 0 1 0-2.119 1.867L10.233 23.2a2.352 2.352 0 0 0 3.534 0l9.652-10.967a1.412 1.412 0 0 0-.127-1.993z"></path></svg></span>
                  <span className='rate'>5.0</span>
                </div>
                <span className='contentBox'></span>
              </div>
              <div className="content">
                <div className='contentText'>
                  <span className='catName'>Staff <svg xmlns="http://www.w3.org/2000/svg" width='10' height='10' fill="#CC0000" viewBox="0 0 24 24"><path d="M23.292 10.24a1.413 1.413 0 0 0-1.994.127l-7.448 8.464a.251.251 0 0 1-.438-.166V1.413a1.412 1.412 0 0 0-2.824 0v17.252a.251.251 0 0 1-.438.166L2.7 10.367a1.413 1.413 0 1 0-2.119 1.867L10.233 23.2a2.352 2.352 0 0 0 3.534 0l9.652-10.967a1.412 1.412 0 0 0-.127-1.993z"></path></svg></span>
                  <span className='rate'>5.0</span>
                </div>
                <span className='contentBox'></span>
              </div>
              <div className="content">
                <div className='contentText'>
                  <span className='catName'>Staff <svg xmlns="http://www.w3.org/2000/svg" width='10' height='10' fill="#CC0000" viewBox="0 0 24 24"><path d="M23.292 10.24a1.413 1.413 0 0 0-1.994.127l-7.448 8.464a.251.251 0 0 1-.438-.166V1.413a1.412 1.412 0 0 0-2.824 0v17.252a.251.251 0 0 1-.438.166L2.7 10.367a1.413 1.413 0 1 0-2.119 1.867L10.233 23.2a2.352 2.352 0 0 0 3.534 0l9.652-10.967a1.412 1.412 0 0 0-.127-1.993z"></path></svg></span>
                  <span className='rate'>5.0</span>
                </div>
                <span className='contentBox'></span>
              </div>
              <div className="content">
                <div className='contentText'>
                  <span className='catName'>Staff <svg xmlns="http://www.w3.org/2000/svg" width='10' height='10' fill="#CC0000" viewBox="0 0 24 24"><path d="M23.292 10.24a1.413 1.413 0 0 0-1.994.127l-7.448 8.464a.251.251 0 0 1-.438-.166V1.413a1.412 1.412 0 0 0-2.824 0v17.252a.251.251 0 0 1-.438.166L2.7 10.367a1.413 1.413 0 1 0-2.119 1.867L10.233 23.2a2.352 2.352 0 0 0 3.534 0l9.652-10.967a1.412 1.412 0 0 0-.127-1.993z"></path></svg></span>
                  <span className='rate'>5.0</span>
                </div>
                <span className='contentBox'></span>
              </div>
              <div className="content">
                <div className='contentText'>
                  <span className='catName'>Staff <svg xmlns="http://www.w3.org/2000/svg" width='10' height='10' fill="#CC0000" viewBox="0 0 24 24"><path d="M23.292 10.24a1.413 1.413 0 0 0-1.994.127l-7.448 8.464a.251.251 0 0 1-.438-.166V1.413a1.412 1.412 0 0 0-2.824 0v17.252a.251.251 0 0 1-.438.166L2.7 10.367a1.413 1.413 0 1 0-2.119 1.867L10.233 23.2a2.352 2.352 0 0 0 3.534 0l9.652-10.967a1.412 1.412 0 0 0-.127-1.993z"></path></svg></span>
                  <span className='rate'>5.0</span>
                </div>
                <span className='contentBox'></span>
              </div>
            </div>
            <span className='cat'>Reviews:</span>
            <div></div>
          </div>

          <div className="surroun">
            <div className='top'>
              <span>
                <p>Hotel surroundings *</p>
                <p className='mapLink'>Show map</p>
              </span>
              <a href='#reserve'>See availability</a>
            </div>
            <div className='content'>
              <div className="row">
                <span className='cat'>
                  <div className='icon-content'>
                    <span className='ph-icon'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.974 3.554a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0zm1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0zm3.675 7.496a1.488 1.488 0 0 1-1.168-.56 8.45 8.45 0 0 0-6.634-3.19A6.756 6.756 0 0 0 3.6 14.05a2.25 2.25 0 1 0 4.5 0 2.255 2.255 0 0 1 1.689-2.174l-.189-.726h-.75v.5a15.568 15.568 0 0 1-2.622 8.66 2.252 2.252 0 1 0 3.748 2.496 20.15 20.15 0 0 0 2.336-4.768l-1.111.396a7.288 7.288 0 0 1 3.018 3.838c.343 1.165 1.595 1.846 2.787 1.494a2.25 2.25 0 0 0 1.47-2.944 11.771 11.771 0 0 0-5.785-6.712l.398.788c.175-1.074.263-2.16.263-3.248v-.03h-.75l-.356.66a3.98 3.98 0 0 1 1.223 1.022 5.971 5.971 0 0 0 4.688 2.252 2.25 2.25 0 0 0-.002-4.5v.75l.6-.45-.003-.004a.75.75 0 0 0-.602-.3zm.004 1.5l-.002-.75-.6.45.003.004a.75.75 0 0 0 .6.3.75.75 0 0 1 0 1.5 4.473 4.473 0 0 1-3.513-1.687 5.48 5.48 0 0 0-1.684-1.407.75.75 0 0 0-1.106.66v.03c0 1.007-.081 2.012-.243 3.006a.75.75 0 0 0 .398.788 10.288 10.288 0 0 1 5.081 5.952.75.75 0 0 1-1.439.425A8.804 8.804 0 0 0 12 17.166a.75.75 0 0 0-1.111.396 18.65 18.65 0 0 1-2.162 4.412.752.752 0 0 1-1.252-.832 17.066 17.066 0 0 0 2.874-9.493v-.499a.75.75 0 0 0-.939-.726A3.756 3.756 0 0 0 6.6 14.048a.75.75 0 1 1-1.5.002 5.256 5.256 0 0 1 5.25-5.25 6.95 6.95 0 0 1 5.459 2.624 2.989 2.989 0 0 0 2.345 1.126z"></path></svg>
                    </span>
                    <div></div>
                    <span>What's nearby</span>
                  </div>
                </span>
                <div>
                  <span>Jamboree Park</span>
                  <span>250 m</span>
                </div>
                <div>
                  <span>CRB</span>
                  <span>1.9 km</span>
                </div>
                <div>
                  <span>Park Beside Marine Drive Road</span>
                  <span>2.7 km</span>
                </div>
                <div>
                  <span>DC Hill</span>
                  <span>2.8 km</span>
                </div>
                <div>
                  <span>H-Block Park</span>
                  <span>2.9 km</span>
                </div>
                <div>
                  <span>2 no Gate Biplob Uddan</span>
                  <span>4.5 km</span>
                </div>
              </div>
              <div className="row">
                <span className='cat'>
                  <div className='icon-content'>
                    <span className='ph-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.999.75v22.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zm3 0V7.5a2.259 2.259 0 0 1-2.252 2.25 2.258 2.258 0 0 1-2.248-2.252V.75a.75.75 0 0 0-1.5 0V7.5a3.76 3.76 0 0 0 3.748 3.75 3.76 3.76 0 0 0 3.752-3.748V.75a.75.75 0 0 0-1.5 0zm6.75 15.75h3c1.183.046 2.203-.9 2.25-2.111a2.22 2.22 0 0 0 0-.168c-.25-6.672-.828-9.78-3.231-13.533a1.508 1.508 0 0 0-2.77.81V23.25a.75.75 0 0 0 1.5 0V1.503c0 .003.001 0 .003 0a.006.006 0 0 1 .008.002c2.21 3.45 2.75 6.354 2.99 12.773v.053a.696.696 0 0 1-.721.67L15.749 15a.75.75 0 0 0 0 1.5z"></path></svg>
                    </span>
                    <div></div>
                    <span>Restaurants & cafes</span>
                  </div>
                </span>
                <div>
                  <span>Ambrosia</span>
                  <span>30 m</span>
                </div>
                <div>
                  <span>Silver Spoon</span>
                  <span>400 m</span>
                </div>
                <div>
                  <span>Sarah</span>
                  <span>400 m</span>
                </div>
                <div>
                  <span>Barcode Food Junction</span>
                  <span>2.8 km</span>
                </div>
                <div>
                  <span>Chilox</span>
                  <span>2.9 km</span>
                </div>
                <div>
                  <span>Sultan Dine</span>
                  <span>4.5 km</span>
                </div>
                <div>
                  <span>Serial Giller</span>
                  <span>4.3 km</span>
                </div>
                <div>
                  <span>7 Days</span>
                  <span>4.4 km</span>
                </div>
              </div>
              <div className="row">
                <span className='cat'>
                  <div className='icon-content'>
                    <span className='ph-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.75 1.513h12.5c.69 0 1.25.56 1.25 1.25v13.5a.25.25 0 0 1-.25.25H4.75a.25.25 0 0 1-.25-.25v-13.5c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 3 2.763v13.5c0 .966.784 1.75 1.75 1.75h14.5a1.75 1.75 0 0 0 1.75-1.75v-13.5a2.75 2.75 0 0 0-2.75-2.75H5.75zm-3.65 23.7l2.25-3a.75.75 0 1 0-1.2-.9l-2.25 3a.75.75 0 1 0 1.2.9zm21-.9l-2.25-3a.75.75 0 1 0-1.2.9l2.25 3a.75.75 0 1 0 1.2-.9zm-19.35-12.3h16.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5zm7.5-9.75v9a.75.75 0 0 0 1.5 0v-9a.75.75 0 0 0-1.5 0zm-7.5 12.75H7.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5zm16.5-1.5H16.5a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5zM8.92 17.598l1.5-3-.67.415h4.5l-.67-.415 1.5 3a.75.75 0 1 0 1.34-.67l-1.5-3a.75.75 0 0 0-.67-.415h-4.5a.75.75 0 0 0-.67.415l-1.5 3a.75.75 0 1 0 1.34.67z"></path></svg>
                    </span>
                    <span>Public transport</span>
                  </div>
                </span>
                <div>
                  <span>Chittagong Railway Station</span>
                  <span>2.2 km</span>
                </div>
                <div>
                  <span>Dampara Bus Stand, Chittagong</span>
                  <span>5 km</span>
                </div>
                <span className='cat' style={{marginTop: '10px'}}>
                  <div className='icon-content'>
                    <span className='ph-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.33 3.57L5.7 9.955l.79.07-1.96-1.478a.75.75 0 0 0-.753-.087l-2.1.925C.73 9.856.359 10.967.817 11.88c.11.22.263.417.45.577l3.997 3.402a2.94 2.94 0 0 0 3.22.4l3.62-1.8-1.084-.671v5.587a1.833 1.833 0 0 0 2.654 1.657l1.88-.932a1.85 1.85 0 0 0 .975-1.226l1.87-7.839-.396.498 3.441-1.707a3.494 3.494 0 1 0-3.11-6.259zm.672 1.342a1.994 1.994 0 0 1 1.775 3.571l-3.44 1.707a.75.75 0 0 0-.396.498l-1.87 7.838a.35.35 0 0 1-.185.232l-1.88.932a.335.335 0 0 1-.486-.304V13.79a.75.75 0 0 0-1.084-.672l-3.62 1.8a1.44 1.44 0 0 1-1.578-.197l-3.997-3.402a.35.35 0 0 1 .073-.577l2.067-.91-.754-.087 1.96 1.478a.75.75 0 0 0 .79.07l12.63-6.383zm-3.272.319l-4.46-2.26a1.852 1.852 0 0 0-1.656-.001l-1.846.912a1.85 1.85 0 0 0-.295 3.128l2.573 1.955a.75.75 0 1 0 .908-1.194L8.38 5.816a.35.35 0 0 1 .055-.591l1.845-.912a.351.351 0 0 1 .315 0l4.456 2.256a.75.75 0 0 0 .678-1.338z"></path></svg>
                    </span>
                    <span>Closest airports</span>
                  </div>
                </span>
                <div>
                  <span>Shah Amanat International Airport</span>
                  <span>6 km</span>
                </div>
                <div>
                  <span>Cox's Bazar Airport</span>
                  <span>96 km</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rules">
            <div className='top'>
              <span>House rules</span>
              <a href='#reserve'>See availability</a>
            </div>
            <div className="content">
              <div className='row'>
                <div className='row-content'>
                  <span className='ph-icon'>
                    <svg class="bk-icon -streamline-check_in" height="20" width="20" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M87.33 66.22c.06-.1.11-.2.16-.3.077-.125.143-.255.2-.39.054-.133.097-.27.13-.41.04-.112.073-.225.1-.34.1-.515.1-1.045 0-1.56a3.352 3.352 0 0 0-.1-.34 2.802 2.802 0 0 0-.13-.41 2.868 2.868 0 0 0-.2-.39c0-.1-.1-.2-.16-.3a4.922 4.922 0 0 0-.5-.61l-24-24a4.002 4.002 0 1 0-5.66 5.66L74.34 60H20a4 4 0 0 0 0 8h54.34L57.17 85.17a4.002 4.002 0 1 0 5.66 5.66l24-24c.183-.19.35-.394.5-.61zM92 0h-8a4 4 0 0 0 0 8h8c6.627 0 12 5.373 12 12v88c0 6.627-5.373 12-12 12h-8a4 4 0 0 0 0 8h8c11.046 0 20-8.954 20-20V20c0-11.046-8.954-20-20-20z"></path></svg>
                  </span>
                  <span>Check-in</span>
                </div>
                <span>From 1 PM to 10 PM</span>
              </div>
              <div className='row'>
                <div className='row-content'>
                  <span className='ph-icon'>
                    <svg class="bk-icon -streamline-check_out" height="20" width="20" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M111.33 66.22c.06-.1.11-.2.16-.3.05-.1.15-.25.21-.39s.08-.27.12-.41c.039-.112.073-.225.1-.34.1-.515.1-1.045 0-1.56a3.352 3.352 0 0 0-.1-.34c0-.14-.07-.28-.12-.41-.05-.13-.14-.26-.21-.39-.07-.13-.1-.2-.16-.3a4.886 4.886 0 0 0-.5-.61l-24-24a4.002 4.002 0 1 0-5.66 5.66L98.34 60H44a4 4 0 0 0 0 8h54.34L81.17 85.17a4.002 4.002 0 1 0 5.66 5.66l24-24c.183-.19.35-.394.5-.61zM44 120h-8c-6.627 0-12-5.373-12-12V20c0-6.627 5.373-12 12-12h8a4 4 0 0 0 0-8h-8C24.954 0 16 8.954 16 20v88c0 11.046 8.954 20 20 20h8a4 4 0 0 0 0-8z"></path></svg>
                  </span>
                  <span>Check-out</span>
                </div>
                <span>From 12 PM to 1 PM</span>
              </div>
              <div className='row'>
                <div className='row-content'>
                  <span className='ph-icon'>
                    <svg class="bk-icon -streamline-info_sign" height="20" width="20" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path></svg>
                  </span>
                  <span>Cancellation/prepayment</span>
                </div>
                <span>Cancellation and prepayment policies vary according to accommodation type.</span>
              </div>
              <div className='row'>
                <div className='row-content'>
                  <span className='ph-icon'>
                    <svg class="bk-icon -streamline-family" height="20" width="20" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M21.75 5.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zm-6.182 15.093l.188 1.5A.75.75 0 0 0 18 22.5h3a.75.75 0 0 0 .744-.657l.75-6-.744.657h1.5a.75.75 0 0 0 .75-.75V13.5a4.5 4.5 0 0 0-7.2-3.6.75.75 0 1 0 .9 1.2 3 3 0 0 1 4.8 2.4v2.25l.75-.75h-1.5a.75.75 0 0 0-.744.657l-.75 6L21 21h-3l.744.657-.188-1.5a.75.75 0 0 0-1.488.186zM6.75 5.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zM5.444 20.157l-.188 1.5L6 21H3l.744.657-.75-6A.75.75 0 0 0 2.25 15H.75l.75.75V13.5a3 3 0 0 1 4.8-2.4.75.75 0 1 0 .9-1.2A4.5 4.5 0 0 0 0 13.5v2.25c0 .414.336.75.75.75h1.5l-.744-.657.75 6A.75.75 0 0 0 3 22.5h3a.75.75 0 0 0 .744-.657l.188-1.5a.75.75 0 0 0-1.488-.186zM13.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM15 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-3 3a4.5 4.5 0 0 0-4.5 4.5v.75c0 .414.336.75.75.75h1.5l-.74-.627.75 4.5a.75.75 0 0 0 .74.627H12a.75.75 0 0 0 0-1.5h-1.5l.74.627-.75-4.5a.75.75 0 0 0-.74-.627h-1.5l.75.75v-.75a3 3 0 0 1 3-3 .75.75 0 0 0 0-1.5zm0 1.5a3 3 0 0 1 3 3v.75l.75-.75h-1.5a.75.75 0 0 0-.74.627l-.75 4.5.74-.627H12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 .74-.627l.75-4.5-.74.627h1.5a.75.75 0 0 0 .75-.75v-.75A4.5 4.5 0 0 0 12 12a.75.75 0 0 0 0 1.5z"></path></svg>
                  </span>
                  <span>Children</span>
                </div>
                <span>Children of 0 - 12 age are welcome.</span>
              </div>
              <div className='row'>
                <div className='row-content'>
                  <span className='ph-icon'>
                    <svg class="bk-icon -streamline-person" height="20" width="20" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M14.25 3.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zM18 13.5a6 6 0 0 0-12 0v2.25c0 .414.336.75.75.75H9l-.746-.675.75 7.5A.75.75 0 0 0 9.75 24h4.5a.75.75 0 0 0 .746-.675l.75-7.5L15 16.5h2.25a.75.75 0 0 0 .75-.75V13.5zm-1.5 0v2.25l.75-.75H15a.75.75 0 0 0-.746.675l-.75 7.5.746-.675h-4.5l.746.675-.75-7.5A.75.75 0 0 0 9 15H6.75l.75.75V13.5a4.5 4.5 0 1 1 9 0z"></path></svg>
                  </span>
                  <span>No age restriction</span>
                </div>
                <span>There is no age requirement for check-in.</span>
              </div>
              <div className='row'>
                <div className='row-content'>
                  <span className='ph-icon'>
                    <svg class="bk-icon -streamline-pawprint" height="20" width="20" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M16.01 15a4.5 4.5 0 1 0-9 0l.75-.75a3.75 3.75 0 1 0 0 7.5 4.96 4.96 0 0 0 2.245-.59 3.277 3.277 0 0 1 3.018.005c.677.365 1.44.567 2.22.585a3.75 3.75 0 1 0 .018-7.5l.749.75zm-1.5 0c0 .414.336.75.75.75a2.25 2.25 0 0 1 0 4.5 3.435 3.435 0 0 1-1.536-.41 4.786 4.786 0 0 0-4.42-.005 3.457 3.457 0 0 1-1.562.415A2.247 2.247 0 0 1 5.51 18a2.25 2.25 0 0 1 2.25-2.25.75.75 0 0 0 .75-.75 3 3 0 1 1 6 0zm-9.75-3.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3-6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3.75 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0z"></path></svg>
                  </span>
                  <span>Pets</span>
                </div>
                <span>Pets are not allowed.</span>
              </div>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  )
}

export default Hotel;
