import React from 'react'
import './Header.css'
import '../App.css'
import { SocialIcon } from 'react-social-icons';

function Header() {
    return (
        <div className='header-container'>
            <img alt='profile pic' src={require('../images/profile.jpg')}></img>
            <h1 className='name-text'>Christian James Dumadag</h1>
            <p1 className='description'>Carefully arranging tiny lights on your screen to make simple, usable, and visually appealing websites. <br>
                                        </br> Staten Island, New York</p1>
            <div className = 'header-btns'>
                <SocialIcon url="https://www.linkedin.com/in/christian-dumadag-ab451a163/" />
                <SocialIcon url="https://github.com/CJeezy"/>
            </div>

              
        </div>
    )
}

export default Header
