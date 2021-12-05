import React, { Component } from 'react';
import Generation from './Generation';
import Dragon from './Dragon';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Dragon Stack from React</h2>
                <Generation />
                <Dragon />
            </div>
        )
    }
}

export default Home;