import React from 'react'
import { Link } from 'react-router-dom'


export default function PropsDanceservices(props) {
    return (
        <div>
            <div>
                <Link to={'/servicesdesc2'} className='aref'>
                <div>
                    <img src={props.src} className='servimages' width='300px' height={'200px'} />
                </div>
                <div className='my-3'>
                    <h5 className='servtitle'><a href='#' className='aref'> {props.title} </a></h5>
                </div>
                </Link>
            </div>
        </div>
    )
}
