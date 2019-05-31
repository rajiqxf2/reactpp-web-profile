import React, { Component } from 'react';
import Projects from './projects';
import SocialProfiles from './socialProfiles';
import profile_image from  './Assets/Profile.png';
import  './index.css';

class App extends Component {
    state= {displayBio: false}
    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio})
    }
    render() {
        const bio = this.state.displayBio ? (
            <div>
                <p style={{fontSize:'18px',fontWeight:'500'}}>I am into QA, currently working at Qxf2 services</p>
                <p style={{fontSize:'18px',fontWeight:'500'}}>Besides work , I like travelling , organic farming, children and pets</p>
                <div>
                    <button onClick={this.toggleDisplayBio}>Show Less</button>
                </div>
            </div> 
        ): (
            <div>
                <button onClick={this.toggleDisplayBio}>Read More</button>
            </div>
        )

        return ( 
            <div style={{textAlign:'center'}}>
                <h3>Hello!</h3>  
                <img src = {profile_image} alt='profile' className='profile' />
                <p style={{fontSize:'18px',fontWeight:'500'}}> My name is Raji Gali  </p>
                {bio} 
                <hr/>
                <Projects/>
                <hr/>
                <SocialProfiles/>
            </div >
        )
    }

}

export default App;