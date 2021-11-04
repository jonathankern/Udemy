import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDragon } from '../actions/dragon';
import { Button } from 'react-bootstrap';
import DragonAvatar from './DragonAvatar';

class Dragon extends Component {
    render() {
        return (
            <div>
                <Button
                    onClick={this.props.fetchDragon}
                >
                    New Dragon
                </Button>
                <DragonAvatar
                    dragon={this.props.dragon}
                />
            </div>
        )
    }
}

export default connect(
    ({ dragon }) => ({ dragon }), // shorthand for return, use () instead of return keyword
    { fetchDragon }
)(Dragon);