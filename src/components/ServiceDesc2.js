import React from 'react'
import danceVideo from "./video/dancevideo.mp4";
export default function ServiceDesc2() {
  return (
    <div>
      <div className='d-flex w-100 afterservices'>
        <div className='w-60 my-5 servicesdescpara'>
          <h1 className='my-3 mx-4'>Expressions by Vaidehi</h1>
          <p className='my-5 mx-4'>Dance is a beautiful and expressive form of art that has been around for centuries. It is a physical activity that involves using various movements of the body to express emotions, tell stories, or simply to entertain. Dance can take many forms, from classical ballet to hip-hop, from traditional folk dances to contemporary modern dance. Whatever the style, dance requires discipline, practice, and a deep connection between the body and the mind. It is a great way to stay physically fit, improve coordination, and boost self-confidence. Dancing can also be a social activity that brings people together, fostering a sense of community and shared experience. Whether you are a professional dancer or someone who just loves to move to the music, dance can be a powerful and transformative experience that enriches your life in many ways.</p>
          <div className='w-100 mx-4'>
          <button type="button" class="btn btn-primary w-50">Make an Appointment</button>
          </div>
        </div>
        <div className='my-4 w-40 m-0'>
          <video src={danceVideo} width={'100%'} height={'100%'} autoPlay loop muted></video>
        </div>
      </div>
    </div>
  )
}
