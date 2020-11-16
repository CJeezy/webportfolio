<<<<<<< HEAD
import React, { Component } from "react"
import './About.css'
import '../App.css'
import {Button} from '../components/Button'


class About extends Component{
    state = {};
    render(){
        return (
            <div className = 'about-container' id = 'about'>
                <h1 className='about-title'>About Me</h1>
                <p1 className='about-description'>My name is Christian, I am a 22 year old college student that intends on becoming a full-stack engineer. <br></br>
                  I am currently working on my Bachelor of Science degree in Computer Science at the College of Staten Island. <br></br>
                  When I am not at my computer, I enjoy playing volleyball, socializing with friends, and finding new places to eat!</p1>
    
                <h1 className = 'contact-title'>Contact Info</h1>
                <p1 className='contact-description'> 
                  Phone Number:    619-607-1505<br></br>
                  Primary Email:    cjduma98@gmail.com<br></br>
                </p1>

                <div className = 'header-btns'>
                    <Button className='btns'buttonStyle='btn-primary'buttonSize='btn-large'>
                        RESUME
                    </Button>
                </div>

            </div>
        )
    }
}
=======
import React, { Component } from "react"
import './About.css'
import '../App.css'
import {Button} from '../components/Button'


class About extends Component{
    state = {};
    render(){
        return (
            <div className = 'about-container' id = 'about'>
                <h1 className='about-title'>About Me</h1>
                <p1 className='about-description'>My name is Christian, I am a 22 year old college student that intends on becoming a full-stack engineer. <br></br>
                  I am currently working on my Bachelor of Science degree in Computer Science at the College of Staten Island. <br></br>
                  When I am not at my computer, I enjoy playing volleyball, socializing with friends, and finding new places to eat!</p1>
    
                <h1 className = 'contact-title'>Contact Info</h1>
                <p1 className='contact-description'> 
                  Phone Number:    619-607-1505<br></br>
                  Primary Email:    cjduma98@gmail.com<br></br>
                </p1>

                <div className = 'header-btns'>
                    <Button className='btns'buttonStyle='btn-primary'buttonSize='btn-large'>
                        RESUME
                    </Button>
                </div>

            </div>
        )
    }
}
>>>>>>> 91fee263c34ac08e741f2ce5d7c78718c8ae350f
export default About;