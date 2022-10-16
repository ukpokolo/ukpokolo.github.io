import React from 'react'
import Ellipse2 from '../../assets/ellipse/Ellipse 2.svg'
import Ellipse3 from '../../assets/ellipse/Ellipse 3.svg'
import Ellipse4 from '../../assets/ellipse/Ellipse 4.svg'
import Ellipse5 from '../../assets/ellipse/Ellipse 5.svg'
import Ellipse6 from '../../assets/ellipse/Ellipse 6.svg'
import love from '../../assets/icons/love.svg'
import mask from '../../assets/background.svg'

//Import CSS
import './CurratedPlaylist.css'


function CurratedPlaylist() {
  return (
    <section className='curratedPlaylist'>
        <img className='mask' src={mask} alt="" />
        <div className='curratedPlaylistTop'>
        <p>Currated playlist</p>
        </div>
        <div className='curratedPlaylistBottom'>
            <h1>R & B Hits</h1>
            <p>All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so much more</p>
            <div className="cpb-bottom">
                <div className='ellipses'>
                    <img src={Ellipse2} alt="" />
                    <img src={Ellipse3} alt="" />
                    <img src={Ellipse4} alt="" />
                    <img src={Ellipse5} alt="" />
                    <img src={Ellipse6} alt="" />
                </div>

                <img src={love} alt="" />
                <p>33k Likes</p>


            </div>
        </div>
    </section>
  )
}

export default CurratedPlaylist