import React, { Component } from "react";
import { Tab, Tabs } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab : 0 };
    }
    
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab : tabId })} ripple>
                    <Tab>Symfony 4</Tab>
                    <Tab>NodeJS</Tab>
                    <Tab>Descartes</Tab>
                </Tabs>
            </div>
        )
    }
}

export default Projects;