import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icon">
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={facebook_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Account</li>
        <li>FAQ</li>
        <li>Investor Relations</li>
        <li>Ways to Watch</li>
        <li>Corporate Information</li>
        <li>Help Centre</li>
        <li>Media Centre</li>
        <li>Terms of Use</li>
        <li>Cookie Preferences</li>
        <li>Contact Us</li>
        <li>Legal Notices</li>
      </ul>
      <p className='copyright-text'>&copy; 1997-2024 Netflix, Inc</p>
    </div>
  )
}

export default Footer