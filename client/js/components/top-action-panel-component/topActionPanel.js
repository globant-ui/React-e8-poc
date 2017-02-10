import React from 'react';
import CustomDateRange from 'js/components/date-range-component/custom-date-range-component';
import CustomSlider from 'js/components/range-slider-component/custom-range-slider';
import * as styles from '!style!css!stylus!./topActionPanel.styl';

class TopActionPanel extends React.Component{
    constructor(){
        super();
        this.state = {
            "sliderData" : {
                "minVal" : 0,
                "maxVal" : 10,
                "stepVal" : 1,
                "currentVal" : [0,1],
                "marks": {
                0: <strong>0</strong>,
                1: <strong>1</strong>,
                2: <strong>2</strong>,
                3: <strong>3</strong>,
                4: <strong>4</strong>,
                5: <strong>5</strong>,
                6: <strong>6</strong>,
                7: <strong>7</strong>,
                8: <strong>8</strong>,
                9: <strong>9</strong>,
                10: <strong>10</strong>,
                }
            }
        }
    }
    handleSliderChange(p_currentValue){
        const objSlider = Object.assign({},this.state.sliderData,{currentVal:p_currentValue})
        this.setState({
            "sliderData": objSlider
        });
        if(this.props.onSliderChange){
            this.props.onSliderChange(p_currentValue);
        }
    }
    render(){
        return(
                <div id={'top-container'}>
                    <div id={'top-left-container'}>
                        <div id={'top-left-top-container'}>
                            <p>Search Component...</p>
                        </div>
                        <div id={'top-left-bottom-container'}>
                            <div id={'top-left-bottom-left-container'}>
                                <CustomDateRange/>
                            </div>
                            <div id={'top-left-bottom-right-container'}>
                                <p><b>Behaviors</b></p><p>All Behaviors</p>
                            </div>
                        </div>
                    </div>
                    <div id={'top-right-container'}>
                        <p><b>Risk Score</b></p>
                        <CustomSlider minVal={this.state.sliderData.minVal} maxVal={this.state.sliderData.maxVal} stepVal={this.state.sliderData.stepVal}  currentVal={this.state.sliderData.currentVal} marks={this.state.sliderData.marks} onChange={(currVal) => this.handleSliderChange(currVal)}/>
                    </div>
                </div>
        );
    }
}

export default TopActionPanel;