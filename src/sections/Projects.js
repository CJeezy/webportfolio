<<<<<<< HEAD
import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import 'react-mdl/extra/material.css'
import 'react-mdl/extra/material.js'
import './Projects.css'

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
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              This website you are reading this card on!
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', position: 'relative'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.liveabout.com/thmb/N75ydeCsymiRY6LR9CCY3x_nbZ8=/1440x1080/smart/filters:no_upscale()/jeop_logo_large-58bacf375f9b58af5cb69e2f.jpg) center / cover'}} >Jeopardy</CardTitle>
            <CardText>
              A jeopady board game built on Java JSwing library
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>Library Management Software in progress</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>Unity Game in progress</h1></div>
      )
    }

  }



  render() {
    return(
      <div className = 'project-container' id = 'projects'>
          <hr class="solid"></hr>
          <h1 className = 'project-title'> Projects</h1>
          <p1>Here are some of my works!</p1>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Java</Tab>
          <Tab>C++</Tab>
          <Tab>C#</Tab>
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

=======
import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import 'react-mdl/extra/material.css'
import 'react-mdl/extra/material.js'
import './Projects.css'

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
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              This website you are reading this card on!
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', position: 'relative'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.liveabout.com/thmb/N75ydeCsymiRY6LR9CCY3x_nbZ8=/1440x1080/smart/filters:no_upscale()/jeop_logo_large-58bacf375f9b58af5cb69e2f.jpg) center / cover'}} >Jeopardy</CardTitle>
            <CardText>
              A jeopady board game built on Java JSwing library
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>Library Management Software in progress</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>Unity Game in progress</h1></div>
      )
    }

  }



  render() {
    return(
      <div className = 'project-container' id = 'projects'>
          <hr class="solid"></hr>
          <h1 className = 'project-title'> Projects</h1>
          <p1>Here are some of my works!</p1>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Java</Tab>
          <Tab>C++</Tab>
          <Tab>C#</Tab>
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

>>>>>>> 91fee263c34ac08e741f2ce5d7c78718c8ae350f
export default Projects;