import React, { useState } from 'react';
import './style.scss'
import videoImg from 'src/assets/img/video_bg.jpg'
import playBtn from 'src/assets/img/play-button.png'

function AboutUs() {
  const [video, setVideo] = useState(false)

  return (
    <div className='about'>
      <div className="container">
        <h2 className='title'>О нас</h2>
        <div className="about_body">
        { video && 
          <div className="video_wrapper" onClick={() => setVideo(false)}>
            <div className="video_body">
              <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/hrQ8M3NHNHw" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
                ></iframe>
            </div>
          </div>
        }
          <div className="video_img" style={{backgroundImage: `url(${videoImg})`}}>
            <a className='video_btn' onClick={() => setVideo(true)} >
              <img src={playBtn} alt="play button" />
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutUs;