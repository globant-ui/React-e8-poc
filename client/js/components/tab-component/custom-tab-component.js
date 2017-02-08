import React from 'react';
import Tab from 'react-bootstrap/lib/Tab';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import * as styles from '!style!css!stylus!./custom-tab-component.styl';
class CustomTabComponent extends React.Component{

    createSubHeader(i){
        const mappedSubHeaderItems = this.props.data.tabHeader[i].subHeaderContent.content.map((cellContent,index) => <MenuItem key={index} eventKey={cellContent.eventKey}>{cellContent.title}</MenuItem>);
        return mappedSubHeaderItems;
    }

    createTabContainers(){
        const mappedContainerItems = this.props.data.tabContainer.map((containerContent,index) =>  <Tab.Pane key={index} eventKey={containerContent.eventKey}>{containerContent.tabContent}</Tab.Pane>);
        return mappedContainerItems;
    }

    createTabHeaders(){
        const mappedHeaderItems = this.props.data.tabHeader.map((headerContent,index) => headerContent.subHeaderContent !== "NA" ? <NavDropdown key={index} eventKey={headerContent.eventKey} title={headerContent.title} > {this.createSubHeader(index)} </NavDropdown>: <NavItem key={index} eventKey={headerContent.eventKey}>{headerContent.title}</NavItem>);
        return mappedHeaderItems;
    }
    
    render(){
        return(
            <Tab.Container id={this.props.data.id} defaultActiveKey={this.props.data.defaultActiveKey}>
                <Row className="clearfix">
                    <Col sm={this.props.data.tabArea} className={"tab-continer"} id={this.props.data.id+'_tabContainer'}>
                        <Nav bsStyle="tabs">
                            {this.createTabHeaders()} 
                        </Nav>
                    </Col>
                    <Col sm={this.props.data.tabArea} className={"pan-container"} id={this.props.data.id+'_panContainer'}>
                        <Tab.Content animation>
                            {this.createTabContainers()}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        );
    }
}

export default CustomTabComponent;