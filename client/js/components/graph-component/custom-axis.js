import React from 'react';
import * as d3 from "d3";
import { axisLeft, axisBottom } from 'd3-axis';
import { timeFormat} from 'd3-time-format';

class CustomAxis extends React.Component{

    componentDidUpdate() {
        this.renderAxis();
    }

    renderAxis() {
        var node  = this.refs.axis;
        var axis;
        if(this.props.orient === "left"){
            axis = axisLeft(this.props.scale).ticks(10).tickSize(10);
            d3.select(node).call(axis);
        } 
        else{
            axis = axisBottom(this.props.scale).ticks(10).tickSize(10).tickFormat(timeFormat('%d-%b-%y'));
            d3.select(node).call(axis);
        }
    }

    render(){
        return(
            <g className="axis" ref="axis" transform={this.props.translate}></g>
        );
    }
}

export default CustomAxis;