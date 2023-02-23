import React from 'react'
import { Link } from 'react-router-dom'

export default function PropsYogaServices(props) {
    return (
        <div>
            <div>
                <div>
                    <Link>
                    <img src={props.src} className='servimages' width='300px' />
                    </Link>
                </div>
                <div className='my-3'>
                    <h5 className='servtitle'><a href='#' className='aref'> {props.title} </a></h5>
                </div>
            </div>
        </div>
    )
}
