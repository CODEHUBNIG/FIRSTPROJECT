
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faArrowUpAZ, faArrowDownZA } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Breeds.css'

import searchbar from './images/search.png'
import happy from './images/Vector 348 (Stroke).png'
import love from './images/Vector (Stroke).png'
import sad from './images/Vector (Stroke) (1).png'
import catimage1 from './images/image 3.png'
import catimage2 from './images/Mask Group (3).png'
import catimage3 from './images/image 4.png'
import catimage4 from './images/image 5.png'
import catimage5 from './images/image 6.png'
import catimage6 from './images/image 7.png'
import catimage7 from './images/image 9.png'
import catimage8 from './images/image 8.png'
import catimage9 from './images/image 10.png'
import catimageblur from './images/Rectangle 56.png'





function Breeds() {
    return (


        <div className='col' style={{
            width: "50%"
        }}>
            <div id='search-box'>

                <div id='search-btn'>
                    <p><input id='search' type='search-box' placeholder='Search for breeds by name' /></p>
                    <p id='search-bg'><img src={searchbar} /></p>
                </div>

                <div id='sticker-box'>
                    <img id='stickers' src={happy} />
                    <img id='stickers' src={love} />
                    <img id='stickers' src={sad} />
                </div>
            </div>


            <div id='cat' >
                <div id='breed-search'>
                    <button id='arrow-btn'><FontAwesomeIcon icon={faChevronLeft} /></button>

                    <button id='breed-btn'>BREEDS</button>

                    <select id='breed-list' name='breeds'>
                        <option value="">All breeds</option>
                        <option value="">Abyssinian</option>
                        <option value="">Aegean</option>
                        <option value="">American Bobtail</option>
                        <option value="">American Curl</option>
                        <option value="">American Shortail</option>
                        <option value="">American Wiretail</option>
                    </select>

                    <select id='limit' name='limit'>
                        <option value="">limit:5</option>
                        <option value="">limit:10</option>
                        <option value="">limit:15</option>
                        <option value="">limit:20</option>
                    </select>
                    <button id='sort-btn'><FontAwesomeIcon icon={faArrowUpAZ} /></button>
                    <button id='sort-btn'><FontAwesomeIcon icon={faArrowDownZA} /></button>



                </div>

                <div className='cats-wrapper'>
                    <div id='cat1'>
                        <img src={catimage1} />
                    </div>
                    <div id='cat2'> <img src={catimage2} /></div>
                    <div id='cat2'> <img src={catimageblur} /><button id='cat-bt'>Abyssinian</button></div>
                    <div id='cat3'> <img src={catimage3} /></div>
                    <div id='cat4'> <img src={catimage4} /></div>
                    <div id='cat5'> <img src={catimage5} /></div>
                    <div id='cat6'> <img src={catimage6} /></div>
                    <div id='cat7'> <img src={catimage7} /></div>
                    <div id='cat8'> <img src={catimage8} /></div>
                    <div id='cat9'> <img src={catimage9} /></div>

                </div>
            </div>
        </div>

    )
}




export default Breeds

