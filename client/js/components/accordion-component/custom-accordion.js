import React from 'react';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';
import * as styles from '!style!css!stylus!./custom-accordion.styl';


class CustomAccordion extends React.Component {
    constructor(){
        super();
        this.createPanelList = this.createPanelList.bind(this);
    }
    createPanelList(){
        const mappedTestPanels = this.props.data.panels.map((panelData,i)=> panelData.componentUsed !== "NA" ? <Panel key={i} header={panelData.header} eventKey={panelData.eventKey}><div className='left-container'><panelData.componentUsed data={panelData.componentData}/></div><div className='right-container'>{panelData.content}</div></Panel> : <Panel key={i} header={panelData.header} eventKey={panelData.eventKey}>{panelData.content}</Panel>);
        return mappedTestPanels;
    }
    render(){
        
        return(
            <div className='custom-accordion'>
                <Accordion>
                    {this.createPanelList()}
                </Accordion>
            </div>
        );
    }
}
export default CustomAccordion;