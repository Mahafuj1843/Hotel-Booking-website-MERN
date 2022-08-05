import React from 'react'
import './popularP.css'

const popularP = () => {
  return (
    <div className="popularP">
        <div className="popularPItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1" alt="" className="popularPImg" />
            <span className='pName'>Hilton Garden Inn</span>
            <span className='pCity'>Berlin</span>
            <span className='pPrice'>Starting from BDT 3000</span>
            <div className="rating">
                <button className='btnRating'>8.5</button>
                <span>Superb</span>
                <small>. 70 review</small>
            </div>
        </div>
        <div className="popularPItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1" alt="" className="popularPImg" />
            <span className='pName'>Comfort Suites Airport</span>
            <span className='pCity'>Austin</span>
            <span className='pPrice'>Starting from BDT 3000</span>
            <div className="rating">
                <button className='btnRating'>8.5</button>
                <span>Superb</span>
                <small>. 70 review</small>
            </div>
        </div>
        <div className="popularPItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1" alt="" className="popularPImg" />
            <span className='pName'>Four Seasons Hotel</span>
            <span className='pCity'>Lisbon</span>
            <span className='pPrice'>Starting from BDT 3000</span>
            <div className="rating">
                <button className='btnRating'>8.5</button>
                <span>Superb</span>
                <small>. 70 review</small>
            </div>
        </div>
        <div className="popularPItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" className="popularPImg" />
            <span className='pName'>Aparthotel Stare Miasto</span>
            <span className='pCity'>Madrid</span>
            <span className='pPrice'>Starting from BDT 3000</span>
            <div className="rating">
                <button className='btnRating'>8.5</button>
                <span>Superb</span>
                <small>. 70 review</small>
            </div>
        </div>
    </div>
  )
}

export default popularP