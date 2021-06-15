import React from 'react';
import Line from '../../assets/images/line.svg'

const AboutSection = () => {
    return ( 
        <>
         <section className="about-section">
                <div className="container">
                    <div className="text-center mt-4">
                          <h2 style={{fontWeight: 'bold'}}>Financial freedom for <span className="about-span">
                              Everyone
                              <img src={Line} className="img-fluid" alt="line" />
                              </span>
                            </h2>
                          <div>
                              <p style={{color: '#718596'}}>We are for everyone, with our suits of Nano and loans that suit everybody</p>
                          </div>
                    </div> 
                    
                    <div className="row mt-5">
                        {/* 1st */}
                        <div className="col-lg-4">

                            <div className="about-card">
                                    <div className="about-img">

                                    </div>

                                    <div className="mt-4">
                                        <h5 style={{fontWeight: 'bold'}}>Private Sector</h5>
                                    </div>

                                    <div>
                                        <p style={{lineHeight: '30px'}}>
                                        Are you a salary earner with good credit history? Please click the link below for quick access to a loan up to <span style={{color: '#B6A5FC', fontWeight: 600}}>NGN5,000,000</span> 
                                        </p>
                                    </div>
                            </div>
                                
                        </div>

                        {/* 2nd */}
                        <div className="col-lg-4">

                            <div className="about-card">
                                    <div className="about-img">

                                    </div>

                                    <div className="mt-4">
                                        <h5 style={{fontWeight: 'bold'}}>Public Sector</h5>
                                    </div>

                                    <div>
                                        <p style={{lineHeight: '30px'}}>
                                        Do you work for Federal or State civil service? Do you have IPPIS number or Oracle number? Please click on the loan below to access up to NGN5,000,000 in five minutes.  
                                        </p>
                                    </div>
                            </div>
                                
                            </div>

                            {/* 3rd */}
                            <div className="col-lg-4">

                                 <div className="about-card">
                                <div className="about-img">

                                </div>

                                <div className="mt-4">
                                    <h5 style={{fontWeight: 'bold'}}>Students and Unemployed</h5>
                                </div>

                                <div>
                                    <p style={{lineHeight: '30px'}}>
                                    Are you a student, artisan or currently unemployed? Please click the link below for quick access to a loan up to NGN5,000,000
                                    </p>
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