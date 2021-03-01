import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
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

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', position: 'relative'}}>
            <CardTitle style={{color: '#000', height: 'auto'}} >Personal Website Portfolio</CardTitle>
            <CardText>
              This website you are reading this card on! Made with the React.JS library and CSS
            </CardText>
            <CardActions border>   
              <SocialIcon url="https://github.com/CJeezy/webportfolio"/> 
            </CardActions>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', position: 'relative'}}>
            <CardTitle style={{color: '#000'}}>Jeopardy Board Game</CardTitle>
            <CardText style={{textAlign: 'center'}}>
              A jeopardy board game built on Java JSwing library
            </CardText>
            <CardActions border>
            <SocialIcon url="https://github.com/CJeezy/jeopardygame"/> 
            </CardActions>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', position: 'relative'}}>
            <CardTitle style={{color: '#000'}}>Library Management System</CardTitle>
            <CardText style={{textAlign: 'center'}}>
              A library management system intended to be implmented inside a dedicated library database. Uses C# and ASP.NET framework, with libraries from Bootstrap and Datatables
            </CardText>
            <CardActions border>
            <SocialIcon url="https://github.com/CJeezy/LibraryManagement"/> 
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto', position: 'relative'}}>
            <CardTitle style={{color: '#000'}}>Unity Horror/Suspense Game</CardTitle>
            <CardText style={{textAlign: 'center'}}>
              A game made with the Unity editor and C# scripts that have the player navigate a dark maze while being chased by enemies. GitHub does not allow for the entire project to be uploaded
            </CardText>
            <CardActions border>
            <SocialIcon url="https://github.com/CJeezy/csc427-finalproject"/> 
            </CardActions>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>Discord Bot in progress!</h1></div>
      )
    }

  }



  render() {
    return(
      <div className = 'project-container' id = 'projects'>
          <hr class="solid"></hr>
          <h1 className = 'project-title'> Projects</h1>
          <p1>Here are some of my works! Be sure to check out my GitHub for more!</p1>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>JavaScript</Tab>
          <Tab>Java</Tab>
          <Tab>C++ / C#</Tab>
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