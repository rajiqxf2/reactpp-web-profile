import React, { Component } from 'react';
import PROJECTS from './data/projects.js'

class Projects extends Component {
    render() {
        return ( 
        <div> 
            <h3>Few Highlighted Projects Of 2018 - 2019</h3>
            <div>
                {
                    PROJECTS.map(PROJECT => {
                        return (
                            <Project key={PROJECT.id} project={PROJECT} />
                        )
                    })
                }
            </div>
        </div>
        )
    }
}

class Project extends Component{
    render(){
        const {title,image,description,link} = this.props.project;
        return(
            <div style={{display:'inline-block',width:300,margin:10}}>
                <h4>{title}</h4>
                <img src={image} alt='project' style={{width:200 , height:120}} />
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>    
        )
    }
}

export default Projects;