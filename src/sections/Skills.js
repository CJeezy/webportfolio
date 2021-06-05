import React from 'react'
import './Skills.css'

function Skills() {
    return (
       <div className='skills'>
          <SkillsHeader/>
          <SkillsList/>
       </div>
    )   
}

function SkillsHeader(){
   return(
      <html>
         <h1 className='skills-header' id = 'skills'>Skills</h1>
      </html>
   )
}

function SkillsList(){
   return(
      <div className='skills-container'>
         <div className='bar-grid'>
            <div>
               <img alt='html' src={require('../images/HTML5.png')}></img>
               <span class='bar'><span class='html'></span></span>
            </div>

            <div>
               <img alt='CSS' src={require('../images/CSS.png')}></img>
               <span class='bar'><span class='CSS'></span></span>
            </div>

            <div>
               <img alt='Javascript' src={require('../images/JavaScript.png')}></img>
               <span class='bar'><span class='Javascript'></span></span>
            </div>

            <div>
               <img alt='React' src={require('../images/React.png')}></img>
               <span class='bar'><span class='React'></span></span>
            </div>

            <div>
               <img alt='Ember' src={require('../images/Ember.png')}></img>
               <span class='bar'><span class='Ember'></span></span>
            </div>

            <div>
               <img alt='C' src={require('../images/C++.png')}></img>
               <span class='bar'><span class='Cplusplus'></span></span>
            </div>

            <div>
               <img alt='Csharp' src={require('../images/CSharp.png')}></img>
               <span class='bar'><span class='Csharp'></span></span>
            </div>

            <div>
               <img alt='Java' src={require('../images/Java.png')}></img>
               <span class='bar'><span class='Java'></span></span>
            </div>

            <div>
               <img alt='Python' src={require('../images/Python.png')}></img>
               <span class='bar'><span class='Python'></span></span>
            </div>

            <div>
               <img alt='unity' src={require('../images/Unity.webp')}></img>
               <span class='bar'><span class='Unity'></span></span>
            </div>

            <div>
               <img alt='MySQL' src={require('../images/MySQL.webp')}></img>
               <span class='bar'><span class='MySQL'></span></span>
            </div>

            <div>
               <img alt='Git' src={require('../images/Git.webp')}></img>
               <span class='bar'><span class='Git'></span></span>
            </div>
            
         </div>
      </div>
   )
}


export default Skills
