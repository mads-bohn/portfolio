import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './navigation.css'

export default function SocialBadges({iconSize}) {
  return (
    <div className='socialBadges'>
        <a href='https://github.com/mads-bohn'>
          <FontAwesomeIcon icon={faGithub} size={iconSize} className='socialIcon'/>
        </a>
        <a href='https://www.linkedin.com/in/mads-bohn-12a9212b0/'>
          <FontAwesomeIcon icon={faLinkedin} size={iconSize} className='socialIcon' />
        </a>
        <a href='mailto:madsbohn14@gmail.com'>
          <FontAwesomeIcon icon={faEnvelope} size={iconSize} className='socialIcon' />
        </a>   
    </div>
  )
}
