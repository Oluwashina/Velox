import React from 'react';
import Line from '../../assets/images/line.svg'
import Private from '../../assets/images/Private Sector.png'
import Student from '../../assets/images/Student.png'
import Public from '../../assets/images/Public.png'
import purpleArrow from '../../assets/images/purple-arrow.svg'
import yellowArrow from '../../assets/images/yellow-arrow.svg'
import greenArrow from '../../assets/images/green-arrow.svg'

const AboutSection = () => {
    return ( 
        <>
         <section className="about-section">
                <div className="container">
                    <div className="text-center mt-lg-4 mt-0">
                          <h2 style={{fontWeight: 'bold'}}>Financial freedom for <span className="about-span">
                              Everyone
                              <img src={Line} className="img-fluid" alt="line" />
                              </span>
                            </h2>
                          <div className="mt-lg-3 mt-4">
                              <p style={{color: '#718596',}}>We are for everyone, with our suits of Nano and loans that suit everybody</p>
                          </div>
                    </div> 
                    
                    <div className="row mt-5">
                        {/* 1st */}
                        <div className="col-lg-4 mb-lg-0 mb-4">

                            <div className="about-card">
                                 <div className="">
                                        <div>
                                            <img src={Private} className="img-fluid" alt="public sector" />
                                        </div>
                                        
                                    </div>

                                    <div className="mt-4">
                                        <h5 style={{fontWeight: 'bold'}}>Private Sector</h5>
                                    </div>

                                    <div>
                                        <p style={{lineHeight: '28px', fontSize: 15}}>
                                        Are you a salary earner with good credit history? Please click the link below for quick access to a loan up to <span style={{color: '#9B51E0', fontWeight: 600}}>NGN5,000,000</span> 
                                        </p>
                                    </div>

                                    <div className="about-links">
                                        <div className="private">
                                            {/* <h6 className="private">GET STARTED</h6> */}
                                            <a target="_blank"  rel="noreferrer" className="private" href="https://velox-online.banklingo.app/auth/sign-up">
                                                GET STARTED
                                                <img alt="" src={purpleArrow} className="img-fluid ml-2" />
                                            </a>
                                        </div>
                                    </div>
                            </div>
                                
                        </div>

                        {/* 2nd */}
                        <div className="col-lg-4 mb-lg-0 mb-4">

                            <div className="about-card">
                                    <div className="">
                                         <div>
                                            <img src={Public} className="img-fluid" alt="public sector" />
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <h5 style={{fontWeight: 'bold'}}>Public Sector</h5>
                                    </div>

                                    <div>
                                        <p style={{lineHeight: '28px', fontSize: 15}}>
                                        Do you work for Federal or State civil service? Do you have IPPIS number or Oracle number? Please click on the loan below to access up to  <span style={{color: '#E1A900', fontWeight: 600}}>NGN5,000,000</span> in five minutes.  
                                        </p>
                                    </div>

                                    <div className="about-links">

                                        <div className="public">
                                          <a target="_blank"  rel="noreferrer" className="public" href="https://velox-online.banklingo.app/auth/sign-up">
                                                GET STARTED
                                                <img alt="" src={yellowArrow} className="img-fluid ml-2" />
                                            </a>
                                        </div>

                                    </div>
                            </div>
                                
                            </div>

                            {/* 3rd */}
                            <div className="col-lg-4">

                                 <div className="about-card">
                                <div className="">
                                        <div>
                                            <img src={Student} className="img-fluid" alt="public sector" />
                                        </div>
                                </div>

                                <div className="mt-4">
                                    <h5 style={{fontWeight: 'bold'}}>Students and Unemployed</h5>
                                </div>

                                <div>
                                    <p style={{lineHeight: '28px', fontSize: 15}}>
                                    Are you a student, artisan or currently unemployed? Please click the link below for quick access to a loan up to <span style={{color: '#339359', fontWeight: 600}}>NGN5,000,000</span>
                                    </p>
                                </div>

                                <div className="about-links">

                                    <div className="student">
                                        <a target="_blank"  rel="noreferrer" className="student" href="https://velox-online.banklingo.app/auth/sign-up">
                                                GET STARTED
                                                <img alt="" src={greenArrow} className="img-fluid ml-2" />
                                            </a>
                                    </div>

                                </div>
                        </div>
                            
                        </div>
                   </div>

                </div>
         </section>

        </>
     );
}
 
export default AboutSection;