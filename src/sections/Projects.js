import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions} from 'react-mdl';
import 'react-mdl/extra/material.css'
import 'react-mdl/extra/material.js'
import './Projects.css'
import { SocialIcon } from 'react-social-icons';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    //REACT---------------REACT---------------REACT//
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={3} style={{minWidth: 'auto', margin: 'auto', position: 'relative'}}>
            <CardTitle className='card-title'>Personal Website Portfolio</CardTitle>
            <CardText className='card-text'>
              This website you are reading this card on! Made with the React.JS library and CSS
            </CardText>
            <CardActions border>   
              <SocialIcon url="https://github.com/CJeezy/webportfolio"/> 
            </CardActions>
          </Card>
        </div>
      )
    } 

    //EMBER---------------EMBER---------------EMBER//
    else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={3} style={{minWidth: '450', margin: 'auto', position: 'relative'}}>
            <CardTitle className='card-title'>ExpenSplit</CardTitle>
            <CardText className='card-text'>
              A lightweight version of a splitwise calculator that splits up the bills/expenses of a group of people and displays what is owed to whom.
            </CardText>
            <CardActions border>
            <SocialIcon url="https://github.com/CJeezy/cost-breakdown-app"/> 
            </CardActions>
          </Card>

          <Card shadow={3} style={{minWidth: '450', margin: 'auto', position: 'relative'}}>
            <CardTitle className='card-title'>Parks-And-Recreation</CardTitle>
            <CardText className='card-text'>
              A website that displayed the nearby parks and lodging of a desired location. Using Google's API it would then show a images and directions to the park, as well as weather and ammenities.
            </CardText>
            <CardActions border>
            <p style={{textAlign: 'center'}}>Privated GitHub repositiory</p>
            </CardActions>
          </Card>
        </div>
      ) 
    }

    //C#, C++---------------C#, C++---------------C#, C++// 
    else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={3} style={{minWidth: '450', margin: 'auto', position: 'relative'}}>
            <CardTitle className='card-title'>Library Management System</CardTitle>
            <CardText className='card-text'>
              A library management system intended to be implmented inside a dedicated library database. Uses C# and ASP.NET framework, with libraries from Bootstrap and Datatables
            </CardText>
            <CardActions border>
            <SocialIcon url="https://github.com/CJeezy/LibraryManagement"/> 
            </CardActions>
          </Card>

          <Card shadow={3} style={{minWidth: '450', margin: 'auto', position: 'relative'}}>
            <CardTitle className='card-title'>Unity Horror/Suspense Game</CardTitle>
            <CardText className='card-text'>
              A game made with the Unity editor and C# scripts that have the player navigate a dark maze while being chased by enemies. GitHub does not allow for the entire project to be uploaded
            </CardText>
            <CardActions border>
            <SocialIcon url="https://github.com/CJeezy/csc427-finalproject"/> 
            </CardActions>
          </Card>
        </div>
      )
    } 
    
    //JAVA---------------JAVA---------------JAVA//
    else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={3} style={{minWidth: '450', margin: 'auto', position: 'relative'}}>
            <CardTitle className='card-title'>Jeopardy Board Game</CardTitle>
            <CardText className='card-text'>
              A jeopardy board game built on Java JSwing library
            </CardText>
            <CardActions border>
            <SocialIcon url="https://github.com/CJeezy/jeopardygame"/> 
            </CardActions>
          </Card>
        </div>
      ) 
    }

    //PYTHON---------------PYTHON---------------PYTHON//
    else if(this.state.activeTab === 4) {
      return (
        <div><h1>Discord Bot in progress!</h1></div>
      )
    }


  //END OF CARDS//
  }



  render() {
    return(
      <div className = 'project-container' id = 'projects'>
          <hr class="solid"></hr>
          <h1 className = 'project-title'> Projects</h1>
          <p1>Here are some of my works! Be sure to check out my GitHub for more!</p1>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Ember/Glimmer</Tab>
          <Tab>C++ / C#</Tab>
          <Tab>Java</Tab>
          <Tab>Python</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;