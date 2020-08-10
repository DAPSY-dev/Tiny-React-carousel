import React, { Component } from 'react'
import CarouselItem from '../CarouselItem'
import CarouselControl from '../CarouselControl'
import CarouselDot from '../CarouselDot'
import './carousel.css'
import './more-carousel-css.css'

export class index extends Component {
    state = {
        activeItem: this.props.activeItem || 0,
    }

    componentDidMount() {
        this.update(this.state.activeItem, true)
    }

    update = (value = 0, dot = false) => {
        const activeItemValue = this.state.activeItem + value

        if (!dot) {
            if (activeItemValue < 0 || activeItemValue >= this.props.items.length) {
                return null
            }

            this.setState({
                activeItem: activeItemValue,
            })
        } else {
            this.setState({
                activeItem: value,
            })
        }
    }

    render() {
        return (
            <div className="minimalistic-carousel">
                <ol className="minimalistic-carousel__cont">
                    {this.props.items.map((item, index) => (
                        <CarouselItem activeItem={this.state.activeItem} key={index}>
                            {item}
                        </CarouselItem>
                    ))}
                </ol>
                <ul className="minimalistic-carousel__controls">
                    <CarouselControl action="prev" update={() => { this.update(-1)} } />
                    <CarouselControl action="next" update={() => { this.update(1)} } />
                </ul>
                <ol className="minimalistic-carousel__dots">
                    {this.props.items.map((item, index) => (
                        <CarouselDot item={index} update={() => { this.update(index, true)} } key={index} />
                    ))}
                </ol>
            </div>
        )
    }
}

export default index
