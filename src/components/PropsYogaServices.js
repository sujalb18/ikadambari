import React from 'react'

export default function PropsYogaServices(props) {
    return (
        <div>
            <div>
                <div>
                    <img src={props.src} className='servimages' width='300px' />
                </div>
                <div>
                    <h4>{props.title}</h4>
                </div>
            </div>
        </div>
    )
}
