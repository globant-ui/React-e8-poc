import React        from 'react';
import {scaleLinear,scaleTime} from 'd3-scale';
import * as d3 from "d3";
import Chart from './Chart';
import XYAxis from './x-y-axis';

class TimeGraph extends React.Component{

    constructor(){
        super();
        this.state = {
            margin : {top: 30, right: 30, bottom: 30, left:30},
            width : 600,
            height : 200
        }
    }

    renderCircles(d,i){
        var x = scaleTime()
                .domain([new Date("2012-02-15"), d3.timeDay.offset(new Date("2012-04-29"), 1)])
                .rangeRound([0, this.state.width - this.state.margin.left - this.state.margin.right]);
        var y = scaleLinear()
                    .domain([0, d3.max(this.props.data, function(d) { return d.total; })])
                    .range([this.state.height - this.state.margin.top - this.state.margin.bottom, 0]); 
        var colorScale = scaleLinear()
                                .domain([0,d3.max(this.props.data, function(d) { return d.total; })])
                                .range(['red','green']);                   
         const circleProps = {
            cx: (x(new Date(d.date))),
            cy: (this.state.height - this.state.margin.top - this.state.margin.bottom - (this.state.height - this.state.margin.top - this.state.margin.bottom - y(d.total))),
            r: 5,
            fill: colorScale((this.state.height - this.state.margin.top - this.state.margin.bottom - (this.state.height - this.state.margin.top - this.state.margin.bottom - y(d.total)))),
            key: i
        };
        return <circle {...circleProps} />;
    }

    DataCircles(){
        return <g id={'circleContainer'}>{ this.props.data.map((d,i)=>this.renderCircles(d,i)) }</g>
    }

    renderXAxis(){
        return <g className="axis" ref="axis" transform={`translate(0, ${(this.state.height - this.state.margin.top - this.state.margin.bottom)})`}></g>
    }

    render(){
        console.log(d3);
        var xScale = scaleTime()
                .domain([new Date("2012-02-15"), d3.timeDay.offset(new Date("2012-04-29"), 1)])
                .rangeRound([0, this.state.width - this.state.margin.left - this.state.margin.right]);
        var yScale = scaleLinear()
                    .domain([0, d3.max(this.props.data, function(d) { return d.total; })])
                    .range([this.state.height - this.state.margin.top - this.state.margin.bottom, 0]);         
        return <Chart width = {this.state.width} height={this.state.height} margin={this.state.margin}>
                    {this.DataCircles()}
                    <XYAxis width = {this.state.width} height={this.state.height} margin={this.state.margin} xScale={xScale} yScale={yScale} />
                </Chart>;
    }

}

export default TimeGraph;