import React from 'react';
import Phone from '../../assets/images/phone2.svg'
import applePlayStore from '../../assets/images/appleStore-blue.svg'
import googlePlayStore from '../../assets/images/googleStore-blue.svg'

const Download = () => {
    return ( 
        <>
        <section className="download-section">
            <div className="container">

                <div className="download-div">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="text-lg-left text-center">
                                        <img src={Phone} className="img-fluid" alt="phone" />
                                 </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="mt-5">
                                    <h3 className="text-lg-left text-center" style={{color: '#4D3B91', fontWeight: 900}}>Access your loans now</h3>
                                </div>

                                 {/* link to download - appstore and playstore */}
                                <div className="mt-4 download-icon">
                                    <a href="https://google.com" className="text-lg-left text-center mb-3 mb-lg-0">
                                        <img alt="googleplaystore" src={googlePlayStore} className="img-fluid" />
                                    </a>
                                    <a href="https://google.com" className="text-lg-left text-center">
                                        <img
                                        alt="applestore"
                                        src={applePlayStore}
                                        className="img-fluid ml-0 ml-lg-3"
                                        />
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
 
export default Download;