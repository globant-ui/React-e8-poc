import React from 'react';
import CustomDateRange from 'js/components/date-range-component/custom-date-range-component';
import CustomSlider from 'js/components/range-slider-component/custom-range-slider';
import DropdownGroupView from 'js/components/multiselect/drop-down-group';
import LocalDropdownView from 'js/components/multiselect/local-dropdown';
import * as styles from '!style!css!stylus!./topActionPanel.styl';

class TopActionPanel extends React.Component{
    constructor(){
        super();
    }
    
    renderHeader(){
        
        return(
                <div id={'top-container'}>
                    <div id={'top-left-container'}>
                        <div id={'top-left-top-container'}>
                            <DropdownGroupView onChange={(parm1,param2)=>this.onSelectChange(parm1,param2)}/>
                        </div>
                        <div id={'top-left-bottom-container'}>
                            <div id={'top-left-bottom-left-container'}>
                                <CustomDateRange onChange={(param)=>this.handleDateRangeChange(param)}/>
                            </div>
                            <div id={'top-left-bottom-right-container'}>
                                <p><b>Behaviors</b></p>
                                <LocalDropdownView onChange={(param1, param2) => this.onDropdownValueChange(param1,param2)} />
                            </div>
                        </div>
                    </div>
                    <div id={'top-right-container'}>
                        <p><b>Risk Score</b></p>
                        <CustomSlider minVal={this.state.sliderData.minVal} maxVal={this.state.sliderData.maxVal} stepVal={this.state.sliderData.stepVal}  currentVal={this.props.entity.sliderCurrentValue} marks={this.state.sliderData.marks} onChange={(currVal) => this.handleSliderChange(currVal)}/>
                    </div>
                </div>
            );
    }

    render(){
        
    }
}

export default TopActionPanel;