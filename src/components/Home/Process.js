import React from 'react';
import Line from '../../assets/images/line2.svg'
import Phone from '../../assets/images/phone.svg'

const Process = () => {
    return ( 
        <>
        <section className="process-section">
                <div className="container">
                    <div className="process-head">
                        <h2>Quick loans in 5 mins</h2>
                        <img src={Line} className="img-fluid" alt="line" />
                    </div>

                    <div className="row" style={{alignItems: 'center'}}>
                        <div className="col-lg-7 mt-5 mt-lg-4">

                            {/* steps layout */}
                            <div className="step-head">
                                <div className="steps" style={{display: 'flex',}}>
                                    <div>
                                        <h3 className="steps-line" style={{color: '#fff', fontWeight: 'bold'}}>01</h3>
                                    </div>
                                    <div className="ml-5">
                                        <h5 style={{color: '#fff', fontWeight: 'bold'}}>Login or Create Account</h5>
                                        <p style={{color: 'rgba(255, 255, 255, 0.6)'}}>Create account in few minutes by providing necessary<br /> information.</p>
                                    </div>
                                </div>

                                <div className="steps mt-4 mt-lg-5" style={{display: 'flex',}}>
                                    <div>
                                        <h3 className="steps-line" style={{color: '#fff', fontWeight: 'bold'}}>02</h3>
                                    </div>
                                    <div className="ml-5">
                                        <h5 style={{color: '#fff', fontWeight: 'bold'}}>Select Preferred Loan Amount </h5>
                                        <p style={{color: 'rgba(255, 255, 255, 0.6)'}}>Choose preferred loan amount and Tenure</p>
                                    </div>
                                </div>

                                <div className="steps mt-4 mt-lg-5" style={{display: 'flex',}}>
                                    <div>
                                        <h3 className="steps-line" style={{color: '#fff', fontWeight: 'bold'}}>03</h3>
                                    </div>
                                    <div className="ml-5">
                                        <h5 style={{color: '#fff', fontWeight: 'bold'}}>Select installment plan </h5>
                                        <p style={{color: 'rgba(255, 255, 255, 0.6)'}}>Select preferred instalment plan</p>
                                    </div>
                                </div>

                                <div className="steps mt-5 mt-lg-5" style={{display: 'flex',}}>
                                    <div>
                                        <h3 style={{color: '#fff', fontWeight: 'bold'}}>04</h3>
                                    </div>
                                    <div className="ml-5">
                                        <h5 style={{color: '#fff', fontWeight: 'bold'}}>Start instalment payment</h5>
                                        <p style={{color: 'rgba(255, 255, 255, 0.6)'}}>Repay loan from preferred repayment method</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-5">
                            <div>
                                <img src={Phone} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>

                </div>
        </section>

        </>
     );
}
 
export default Process;