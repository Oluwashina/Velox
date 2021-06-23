import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <>
        <footer>
            <div className="container">
                <div className="footer-links">
                    <div>
                        <p className="mb-0" style={{fontSize: 15}}>&copy; { new Date().getFullYear()} Spaces Inc.</p>
                    </div>
                    <div>
                        <ul className="footer-link mb-0">
                            <li>
                                <Link to="/privacy">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms">
                                    Terms and Conditions
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq">
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
 
export default Footer;