import React from 'react'

export default function index(props) {
    return (
        <li className="minimalistic-carousel__item" style={{ transform: `translateX(-${props.activeItem * 100}%)` }}>
            {props.children}
        </li>
    )
}
