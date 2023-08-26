<<<<<<< HEAD
import React from 'react'
import './Voting.css'
const Voting = () => {
    return (
        <section className='sec-1'>
            <div className='div-1'>
                <div className='div-1a' >
                    <input type="text" className='srch' placeholder="Search for breeds by name" aria-label="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="3.75rem" viewBox="0 0 2rem 3.75rem" fill="none" transform='translate(-10,10)'>

                        <g id="search" clip-path="url(#clip0_1_53)">
                            <rect width="100%" height="60%" rx="20%" fill="#FBE0DC" />
                            <path id="Vector" d="M19.3608 18.2168L14.6007 13.2662C15.8246 11.8113 16.4952 9.98069 16.4952 8.07499C16.4952 3.62251 12.8727 0 8.42021 0C3.96773 0 0.345215 3.62251 0.345215 8.07499C0.345215 12.5275 3.96773 16.15 8.42021 16.15C10.0917 16.15 11.6846 15.6458 13.0465 14.6888L17.8427 19.677C18.0431 19.8852 18.3128 20 18.6017 20C18.8752 20 19.1347 19.8957 19.3316 19.7061C19.7501 19.3034 19.7635 18.6357 19.3608 18.2168ZM8.42021 2.10652C11.7113 2.10652 14.3887 4.78391 14.3887 8.07499C14.3887 11.3661 11.7113 14.0435 8.42021 14.0435C5.12912 14.0435 2.45173 11.3661 2.45173 8.07499C2.45173 4.78391 5.12912 2.10652 8.42021 2.10652Z" fill="#FF868E" transform='translate(8,10)' />
                        </g>
                    </svg>

                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" style={{ marginRight: "9px" }} fill="none">
                    <g id="Group 66">
                        <rect id="Rectangle 28" width="60" height="60" rx="20" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z" fill="#FF868E" transform="translate(14, 14)" />

                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none" style={{ marginRight: "9px" }} >
                    <g id="Group 67">
                        <rect id="Rectangle 28" width="60" height="60" rx="20" fill="white" />
                        <path id="Vector 348 (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M23.0711 19C19.7181 19 17 21.7181 17 25.0711C17 26.6812 17.6396 28.2254 18.7782 29.364L30 40.5858L41.2218 29.364C42.3604 28.2254 43 26.6812 43 25.0711C43 21.7181 40.2819 19 36.9289 19C35.3188 19 33.7746 19.6396 32.636 20.7782L30.7071 22.7071C30.3166 23.0976 29.6834 23.0976 29.2929 22.7071L27.364 20.7782C26.2254 19.6396 24.6812 19 23.0711 19ZM15 25.0711C15 20.6135 18.6135 17 23.0711 17C25.2116 17 27.2646 17.8503 28.7782 19.364L30 20.5858L31.2218 19.364C32.7354 17.8503 34.7884 17 36.9289 17C41.3865 17 45 20.6135 45 25.0711C45 27.2116 44.1497 29.2646 42.636 30.7782L30.7071 42.7071C30.3166 43.0976 29.6834 43.0976 29.2929 42.7071L17.364 30.7782C15.8503 29.2646 15 27.2116 15 25.0711Z" fill="#FF868E" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <g id="Group 68">
                        <rect id="Rectangle 27" width="60" height="60" rx="20" fill="white" />
                        <path id="Vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M15 30C15 21.7157 21.7157 15 30 15C38.2843 15 45 21.7157 45 30C45 38.2843 38.2843 45 30 45C21.7157 45 15 38.2843 15 30ZM30 17C22.8203 17 17 22.8203 17 30C17 37.1797 22.8203 43 30 43C37.1797 43 43 37.1797 43 30C43 22.8203 37.1797 17 30 17ZM25 27H23V25H25V27ZM37 27H35V25H37V27ZM22.6 35.2L23.2 34.4C26.6 29.8667 33.4 29.8667 36.8 34.4L37.4 35.2L35.8 36.4L35.2 35.6C32.6 32.1333 27.4 32.1333 24.8 35.6L24.2 36.4L22.6 35.2Z" fill="#FF868E" />
                    </g>
                </svg>
            </div>

            <div className='div-2'>
                <div className='div-2a'>
                    <div style={{ width: "40px", height: "40px", borderRadius: "10px", backgroundColor: "#FBE0DC", marginRight: "5px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clip-path="url(#clip0_1_85)">
                                <path d="M4.70999 10.9901L13.3097 19.5896C13.8567 20.1369 14.7437 20.1369 15.2905 19.5896C15.8373 19.0427 15.8373 18.1558 15.2905 17.6091L7.68104 9.99988L15.2902 2.39096C15.8371 1.84391 15.8371 0.957107 15.2902 0.410284C14.7434 -0.136761 13.8565 -0.136761 13.3095 0.410284L4.70977 9.00985C4.43635 9.28339 4.2998 9.64153 4.2998 9.99983C4.2998 10.3583 4.43662 10.7167 4.70999 10.9901Z" fill="#FF868E" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_85">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div style={{ width: "146px", height: "40px", borderRadius: "10px", backgroundColor: "#FF868E" }}>
                        <p className='text-white' style={{ fontSize: "1.5rem" }}>Voting </p>
                    </div>

                </div>
                <div className='div-2b' style={{ width: "640px", height: "360px", backgroundImage: `url(${require("./img/image1.png")})` }}>
                    <div className='div-2c'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="256" height="88" viewBox="0 0 256 88" fill="none">
                            <g id="Group 30">
                                <g id="Group 29">
                                    <rect id="Rectangle 37" x="2" y="2" width="252" height="84" rx="22" fill="white" stroke="white" stroke-width="4" />
                                </g>
                                <rect id="Rectangle 34" x="88" y="4" width="80" height="80" fill="#FF868E" />
                                <path id="Rectangle 35" d="M172 4H232C243.046 4 252 12.9543 252 24V64C252 75.0457 243.046 84 232 84H172V4Z" fill="#FFD280" />
                                <path id="Vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M197 44C197 35.7157 203.716 29 212 29C220.284 29 227 35.7157 227 44C227 52.2843 220.284 59 212 59C203.716 59 197 52.2843 197 44ZM212 31C204.82 31 199 36.8203 199 44C199 51.1797 204.82 57 212 57C219.18 57 225 51.1797 225 44C225 36.8203 219.18 31 212 31ZM207 41H205V39H207V41ZM219 41H217V39H219V41ZM204.6 49.2L205.2 48.4C208.6 43.8667 215.4 43.8667 218.8 48.4L219.4 49.2L217.8 50.4L217.2 49.6C214.6 46.1333 209.4 46.1333 206.8 49.6L206.2 50.4L204.6 49.2Z" fill="white" />
                                <path id="Rectangle 36" d="M4 24C4 12.9543 12.9543 4 24 4H84V84H24C12.9543 84 4 75.0457 4 64V24Z" fill="#97EAB9" />
                                <path id="Vector (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd" d="M29 44C29 35.7157 35.7157 29 44 29C52.2843 29 59 35.7157 59 44C59 52.2843 52.2843 59 44 59C35.7157 59 29 52.2843 29 44ZM44 31C36.8203 31 31 36.8203 31 44C31 51.1797 36.8203 57 44 57C51.1797 57 57 51.1797 57 44C57 36.8203 51.1797 31 44 31ZM39 41H37V39H39V41ZM51 41H49V39H51V41ZM38.2 45.6L38.8 46.4C41.4 49.8667 46.6 49.8667 49.2 46.4L49.8 45.6L51.4 46.8L50.8 47.6C47.4 52.1333 40.6 52.1333 37.2 47.6L36.6 46.8L38.2 45.6Z" fill="white" />
                                <path id="Vector 348 (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M121.071 33C117.718 33 115 35.7181 115 39.0711C115 40.6812 115.64 42.2254 116.778 43.364L128 54.5858L139.222 43.364C140.36 42.2254 141 40.6812 141 39.0711C141 35.7181 138.282 33 134.929 33C133.319 33 131.775 33.6396 130.636 34.7782L128.707 36.7071C128.317 37.0976 127.683 37.0976 127.293 36.7071L125.364 34.7782C124.225 33.6396 122.681 33 121.071 33ZM113 39.0711C113 34.6135 116.614 31 121.071 31C123.212 31 125.265 31.8503 126.778 33.364L128 34.5858L129.222 33.364C130.735 31.8503 132.788 31 134.929 31C139.386 31 143 34.6135 143 39.0711C143 41.2116 142.15 43.2646 140.636 44.7782L128.707 56.7071C128.317 57.0976 127.683 57.0976 127.293 56.7071L115.364 44.7782C113.85 43.2646 113 41.2116 113 39.0711Z" fill="white" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className='div-3'>
                    <div className='div-31'>
                        <div className='time'>22:35</div>
                        <div className='img-con'>Image ID: <b style={{ color: "#1D1D1D" }}> fQSunHvl8 </b> was added to Favourites </div>
                    </div>
                    <div className='div-31'>
                        <div className='time'>22:35</div>
                        <div className='img-con'>Image ID: <b style={{ color: "#1D1D1D" }}> HJd0XecNX </b> was added to Likes </div>

                    </div>
                    <div className='div-31'>
                        <div className='time'>22:35</div>
                        <div className='img-con'>Image ID: <b style={{ color: "#1D1D1D" }}> BbMFS3bU- </b> was added to Dislikes </div>
                    </div>
                    <div className='div-31'>
                        <div className='time'>22:35</div>
                        <div className='img-con'>Image ID: <b style={{ color: "#1D1D1D" }}> fQSunHvl8 </b> was removed from Favourites </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Voting
=======

>>>>>>> e05e1b37087c5b69fe7d907dec1a6a45adf39ac2
