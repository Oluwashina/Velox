import React from 'react';
import Footer from '../components/Home/FooterMobile'
import FaqItem from '../components/FAQ/FaqItem';
import {FAQS} from '../components/FAQ/faqData'

const FAQMobile = () => {

    return ( 
        <>
        <div className="container mt-4">
            <div className="terms-head">
                <h3>Frequently Asked Questions</h3>
            </div>

             {/* terms text layout */}
             <div className="faq-layout">
                 {FAQS.map(({title, content})=>(
                            <FaqItem title={title} key={title}>
                                {content()}
                            </FaqItem>
                ))}        
        
             </div>


        </div>
        <Footer />

        </>
     );
}
 
export default FAQMobile;