import React, { Component } from 'react';

class ErrorBoundary extends Component {
        state = {
            error: false,
        };

    componentDidCatch(error) {
       this.setState({
           error: error,
       });
       console.error(error)
    }

    render() {
        const { error } = this.state

        if (error) {
            return (
                <span>Something gone wrong.... We worked on it.</span>
            );
        }
        return this.props.children
    };
}

export default ErrorBoundary;