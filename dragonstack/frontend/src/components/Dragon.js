import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import DragonAvatar from './DragonAvatar';
import { connect } from 'react-redux';
import { fetchDragon } from '../actions/dragon';
import fetchStates from '../reducers/fetchStates';

class Dragon extends Component {
    componentDidMount() {
        this.fetchNextDragon();
    }

    fetchNextDragon = () => {
        this.props.fetchDragon();
    };

    render() {
        console.log('this.props dragon', this.props);

        const { dragon } = this.props;

        if (dragon.status === fetchStates.error) {
            return <div>{dragon.message}</div>;
        }

        return (
            <div>
                <Button
                    onClick={this.fetchNextDragon}
                >
                    New Dragon
                </Button>
                <DragonAvatar
                    dragon={dragon}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const dragon = state.dragon;

    return { dragon };
};

const componentConnector = connect(
    mapStateToProps,
    { fetchDragon }
);

export default componentConnector(Dragon);