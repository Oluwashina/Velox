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
                                    <div>
                                        <img src={Phone} className="img-fluid" alt="phone" />
                                    </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="mt-5">
                                    <h2 style={{color: '#4D3B91', fontWeight: 800}}>Access your loans now</h2>
                                </div>

                                 {/* link to download - appstore and playstore */}
                                <div className="mt-4" style={{ display: "flex" }}>
                                    <a href="https://google.com">
                                        <img alt="googleplaystore" src={googlePlayStore} className="img-fluid" />
                                    </a>
                                    <a href="https://google.com">
                                        <img
                                        alt="applestore"
                                        src={applePlayStore}
                                        className="img-fluid ml-3"
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