import React from 'react'
import '../Sponsors/Sponsors.css'
import AcmWhite from '../../assets/acm-white.png'

function Sponsors() {
    
  return (
    <body>
        <div className='sponsors-header'><h2>OUR SPONSORS</h2></div>
    <div class="logos">
      <div class="logos-slide">
        <img src={AcmWhite} />
        <img src={AcmWhite} />
        <img src={AcmWhite} />
        <img src={AcmWhite} />
        <img src={AcmWhite} />
        <img src={AcmWhite} />
        <img src={AcmWhite} />
        <img src={AcmWhite} />
      </div>

      <div class="logos-slide">
        <img src={AcmWhite}/>
        <img src={AcmWhite} />
        <img src={AcmWhite} />
        <img src={AcmWhite} />
        <img src={AcmWhite} />
        <img src={AcmWhite} />
        <img src={AcmWhite} />
        <img src={AcmWhite} />
      </div>
    </div>
  </body>
  )
}

export default Sponsors