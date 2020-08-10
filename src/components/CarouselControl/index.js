import React from 'react'

export default function index(props) {
    let controlText = null

    switch (props.action) {
        case 'prev':
            controlText = 'Prev'
            break
        case 'next':
            controlText = 'Next'
            break
        default:
            controlText = ''
    }

    return (
        <li className="minimalistic-carousel__control-item">
            <button type="button" onClick={props.update}>{controlText}</button>
        </li>
    )
}
