import React,{useState} from 'react';
import Logo from '../../assets/images/logo.svg'


const Navbar = () => {
    const [navShow, setnavShow] = useState(false);

    
    const handleToggle = () =>{
        setnavShow(navShow ? false : true);
        switch(navShow){
            case false:
                document.body.classList.add('body-hidden');
            break;
            case true:
                document.body.classList.remove('body-hidden');
                break;
            default:
                break;
        }
    }

    return ( 
        <>
         <div className="container">

            <div className="header py-4">
                <div className="logo">
                    <img src={Logo} alt="logo" className="img-fluid" />
                </div>
                <nav className={ navShow ? "open" : "" }>
                    <ul className="mainNav">
                        <li className="navLink">
                            <a target="_blank"  rel="noreferrer" href="https://online.myvelox.io/auth/login" style={{fontWeight: 'bold'}}>
                            Log In
                            </a>
                        </li>
                        <li className="headerbtn">
                        <a target="_blank"  rel="noreferrer" className="btn btn-verox" href="https://online.myvelox.io/auth/sign-up">
                            Get started
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* navicon - hamburger */}
                <div className="navicon"  onClick={handleToggle}>
                    <div className={ navShow ? "nav-toggle active" : "nav-toggle" }>
                        <span>
                        </span>
                    </div>
                </div>

            </div>

         </div>

        </>
     );
}
 
export default Navbar;