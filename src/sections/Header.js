import React from 'react'
import './Header.css'
import '../App.css'
import { SocialIcon } from 'react-social-icons';
import ParticleBackground from '../components/ParticleBackground';

function Header() {
    return (
        <div className='header-container'>
            <div className='particles'><ParticleBackground/></div>
            <div className='header-text'><HeaderText/></div>
        </div>
    )
}

function HeaderText(){
    return(
                <div className='header-info'>
                    <h1 className='name-text'>Christian James Dumadag</h1>
                    <p1 className='description'>Carefully arranging tiny lights on your screen to make simple, usable, and visually appealing websites. <br>
                                            </br> Staten Island, New York</p1>
                    <div className = 'header-btns'>
                        <SocialIcon url="https://www.linkedin.com/in/christian-dumadag-ab451a163/" style={{ height: 70, width: 70 }}/>
                        <SocialIcon url="https://github.com/CJeezy" style={{ height: 70, width: 70 }}/>
                    </div>
                </div>
                    
                

    )
}

export default Header
