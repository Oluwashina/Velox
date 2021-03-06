import React, {useState} from 'react';
import Logo from '../../assets/images/logo.svg'
import HeroHand from '../../assets/images/hero-hand.png'
import AppleStore from '../../assets/images/applePlayStore.svg'
import GoogleStore from '../../assets/images/googlePlayStore.svg'
import {Link} from 'react-router-dom'

const Hero = () => {
    const [navShow, setnavShow] = useState(false);

    const handleToggle = () =>{
        setnavShow(navShow ? false : true);
        switch(navShow){
            case false:
                document.body.classList.add('body-hidden');
            break;
            case true:
                document.body.classList.remove('body-hidden');
                break;
            default:
                break;
        }
    }

    return ( 
        <>
        <div className="hero-section">
            <div className="container">

                <div className="header py-4">
                     <Link to="/" className="logo">
                        <img src={Logo} alt="logo" className="img-fluid" />
                    </Link>
                    <nav className={ navShow ? "open" : "" }>
                        <ul className="mainNav">
                            <li className="navLink">
                                <a target="_blank"  rel="noreferrer" href="https://online.myvelox.io/auth/login" style={{fontWeight: 'bold'}}>
                                Log In
                                </a>
                            </li>
                            <li className="headerbtn">
                              <a target="_blank"  rel="noreferrer" className="btn btn-verox" href="https://online.myvelox.io/auth/sign-up">
                                Get started
                                </a>
                            </li>
                        </ul>
                    </nav>

                     {/* navicon - hamburger */}
                     <div className="navicon"  onClick={handleToggle}>
                        <div className={ navShow ? "nav-toggle active" : "nav-toggle" }>
                            <span>
                            </span>
                        </div>
                    </div>

                </div>

                <div className="row mt-4">
                    <div className="col-lg-6">
                        <div className="hero-head">
                            <h1
                                style={{
                                    color: "#071827",
                                    fontWeight: 900,
                                    lineHeight: "52px",
                                    fontFamily: 'MarkProHeavy'
                                }}
                            >Access to Quick<br />
                                Loan just got easy</h1>  
                            <p className="mt-4"
                            style={{
                                color: '#071827',
                                lineHeight: '30px',
                                fontSize: 15
                            }}>
                            Access up to NGN5,000,000 instantly with Velox Nano,
                            <span className="hero-break"> Public Sector and Private sector loan product.</span>
                            </p>

                             {/* link to download - appstore and playstore */}
                            <div className="mt-5 mb-5 mb-lg-0" style={{ display: "flex" }}>
                                <a href="https://google.com">
                                    <img alt="googleplaystore" src={GoogleStore} className="img-fluid" />
                                </a>
                                <a href="https://google.com">
                                    <img
                                    alt="applestore"
                                    src={AppleStore}
                                    className="img-fluid ml-3"
                                    />
                                </a>
                            </div>
                        </div>

                        
                    </div>
                    <div className="col-lg-6 d-none d-md-none d-lg-block">
                        <div>
                            <img src={HeroHand} className="img-fluid" alt="hero-hand" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
     );
}
 
export default Hero;