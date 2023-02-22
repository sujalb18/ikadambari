import React from 'react'
import beautyImage from './images/beauty-icon.png'
import yogaImage from './images/yoga-exercise-icon.png'
import foodSImage from './images/food-donation-icon.png'
import EductationImage from './images/education-study-icon.png'
import DanceImage from './images/dance-icon.png'
import SingingImage from './images/concert-icon.png'
import DanceServices from './DanceServices'
import BeautyServices from './BeautyServices'
import PropsDanceservices from './PropsDanceservices';
import PropsBeautyservices from './PropsBeautyServices'
import PropsYogaServices from './PropsYogaServices'
import YogaServices from './YogaServices'

function DanceCard(danceServe){
    return <PropsDanceservices
    src = {danceServe.source}
    title = {danceServe.title} />
  }

function BeautyCard(beautyServe){
    return <PropsBeautyservices
    src = {beautyServe.source}
    title = {beautyServe.title} />
 }

function YogaCard(yogaServe){
    return <PropsYogaServices
    src = {yogaServe.source}
    title = {yogaServe.title} />
 }



export default function Services() {
    return (
        <div>
            <div className='container-fluid mainservicecont d-flex flex-column align-items-center'>
                <div className='my-4 ourserv d-flex flex-column align-items-center'>
                    <div>
                        <h1>Our Services</h1>
                    </div>
                    <div>
                        <p className='ourservp'>Women are more fit for social service than men. They are the incarnation of Ahimsa, the very picture of love. They can charge the society by filling the milk of human kindness in their children. The lap of mother is the first and the best school of every human being. Women is the maker of man. Let her make man real human being. A lady teacher does more than a male teacher. The nurses and lady doctors are doing service to the suffering humanity.</p>
                    </div>
                </div>
            </div>

            <div className='d-grid servicecontainer m-auto'>
                <div className='grid-items'>
                    <div className='my-2'>
                        <img src={beautyImage} alt="BGIMG" width={'30px'} height={'40px'} />
                    </div>

                    <div>
                        <b><a href='#beautyLink' className='aref'><p style={{ fontSize: '0.9rem' }}>Beauty Parlour for Women</p></a></b>
                    </div>
                </div>
                <div className='grid-items '>
                    <div className='my-2'>
                        <img src={yogaImage} width={'30px'} height={'40px'} />
                    </div>
                    <div>
                        <b><a href='#' className='aref'><p style={{ fontSize: '0.9rem' }}>Yoga Teacher</p></a></b>
                    </div>
                </div>
                <div className='grid-items'>
                    <div className='my-2'>
                        <img src={foodSImage} width={'30px'} height={'40px'} />
                    </div>
                    <div>
                        <b><a href='#' className='aref'><p style={{ fontSize: '0.9rem' }}>Food Services</p></a></b>
                    </div>
                </div>
                <div className='grid-items'>
                    <div className='my-2'>
                        <img src={EductationImage} width={'30px'} height={'40px'} />
                    </div>
                    <div>
                        <b><a href='#' className='aref'><p style={{ fontSize: '0.9rem' }}>Home Tuitions</p></a></b>
                    </div>
                </div>
                <div className='grid-items'>
                    <div className='my-2'>
                        <img src={DanceImage} width={'30px'} height={'40px'} />
                    </div>
                    <div>
                        <b><a href='#' className='aref'><p style={{ fontSize: '0.9rem' }}>Dance Classes</p></a></b>
                    </div>
                </div>
                <div className='grid-items'>
                    <div className='my-2'>
                        <img src={SingingImage} width={'45px'} height={'40px'} />
                    </div>
                    <div>
                        <b><a href='#' className='aref'><p style={{ fontSize: '0.9rem' }}>Singing Classes</p></a></b>
                    </div>
                </div>
            </div>
            <hr />
            <div className='container-fluid'>
                <div className='DanceServices'>
                <h4 className='display-4 fontsizeserv'>About Dance Services</h4>
                </div>

                <div className='d-flex justify-content-sm-around my-3'>
                    {DanceServices.map(DanceCard)}  
                </div>
            </div>

            <hr />
            <div className='container-fluid' id='beautyLink'>
                <div className='BeautyServices'>
                <h4 className='display-4 fontsizeserv'>About Beauty Services</h4>
                </div>

                <div className='d-flex justify-content-sm-around my-3'>
                    {BeautyServices.map(BeautyCard)}  
                </div>
            </div>

            <hr />
            <div className='container-fluid' id='beautyLink'>
                <div className='BeautyServices'>
                <h4 className='display-4 fontsizeserv'>About Yoga Services</h4>
                </div>

                <div className='d-flex justify-content-sm-around my-3'>
                    {YogaServices.map(YogaCard)}  
                </div>
            </div>
        </div>

    )
}
