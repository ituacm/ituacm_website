import React from 'react'
import '../Stats/Stats.css'

function Stats() {
  return (
    <div className='stats-container'>
    <div class="stats">
        <div class="stats-header">
            <h2>Stats</h2>
        </div>
        <div class="stats-content">
            <div class="stat-item">
                <div class="stat-icon">👥</div>
                <div class="stat-text">
                    <h3>100+ Active Members</h3>
                </div>
            </div>
            <div class="stat-item">
                <div class="stat-icon">🎟️</div>
                <div class="stat-text">
                    <h3>20+ Sponsors</h3>
                </div>
            </div>
            <div class="stat-item">
                <div class="stat-icon">🛠️</div>
                <div class="stat-text">
                    <h3>4 Technical Squads</h3>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Stats