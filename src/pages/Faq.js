import React from 'react';
import Navbar from '../components/Home/Navbar';
import Footer from '../components/Home/Footer'
import FaqItem from '../components/FAQ/FaqItem';
import {FAQS} from '../components/FAQ/faqData'

const FAQ = () => {

    return ( 
        <>
        <Navbar />
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
 
export default FAQ;