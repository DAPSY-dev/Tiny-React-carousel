import React from 'react'

export default function index(props) {
    return (
        <li className="minimalistic-carousel__dot-item">
            <button type="button" onClick={props.update}>{parseInt(props.item) + 1}</button>
        </li>
    )
}
