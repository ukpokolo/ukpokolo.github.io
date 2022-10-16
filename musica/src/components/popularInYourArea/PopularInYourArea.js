import React from "react";

import "./popularInYourArea.css";
import {data} from './data'
// import Album from './Album'



function PopularInYourArea() {
  return (
    <section>
      
      <div className="popular-in-your-area">
      <h3>Popular in your area.</h3>
        <div className="popular-in-your-area-con">
          {data.map((album) => (
            <div
              album={album}
              key={album.id}
              className="popular-in-your-area-card"
            >
              <img src={album.img} alt="" />
              <p>{album.title}</p>
              <p>{album.artist}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularInYourArea;
