import React from 'react'
import { PartnerImage } from '../../../assets/import'

const partner = () => {
  return (
    <div className="partner-area">
        <div className="container">
            <div className="partner-slider">
              <div>
                <div className="partner-item">
                  <img className="brand-logo" src={PartnerImage} alt="" />
                </div>
            
                <div className="partner-item">
                  <img className="brand-logo" src={PartnerImage} alt="" />
                </div>
            
                <div className="partner-item">
                  <img className="brand-logo" src={PartnerImage} alt="P" />
                </div>
              </div>
                
            </div>
        </div>
    </div>
  )
}

export default partner