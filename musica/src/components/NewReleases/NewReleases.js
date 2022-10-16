import React from 'react'
import {data} from '../popularInYourArea/data'

import './newReleases.css'

function NewReleases() {
  return (
    <section className='new-releases'>
        <h3>New releases.</h3>
        <div className="new-releases-con">
        {data.map((album) => (
            <div  album={album}
            key={album.id} 
            className="new-releases-card">
                <img src={album.img} alt="" />
              <p>{album.title}</p>
              <p>{album.artist}</p>
            </div>
           ))} 
        </div>
    </section>
  )
}

export default NewReleases