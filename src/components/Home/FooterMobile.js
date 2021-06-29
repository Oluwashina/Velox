import React from 'react';
import { Link } from 'react-router-dom';

const FooterMobile = () => {
    return ( 
        <>
        <footer>
            <div className="container">
                <div className="footer-links">
                    <div>
                        <p className="mb-0" style={{fontSize: 15}}>&copy; { new Date().getFullYear()} CORE CAPITAL LIMITED</p>
                    </div>
                    <div>
                        <ul className="footer-link mb-0">
                            <li>
                                <Link to="/privacy-mobile">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms-mobile">
                                    Terms and Conditions
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq-mobile">
                                    FAQs
                                </Link>
                            </li>
                        </ul>

                    </div>

                 </div>
            </div>
        </footer>
        </>
     );
}
 
export default FooterMobile;