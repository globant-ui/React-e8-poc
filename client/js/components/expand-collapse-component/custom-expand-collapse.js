import React from 'react';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';
import * as styles from '!style!css!stylus!./custom-expand-collapse.styl';


class CustomExpandCollapse extends React.Component {
    constructor(){
        super();
    }
    
    render(){
        
        return(
            <div id={this.props.id} className='custom-expand-collapse'>
                <Accordion>
                    <Panel header={this.props.header} eventKey="1">
                        {this.props.children}
                    </Panel>
                </Accordion>
            </div>
        );
    }
}
export default CustomExpandCollapse;