import React  from 'react';
import CustomAxis   from './custom-axis';

class XYAxis extends React.Component{

    render(){
        const xSettings = {
          translate: 'translate(0,' + (this.props.height - this.props.margin.top - this.props.margin.bottom) + ')',
          scale: this.props.xScale,
          orient: 'bottom'
        };
        const ySettings = {
          translate: 'translate(0,0)',
          scale: this.props.yScale,
          orient: 'left'
        };

        return  <g className="xy-axis">
                    <CustomAxis {...xSettings}/>
                    <CustomAxis {...ySettings}/>
                </g>
    }
}

export default XYAxis;