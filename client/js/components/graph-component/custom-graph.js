import React from 'react';
import {scaleLinear,scaleTime} from 'd3-scale';
import * as d3 from "d3";
import Chart from './Chart';
import XYAxis from './x-y-axis';
import * as styles from '!style!css!stylus!./graph.styl';

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
        var objDateRange = this.getDateRange();
        var x = scaleTime()
                .domain([d3.timeDay.offset(new Date(objDateRange.startDate), -5), d3.timeDay.offset(new Date(objDateRange.endDate), 5)])
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
        return <circle data-date={d.date} data-content={d.total} style={{cursor:'pointer'}} onMouseOver={(e)=>this.onCircleMouseOver(e)} onMouseOut={(e)=>this.onCircleMouseOut(e)} {...circleProps} />;
    }

    onCircleMouseOver(e){
        debugger;
        document.getElementById('toolTip').style.top = (parseInt(e.target.attributes['cy'].textContent)-30)+"px";
        document.getElementById('toolTip').style.left = (parseInt(e.target.attributes['cx'].textContent)-30)+"px";
        document.getElementById('toolTip').style.display = "block";
        var strContent = "<strong>Date: </strong>"+e.target.attributes['data-date'].textContent+"<br/><strong>Total: </strong>"+e.target.attributes['data-content'].textContent;
         document.getElementById('toolTip').innerHTML = strContent;
    }

    onCircleMouseOut(e){
        document.getElementById('toolTip').style.display = "none";
    }

    DataCircles(){
        return <g id={'circleContainer'}>{ this.props.data.map((d,i)=>this.renderCircles(d,i)) }</g>
    }

    renderXAxis(){
        return <g className="axis" ref="axis" transform={`translate(0, ${(this.state.height - this.state.margin.top - this.state.margin.bottom)})`}></g>
    }

    sortArrayByDate(p_sortType = 'asc'){ 
			const arrUpdatedList = this.props.data.sort(function(a, b){
                var dateA,dateB;
                dateA = new Date(a['date']);
                dateB = new Date(b['date']);
                 if(p_sortType === "asc"){
                     return dateA-dateB //sort by date ascending
                }
				else {
                    return dateB-dateA //sort by date ascending
                }
			});
            return arrUpdatedList;
    }

    getDateRange(){
        var arrSortList = this.sortArrayByDate();
        var objDateRange = {startDate:arrSortList[0].date,endDate: arrSortList[arrSortList.length-1].date};
        return objDateRange;
    }

    render(){
        console.log(d3);
        var objDateRange = this.getDateRange();
        var xScale = scaleTime()
                .domain([d3.timeDay.offset(new Date(objDateRange.startDate), -5), d3.timeDay.offset(new Date(objDateRange.endDate), 5)])
                .rangeRound([0, this.state.width - this.state.margin.left - this.state.margin.right]);
        var yScale = scaleLinear()
                    .domain([0, d3.max(this.props.data, function(d) { return d.total; })])
                    .range([this.state.height - this.state.margin.top - this.state.margin.bottom, 0]);

        return <div id={'chartContainer'} style={{position:'relative'}}>
                    <Chart width = {this.state.width} height={this.state.height} margin={this.state.margin}>
                        {this.DataCircles()}
                        <XYAxis width = {this.state.width} height={this.state.height} margin={this.state.margin} xScale={xScale} yScale={yScale} />
                        <div className={'d3-tip'}></div>
                    </Chart>
                    <div id={'toolTip'} style={{position:'absolute',display:'none'}} className={'d3-tip'}>Hello</div>
                </div>;
    }

}

export default TimeGraph;