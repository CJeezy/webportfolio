import React from 'react'
import './Skills.css'

function Skills() {
    return (
        <div className = "skills-container" id = 'skills'>
            <h1 className = 'skills-title'>Skills</h1>
             <div className = 'row'>
                 <div className = 'column'>
                    <img alt='c++' src={require('../images/C++.png')}></img>
                 </div>
                 <div className = 'column'>
                    <img alt='csharp' src={require('../images/CSharp.png')}></img>
                 </div>
                 <div className = 'column'>
                    <img alt='java' src={require('../images/Java.png')}></img>
                 </div>
                 <div className = 'column'>
                    <img alt='python' src={require('../images/Python.png')}></img>
                 </div>
                 <div className = 'column'>
                    <img alt='unity' src={require('../images/Unity.webp')}></img>
                 </div>
            </div>
            <div className = 'row'>
                 <div className = 'column'>
                    <img alt='HTML' src={require('../images/HTML5.png')} height = '200px'></img>
                 </div>
                 <div className = 'column'>
                    <img alt='js' src={require('../images/JavaScript.png')}></img>
                 </div>
                 <div className = 'column'>
                    <img alt='CSS' src={require('../images/CSS.png')}></img>
                 </div>
                 <div className = 'column'>
                    <img alt='nodejs' src={require('../images/Nodejs.png')}></img>
                 </div>
                 <div className = 'column'>
                    <img alt='mysql' src={require('../images/MySQL.webp')}></img>
                 </div>
            </div>
        </div>
    )
}

export default Skills
