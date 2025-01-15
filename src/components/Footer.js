import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>SOCIAL</h4>
          <a href="https://x.com/devilxdetail" target="_blank" rel="noopener noreferrer">TWITTER (X)</a>
          <a href="https://www.instagram.com/devilxdetail/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
        </div>
        
        <div className="footer-section">
          <h4>HELP</h4>
          <a href="#">CONTACT US</a>
          <a href="#">FAQ</a>
        </div>
        
        <div className="footer-section">
          <h4>COMPANY</h4>
          <a href="#">PRIVACY POLICY</a>
          <a href="#">TERMS OF SERVICE</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2024 Devil x Detail, LLC</p>
      </div>
    </footer>
  )
}

export default Footer 