import React,{Component} from 'react';
import PROFILES from './data/socialProfiles'
import './index.css'

class SocialProfiles extends Component{
    render(){
        return(
            <div>
                <h3>Contact me!</h3>
                {
                PROFILES.map(PROFILE => {
                    return(
                        <Profile key={PROFILE.id} profile={PROFILE}/>
                    )
                    })
                }
            </div>
        )
    }
}

class Profile extends Component{
    render(){
        const {link,image} =this.props.profile
        return(
            <span style={{display:'inline-block',margin:10}}>
                <a href={link}><img src={image} alt='profile' className='socialprofile'/></a>
            </span>
        )
    }
}

export default SocialProfiles