import React from 'react'
import '../Footer/Footer.css'
import whiteAcm from '../../assets/acm-white.png'
import acmWhite from '../../assets/ituacm-white.png'
import ituWhite from '../../assets/itu-white.png'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <div className='footer-left'>
          <h2> Stay Tuned!</h2>
          <div className='footer-img'>
            <a href="https://www.itu.edu.tr/" target="_blank" rel="noopener noreferrer">
              <img src={ituWhite} id='ituWhite' alt='ITU Logo' />
            </a>
            <a href="https://www.acm.org/" target="_blank" rel="noopener noreferrer">
              <img src={whiteAcm} id='acmWhite' alt='ACM Logo' />
            </a>
            <a href="https://example.com/ituacm-white" target="_blank" rel="noopener noreferrer">
              <img src={acmWhite} alt='ACM White' /> </a>

          </div>
        </div>

        <div className='footer-right'>

          <h2>Social Media Accounts</h2>

          <div className='footer-icons'>
            <a href="https://www.instagram.com/ituacmsc/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram" aria-label="Instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCCjjmsgFh5lRWhwoRH6p3tA" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-youtube" aria-label="YouTube"></i>
            </a>
            <a href="https://github.com/ituacm" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github" aria-label="GitHub"></i>
            </a>
            <a href="https://www.linkedin.com/company/ituacmsc/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin" aria-label="LinkedIn"></i>
            </a>
            <a href="https://twitter.com/ituacmsc" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter" aria-label="Twitter"></i>
            </a>
          </div>

        </div>

      </div>
      <div className='footer-bottom'>
        <p>© 2024 Copyright: ITU ACM</p>
      </div>

    </div >
  )
}

export default Footer