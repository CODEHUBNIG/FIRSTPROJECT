import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../breeds/images/Group 18.png'
import petspaw from '../breeds/images/PetsPaw.png'
import maka1 from '../breeds/images/Mask Group.png'
import maka2 from '../breeds/images/Mask Group (1).png'
import maka3 from '../breeds/images/Mask Group (2).png'

const Home = () => {
    return (

        <div className='row' style={{ width: "100%", paddingLeft: "2rem", paddingTop: "2rem" }}>
            <div className='col' style={{ width: "50%" }}>
                <div id='mask'>
                    <Link to="/">
                        <div id='logo'>
                            <img id='paw' src={logo} />
                            <img id='pets' src={petspaw} />
                        </div>
                    </Link>


                    <div id='header'>
                        <h1 id='hi' className='mt-5'>Hi!👋</h1>
                        <p id='macpaw' className='fw-lighter'>Welcome to MacPaw Bootcamp 2023</p>

                        <p id='api' className='fw-bold mt-5'>Lets start using The Cat API</p>

                        <div id='mask-group' className=''>
                            <Link to="/voting">
                                <img src={maka1} />
                            </Link>
                            <Link to="/breeds">
                                <img src={maka2} />
                            </Link>
                            <Link to="">
                                <img src={maka3} />
                            </Link>
                        </div>

                        <div id='buttons' className='mt-3 ' >
                            <Link to="/voting">
                                <button id='btn'>VOTING</button>
                            </Link>
                            <Link to="/breeds">
                                <button id='btn'>BREEDS</button>
                            </Link>
                            <Link to="">
                                <button id='btn'>GALLERY</button>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>

            <Outlet />
        </div >


    )
}

export default Home