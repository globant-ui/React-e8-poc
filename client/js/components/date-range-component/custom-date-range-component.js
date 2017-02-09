import React from 'react';
//import moment from 'moment';
import { DateRange, defaultRanges } from 'react-date-range';
import * as styles from '!style!css!stylus!./custom-date-range.styl';

class CustomDateRange extends React.Component{

    constructor(){
        super();
        this.state = {
            'predefined' : {}
        }
    }

    handleChange(which, payload) {
    console.log("which:"+which);
    console.log("payload:"+payload);
    console.log(payload);
    this.setState({
      'predefined' : payload
    });
  }
    onDateIconClick(){
        if(document.getElementById('customDateRangeContainer').classList.contains('active-date')){
            document.getElementById('customDateRangeContainer').classList.remove('active-date');
        }
        else {
            document.getElementById('customDateRangeContainer').classList.add('active-date');
        }
    }
    render(){
         const predefined = this.state.predefined;
         const format = 'dddd, D MMMM YYYY';
         var newRange = {
             'Last 60 Days': {
                startDate: function startDate(now) {
                return now.add(-60, 'days');
                },
                endDate: function endDate(now) {
                return now;
                }
            }
        }
        const customDefaultRange = Object.assign({},defaultRanges,newRange);
        return(
            <div className={'custom-date-range'}>
                <div className={'label-container'}>
                    <div className={'from-label'}>
                        <p><b>From</b></p>
                    </div>
                    <div className={'to-label'}>
                        <p><b>To</b></p>
                    </div>
                </div>
                <div className={'custom-date-range-header'}>
                    {predefined['startDate'] ? <input
                    type='text'
                    readOnly
                    value={ predefined['startDate'] && predefined['startDate'].format(format).toString() }
                    />: ''}
                    
                    <span onClick={this.onDateIconClick} className={'fa fa-calendar fa-2x date-icon'}/>
                    {predefined['endDate'] ? <input
                    type='text'
                    readOnly
                    value={ predefined['endDate'] && predefined['endDate'].format(format).toString() }
                    />:''}
                </div>
                <div id={'customDateRangeContainer'} className={'custom-date-range-container'} style={{display:"none"}}>
                    <DateRange
                        linkedCalendars={ true }
                        ranges={ customDefaultRange }
                        onInit={ this.handleChange.bind(this, 'predefined') }
                        onChange={ this.handleChange.bind(this, 'predefined') }
                        theme={{
                            Calendar : { width: 200 },
                            PredefinedRanges : { marginLeft: 10, marginTop: 10 }
                        }}
                    />
                </div>
                
            </div>
        );
    }
}

export default CustomDateRange;