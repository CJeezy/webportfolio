import React, {useState} from 'react'
//import { Link } from 'react-router-dom'
import './Navbar.css'
import { Link } from 'react-scroll'
//import { Button } from './Button'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

/*  
const [button, setButton] = useState(true);
const showButton = () => {
        if (window.innerWidth <= 960){
            setButton(false)
        }
        else(
            setButton(true)
        )
    };

    //window.addEventListener('resize', showButton);
*/
    return (
        <>

          <nav className='navbar'>
            <div className='navbar-container'>
              {/* <Link to='./sections/Header' className='navbar-logo' onClick="useEffect()">
                CHRISTIAN DUMA
              </Link> */}

              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>

              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item' onClick={closeMobileMenu}>
                    <Link 
                        activeClass = "active"
                        to = 'about'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={450}>
                        About Me
                    </Link>
                </li>
                <li className='nav-item' onClick={closeMobileMenu}>
                <Link 
                        activeClass = "active"
                        to = 'skills'
                        spy={true}
                        smooth={true}
                        offset={-75}
                        duration={450}>
                        Skills
                    </Link>
                </li>
                <li className='nav-item' onClick={closeMobileMenu}>
                <Link 
                        activeClass = "active"
                        to = 'projects'
                        spy={true}
                        smooth={true}
                        offset={-75}
                        duration={450}>
                        Projects
                    </Link>
                </li>
                <li className='nav-item' onClick={closeMobileMenu}>
                <Link 
                        activeClass = "active"
                        to = 'contact'
                        spy={true}
                        smooth={true}
                        offset={-75}
                        duration={450}>
                        Contact
                    </Link>
                </li>
              </ul>
            </div>
          </nav>

        </>
      );
}

export default Navbar
