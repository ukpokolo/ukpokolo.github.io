import React from 'react'
import './mycollection.css'
import play from '../../assets/icons/play.svg'
import rectangle16 from '../../assets/images/Rectangle16.svg'
import rectangle17 from '../../assets/images/Rectangle14.svg'
import lead from '../../assets/images/Lead-image.svg'


export default function MyCollection() {
  return (
    <section className='mycollection'>
        <div className="collection-buttons">
            <button className='primary-btn'>My collection</button>
            <button className="secondary-btn">Likes</button>
        </div>
        <div  className="mycollection-con">
            <div style={{background: `url(${rectangle16})`
      }} className="mycollection-card">
              <div className="mcc-left">
                <h2>Limits</h2>
                <p>John wats</p>
                <p>23m likes</p>
              </div>
              <div className="mcc-right">
                
                <img src={play} alt="" />
              </div>
            </div>
            <div  className="mycollection-card" style={{background: `url(${rectangle17})`
      }}>
              <div className="mcc-left">
                <h2>Limits</h2>
                <p>John wats</p>
                <p>23m likes</p>
              </div>
              <div className="mcc-right">

                <img src={play} alt="" />
              </div>
            </div>
            <div className="mycollection-card" style={{background: `url(${lead})`
      }}>
              <div className="mcc-left">
                <h2>Limits</h2>
                <p>John wats</p>
                <p>23m likes</p>
              </div>
              <div className="mcc-right">

                <img src={play} alt="" />
              </div>
            </div>
        </div>
    </section>
  )
}
