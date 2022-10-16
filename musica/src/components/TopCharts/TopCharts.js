import React from 'react'
import './TopCharts.css'
import golden from '../../assets/images/Rectangle17.svg'
import reggae from '../../assets/images/Rectangle17-1.svg'
import tomorrow from '../../assets/images/Rectangle17-2.svg'
import like from '../../assets/icons/like.svg'


function TopCharts() {
  return (
    <section className='top-charts'>
        <h3>Top charts</h3>
        <div className="top-charts-con">
            <div className='top-charts-card'>
                <div className="tcc-left">
                    <div className="tcc-image">
                        <img className='top-charts-image' src={golden} alt="" />
                    </div>
                    <div className="tcc-text">
                        <p>Golden age of 80s</p>
                        <p>Sean swadder</p>
                        <p>2:34:45</p>
                    </div>
                </div>
                <div className="tcc-right">
                    <img src={like} alt="" />
                </div>
            </div>
            <div className='top-charts-card'>
            <div className="tcc-left">
                    <div className="tcc-image">
                        <img className='top-charts-image' src={reggae} alt="" />
                    </div>
                    <div className="tcc-text">
                        <p>Reggae "n" blues</p>
                        <p>Dj YK mule</p>
                        <p>2:34:45</p>
                    </div>
                </div>
                <div className="tcc-right">
                    <img src={like} alt="" />
                </div>
            </div>
            <div className='top-charts-card'>
            <div className="tcc-left">
                    <div className="tcc-image">
                        <img className='top-charts-image' src={tomorrow} alt="" />
                    </div>
                    <div className="tcc-text">
                        <p>Tomorrow's tunes</p>
                        <p>Obi Datti</p>
                        <p>2:34:45</p>
                    </div>
                </div>
                <div className="tcc-right">
                    <img src={like} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default TopCharts