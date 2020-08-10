import React, { Component } from 'react'
import Carousel from './components/Carousel'

export class App extends Component {
    state = {
        carouselItems: [
            <img src="https://placekitten.com/1280/720" alt="Cat" style={{ display: 'block', width: '100%' }} />,
            <img src="https://placekitten.com/1281/721" alt="Cat" style={{ display: 'block', width: '100%' }} />,
            <img src="https://placekitten.com/1282/722" alt="Cat" style={{ display: 'block', width: '100%' }} />,
            <img src="https://placekitten.com/1283/723" alt="Cat" style={{ display: 'block', width: '100%' }} />,
            <img src="https://placekitten.com/1285/725" alt="Cat" style={{ display: 'block', width: '100%' }} />,
            <img src="https://placekitten.com/1286/726" alt="Cat" style={{ display: 'block', width: '100%' }} />,
            <img src="https://placekitten.com/1287/727" alt="Cat" style={{ display: 'block', width: '100%' }} />,
            <img src="https://placekitten.com/1288/728" alt="Cat" style={{ display: 'block', width: '100%' }} />,
            <img src="https://placekitten.com/1276/716" alt="Cat" style={{ display: 'block', width: '100%' }} />,
        ],
    }

    render() {
        return (
            <div style={{ margin: '0 auto', width: '75%' }}>
                {/**
                 * Props:
                 * - activeItem [Number]
                */}
                <Carousel items={this.state.carouselItems} />
            </div>
        )
    }
}

export default App
