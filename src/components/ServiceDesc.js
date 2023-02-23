import React from 'react'
import BeautyVideo from './video/makeupvideo.mp4';
export default function ServiceDesc() {
  return (
    <div>
      <div className='d-flex w-100 afterservices'>
        <div className='w-60 my-5 servicesdescpara'>
          <h1 className='my-3 mx-4'>MAKE OVER ARTIST</h1>
          <p className='my-5 mx-4'>A beauty artist, also known as a makeup artist, is a skilled professional who specializes in enhancing a person's appearance through makeup application. These artists use their knowledge of colors, textures, and techniques to create a variety of looks that range from natural and understated to bold and dramatic. Whether working with models, actors, brides, or everyday people, beauty artists have the ability to transform a person's appearance and boost their confidence. They are skilled in creating flawless complexions, defining features, and accentuating natural beauty. In addition to their technical skills, beauty artists also possess strong communication skills, as they must listen to their clients' needs and preferences while also providing expert advice and recommendations. The work of a beauty artist is not only creative and artistic but also requires a keen attention to detail and a deep understanding of the human face and skin.</p>
          <div className='w-100 mx-4'>
          <button type="button" class="btn btn-primary w-50">Make an Appointment</button>
          </div>
        </div>
        <div className='my-4 w-40 m-0'>
          <video src={BeautyVideo} width={'100%'} height={'100%'} autoPlay loop muted></video>
        </div>
      </div>
    </div>
  )
}
