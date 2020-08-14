import React, { Component } from 'react';
import './style.css';

import Content from '../Content/index';
import Popular from '../Popular/index';

class Main extends Component {
    render () {
        return (
            <div className="main">
                <Content changeColor={this.props.changeColor}/>
                <Popular />
            </div>
        )
    }
}

export default Main