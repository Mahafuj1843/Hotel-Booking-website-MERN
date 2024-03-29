import React from 'react'
import './home.css'
import Featured from '../../components/featured/Featured';
import Header from '../../components/header/Header';
import Navber from '../../components/navber/Navber';
import Property from '../../components/property/Property';
import PopularP from '../../components/popularProperty/PopularP';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';


export const Home = () => {
  return (
    <div>
      <Navber/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className='homeTitle'>Browse by property type</h1>
        <Property/>
        <h1 className='homeTitle'>Homes guests love</h1>
        <PopularP/>
      </div>
      <MailList/>
      <Footer/>
    </div>
  )
}

export default Home;