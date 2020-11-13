import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
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
              <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                CHRISTIAN JAMES DUMADAG
                <i class='fab fa-typo3' />
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>

              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/'  className='nav-links'  onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/skills' className='nav-links' onClick={closeMobileMenu} >
                    Skills
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/porfolio' className='nav-links' onClick={closeMobileMenu}>
                    Portfolio
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
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
