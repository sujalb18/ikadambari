import React from 'react'
import video from './Video.mp4'
import we from './images/we.jpeg'
export default function Body() {
    return (
        <body className='my-5'>
            <div className='container-fluid d-flex flex-column align-items-center'>
                <div>
                <h1>Empowering Women, Empowering India</h1>
                </div>

                <div>
                <p>iKadambari empowers women entrepreneurs by showcasing their unique products and services, made by women for India.</p>
                </div>

                <div>
                <video className='firstvideo' src={video} width={'80%'} height={'500px'} autoPlay loop muted/>
                </div>
                <br></br>
                <div class="container my-5">
                    <div class="row">
                    <div class="col-lg-6 d-flex justify-content-center">
                    <img class="aboutimg shadow m-0" style={{marginTop:'40px'}} src={we}/>
                </div>
                <div class="col-lg-6 aboutdesc">
                    <div class="mx-1">
                        <h1 class="display-4">About iKadambari</h1>
                        <p class="lead">Women's skills in handicrafts and service sectors are an important part of India's culture and economy. From traditional weaving and embroidery to modern technology and business management, women have been at the forefront of these industries for generations. Their skills and expertise not only provide a source of income for themselves and their families, but also contribute to the cultural and artistic heritage of the country. Empowering and promoting women's skills in these sectors can lead to greater economic and social opportunities for women, while also preserving and celebrating India's diverse cultural traditions.</p>
                        <a href="#" class="btn btn-outline-dark">Read More</a>
                    </div>
                </div>
                </div>
                </div>
                <div>
                    
                <p></p>
                </div>
            </div>
        </body>
    )
}
