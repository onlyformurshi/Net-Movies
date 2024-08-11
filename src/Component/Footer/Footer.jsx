import React from 'react'
import './Footer.css'
import Container from 'react-bootstrap/esm/Container'
function Footer() {
  return (
    <Container>
      <footer role="contentinfo">
        <ul className="social--list">
          <li className="social--item">
            <a aria-label="facebook" href="#">
              <i className="bi bi-facebook"></i>
            </a>
          </li>
          <li className="social--item">
            <a aria-label="instagram" href="#">
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li className="social--item">
            <a aria-label="twitter" href="#">
              <i className="bi bi-twitter"></i>
            </a>
          </li>
          <li className="social--item">
            <a aria-label="youtube" href="#">
              <i className="bi bi-youtube"></i>
            </a>
          </li>
        </ul>
        <div className="options">
          <ul className="options--list">
            <li className="options--item"><a href="#">Audiodescription</a></li>
            <li className="options--item"><a href="#">Investor relations</a></li>
            <li className="options--item"><a href="#">Legal information</a></li>
            <li className="options--item"><a href="#">Help Center</a></li>
            <li className="options--item"><a href="#">Recruitment</a></li>
            <li className="options--item"><a href="#">Cookie preferences</a></li>
            <li className="options--item"><a href="#">Gift Cards</a></li>
            <li className="options--item"><a href="#">Terms of Use</a></li>
            <li className="options--item"><a href="#">Legal Notice</a></li>
            <li className="options--item"><a href="#">Press</a></li>
            <li className="options--item"><a href="#">Confidentiality</a></li>
            <li className="options--item"><a href="#">Contacts</a></li>
            <li className="options--item"><a href="#">Informations</a></li>
          </ul>
        </div>
        <button className="service-code-button">Service Code</button>
        <div className="footer-copyright text-center">
          <span className='text-center'>© 2024 murshid dev.</span>
        </div>
      </footer>
    </Container>
  )
}

export default Footer
