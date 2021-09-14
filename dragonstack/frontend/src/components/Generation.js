import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generationActionCreator } from '../actions/generation';

const MINIMUM_DELAY = 3000;

class Generation extends Component {
    timer = null; // Default value, define object that has not been set yet

    // Fetch generation if component is loaded in DOM
    componentDidMount() {
        this.fetchNextGeneration();
    }

    // Stop loop if component is removed from DOM - destroy, cleanup here
    componentWillUnmount() {
        clearTimeout(this.timer); // removes reference of setTimeout
    }

    // Update frontend to display the updated generation
    fetchNextGeneration = () => {
        this.props.fetchGeneration();

        let delay = new Date(this.props.generation.expiration).getTime() - new Date().getTime(); // get difference between this expiration time value and current time value

        if (delay < MINIMUM_DELAY) {
            delay = MINIMUM_DELAY;
        };

        this.timer = setTimeout(() => this.fetchNextGeneration(), delay); // Recursive function - calls itself and dynamically renews generation
    }

    render() {
        console.log('this.props', this.props);

        const { generation } = this.props;

        return (
            <div>
                <h3>Generation {generation.generationId}. Expires on:</h3>
                <h4>{new Date(generation.expiration).toString()}</h4>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const generation = state.generation;

    return { generation };
};

const componentConnector = connect(
    mapStateToProps,
    { fetchGeneration }
);

export default componentConnector(Generation);