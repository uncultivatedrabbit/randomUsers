import React from 'react'
import Logo from './Logo'

export default function Landing() {
  return (
      <div id="landing">
        <div className="landing-text">
          <Logo/>
        </div>
        <div className="arrow">
          <a href="#cards">
            < i className = "arrow1 fas fa-5x fa-chevron-down" / >
            < i className = "arrow2 fas fa-5x fa-chevron-down" / >
            < i className = "arrow3 fas fa-5x fa-chevron-down" / >
          </a>
        </div>
      </div>
  )
}
