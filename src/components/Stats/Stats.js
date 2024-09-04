import React from 'react'
import '../Stats/Stats.css'
import ItuAcmWhite from '../../assets/ituacm-logo-white.png'

function Stats() {
  return (
    <div className="stats-container">
      <div className="stats">
        <div className="stat">
          <div className="stat-icon">👥</div>
          <h2 className="stat-detail">100+ Active Members</h2>
          <div className="wave-animation"></div>
        </div>
        <div className="stat">
          <div className="stat-icon">🤝</div>
          <h2 className="stat-detail">20+ Sponsors</h2>
          <div className="wave-animation"></div>
        </div>
        <div className="stat">
          <div className="stat-icon">🛠️</div>
          <h2 className="stat-detail">4 Technical Squads</h2>
          <div className="wave-animation"></div>
        </div>
      </div>
      <div className='stats-logo'><img src={ItuAcmWhite}></img></div>
    </div>
  )
}

export default Stats