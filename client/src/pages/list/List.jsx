import React from 'react';
import {useState} from 'react';
import { useLocation } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns'
import Header from '../../components/header/Header';
import Navber from '../../components/navber/Navber';
import './list.css'
import SearchResult from '../../components/searchResult/SearchResult';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

export const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navber/>
      <Header type="list"/>
      <div className="list">
        <div className="listContainer">
          <div className="listSearch">
            <h1 className='lsText'>Search</h1>
              <div className="sItem">
                <label htmlFor="">Destination</label>
                <input type="text" className="sInput" placeholder={destination}/>
              </div>
              <div className="sItem">
                <label htmlFor="">Check-in Date</label>
                <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd-MM-yyyy")} to ${format(date[0].endDate, "dd-MM-yyyy")}`}</span>
                {openDate && 
                        <DateRange
                            // editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            // moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='dates'
                            minDate={new Date()}
                        />}
              </div>
              <div className="sItem">
                <label htmlFor="">Option</label>
                <div className="option">
                  <div className="sOption">
                    <span>Min price <small>(Per Night)</small></span><input className='sOptionI' type="text" />
                  </div>
                  <div className="sOption">
                    <span>Max price <small>(Per Night)</small></span><input className='sOptionI' type="text"/>
                  </div>
                  <div className="sOption">
                    <span>Adult</span><input className='sOptionI' type="number" min={1} placeholder={options.adult}/>
                  </div>
                  <div className="sOption">
                    <span>Children</span><input className='sOptionI' type="number" min={0} placeholder={options.childern}/>
                  </div>
                  <div className="sOption">
                    <span>Room</span><input className='sOptionI' type="number" min={1} placeholder={options.room}/>
                  </div>
                </div>
              </div>
            <button className='sBtn'>Search</button>
          </div>
          <div className="listResult">
            <SearchResult/>
            <SearchResult/>
            <SearchResult/>
            <SearchResult/>
          </div>
        </div>
      </div>
      <MailList/>
      <Footer/>
    </div>
  )
}

export default List;
