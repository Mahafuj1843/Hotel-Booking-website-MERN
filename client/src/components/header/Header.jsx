import React from 'react'
import {useState} from 'react'
import './header.css'
import { faBed, faCalendar, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns'

const Header = () => {
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
        adult : 1,
        childern : 0,
        room : 1
      });

      const handleOperation = (name, operation) =>{
        setOptions((prev)=>{
            return {
                ...prev,
                [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
            };
        });
      };

    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="itemList active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="itemList">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="itemList">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="itemList">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="itemList">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Taxis</span>
                    </div>
                </div>
                <h1 className='headerTitle'>Find your next stay</h1>
                <p className='headerDec'>Search low prices on hotels, homes and much more...</p>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon className='headerIcon' icon={faBed} />
                        <input className='headerSearchInput' type="text" placeholder='Where are you going?'/>
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon className='headerIcon' icon={faCalendar} />
                        <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "dd-MM-yyyy")} to ${format(date[0].endDate, "dd-MM-yyyy")}`}</span>
                        {openDate && 
                        <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date'
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon className='headerIcon' icon={faPerson} />
                        <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult . ${options.childern} childern . ${options.room} room`}</span>                    
                        {openOptions &&
                            <div className="options">
                            <div className="optionsItem">
                                <span className="optionsItemText">Adults</span>
                                <div className="optionCounter">
                                    <button disabled={options.adult <= 1} className='optionsCounter' onClick={()=>handleOperation('adult', 'd')}>-</button>
                                    <span className='optionsItemNumber'>{options.adult}</span>
                                    <button className='optionsCounter' onClick={()=>handleOperation('adult', 'i')}>+</button>
                                </div>
                            </div>
                            <div className="optionsItem">
                                <span className="optionsItemText">Childern</span>
                                <div className="optionCounter">
                                    <button disabled={options.childern <= 0} className='optionsCounter' onClick={()=>handleOperation('childern', 'd')}>-</button>
                                    <span className='optionsItemNumber'>{options.childern}</span>
                                    <button className='optionsCounter'onClick={()=>handleOperation('childern', 'i')}>+</button>
                                </div>
                            </div>
                            <div className="optionsItem">
                                <span className="optionsItemText">Room</span>
                                <div className="optionCounter">
                                    <button disabled={options.room <= 1} className='optionsCounter' onClick={()=>handleOperation('room', 'd')}>-</button>
                                    <span className='optionsItemNumber'>{options.room}</span>
                                    <button className='optionsCounter' onClick={()=>handleOperation('room', 'i')}>+</button>
                                </div>
                            </div>
                          </div>
                        }
                    </div>
                    <div className="headerSearchItem">
                        <button className='headerBtn'>Search</button>                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header