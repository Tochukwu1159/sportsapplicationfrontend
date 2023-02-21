import React from 'react'
import logo3 from '../../assets/icon/logo3.svg'
import { FooterStyle, LowerFooter } from '../../styles/LandingStyles' 
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
export const Footer = () => {
  return (
    <FooterStyle>
        <div>
        </div>
        <div className='footerMenu'>
            <div>Home</div>
            <div>About    Sport Connect</div>
            <div>Contact</div>
        </div>
        <LowerFooter>
            <div className="establish">
            <p>&copy; 2023 Sport Connect. All rights reserved</p>
            </div>
            <div className='socials-wrapper'>
                <FaInstagram className='social-icon' />
                <FaTwitter className='social-icon'/>
                <FaYoutube className='social-icon'/>
            </div>
        </LowerFooter>
    </FooterStyle>
  )
}

