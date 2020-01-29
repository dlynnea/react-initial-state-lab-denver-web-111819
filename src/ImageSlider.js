import React, { Component } from 'react'

class ImageSlider extends Component {

state = {
    currentSlideIndex: 0
}

    render() {
        return(
            <div>
                <h2>I am on slide {this.state.currentSlideIndex}</h2>
            </div>
        )
    }
}

export default ImageSlider;
