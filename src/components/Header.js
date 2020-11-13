import React from 'react'
import {Button} from './Button'
import './Header.css'
import '../App.css'


function Header() {
    return (
        <div className='header-container'>
            <img alt='profile pic' src={require('../images/profile.jpg')}></img>
            <h1>Christian James Dumadag</h1>
            <p1>Full Stack Software Engineer</p1>
            <div className = 'header-btns'>
                <Button className='btns'buttonStyle='btn-primary'buttonSize='btn-large'>
                    CONTACT
                </Button>
            </div>
        </div>
    )
}

export default Header
