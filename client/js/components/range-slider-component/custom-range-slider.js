import React from 'react';
import Slider, { Range } from 'rc-slider';
import * as styles from '!style!css!stylus!./custom-range-slider.css';

class CustomSlider extends React.Component{
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) { 
        if(this.props.onChange){
            this.props.onChange(value);
        }  
    }

    render(){

        return(
            <div className='custom-range-slider'>
                <Slider.Range min={this.props.minVal} max={this.props.maxVal} marks={this.props.marks} step={this.props.stepVal} onChange={this.handleChange} defaultValue={this.props.currentVal} />
            </div>
        );
    }
}

export default CustomSlider;