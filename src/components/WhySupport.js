import React from 'react'
import img1 from './img1.jpg'

export default function WhySupport() {
    return (
        <div>
            <div className='d-flex p-3 justify-content-center m-auto' style={{fontSize: '1rem'}}>
                <div className='w-50'>
                    <h4>Why support Indian Artisans and Handicrafts?</h4>
                    <p className='taj'>When you buy from Indian artisans and handicrafts, you not only get to take home a piece of their cultural heritage, but also contribute to their livelihood and preserve their traditional skills. </p>
                    
                    <p className='taj'>In today's fast-paced world, these artisans and their handicrafts face tough competition from cheaper, mass-produced goods. By choosing to buy from them, you give them a reason to continue their craft and pass it on to future generations.</p>

                    <p className='taj'>So, next time you're shopping for gifts or home decor, consider buying from Indian artisans and handicrafts. You'll not only end up with unique and beautiful items, but also help support a traditional way of life.</p>
                </div>
                <div className='mx-4'>
                    <img src={img1} alt="artisans" style={{ width: '30vw' }} />
                </div>
            </div>
        </div>
    )
}
