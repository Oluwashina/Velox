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

                    <div className="row mt-3">
                        <div className="col-lg-7">

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