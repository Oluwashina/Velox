import React from 'react';
import Navbar from '../components/Home/Navbar';
import Footer from '../components/Home/Footer'

const PrivacyPage = () => {
    return ( 
        <>
        <Navbar />
        
        {/* terms head */}
        <div className="container mt-4">
            <div className="terms-head">
                <h3>Privacy Policy</h3>
            </div>
            {/* terms text layout */}
            <div className="terms-content">
                
                <div>
                    <p>As a freelancer, you’re charged a sliding fee based on your lifetime billings with each non-Enterprise client. This includes all contracts you’ve ever had with that client. Service fees are the same whether the contracts are hourly, fixed-price, or projects on Project Catalog</p>
                </div>

                <div>
                    <p>Note: If you worked with someone under two different companies, those are considered different relationships and your lifetime billings with each company will be counted separately. However, working with someone under two different teams within the same company is considered a single relationship and therefore combined in your lifetime billings.</p>
                </div>

                <div>
                    <p>The rate calculator estimates your net take-home pay after fees to assist you in bidding accordingly. We charge the client the exact billing rate you enter, but sometimes the resulting fee is a number with more than two decimal points that must be rounded to the nearest cent with each transaction.</p>
                </div>

            </div>
        </div>

        <Footer />

        </>
     );
}
 
export default PrivacyPage;