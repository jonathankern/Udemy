import React, { Component } from 'react';

const DEFAULT_GENERATION = { generationId: '', expiration: ''}
const MINIMUM_DELAY = 3000;

class Generation extends Component {
    state = { generation : DEFAULT_GENERATION };

    timer = null; // Default value, define object that has not been set yet

    // Fetch generation if component is loaded in DOM
    componentDidMount() {
        this.fetchNextGeneration();
    }

    // Stop loop if component is removed from DOM - destroy, cleanup here
    componentWillUnmount() {
        clearTimeout(this.timer); // removes reference of setTimeout
    }

    fetchGeneration = () => {
        fetch('http://localhost:3000/generation')
            .then(response => response.json())
            .then(json => { 
                console.log('json', json);

                this.setState({ generation: json.generation });
            })
            .catch(error => console.error('error', error));
    };

    // Update frontend to display the updated generation
    fetchNextGeneration = () => {
        this.fetchGeneration();

        let delay = new Date(this.state.generation.expiration).getTime() - new Date().getTime(); // get difference between this expiration time value and current time value

        if (delay < MINIMUM_DELAY) {
            delay = MINIMUM_DELAY;
        };

        this.timer = setTimeout(() => this.fetchNextGeneration(), delay); // Recursive function - calls itself and dynamically renews generation
    }

    render() {
        const { generation } = this.state;

        return (
            <div>
                <h3>Generation {generation.generationId}. Expires on:</h3>
                <h4>{new Date(generation.expiration).toString()}</h4>
            </div>
        )
    }
}

export default Generation;