import React, { Component } from 'react';

class ErrorBoundary extends Component {
        state = {
            error: false,
            errorInfo: null,
        };

    componentDidCatch(error, errorInfo) {
       this.setState({
           error: error,
           errorInfo: errorInfo
       });
       console.log(errorInfo)
    }

    render() {
        const error = this.state.error

        if (error) {
            return (
                <span>Something gone wrong.... We worked on it.</span>
            );
        }
        return this.props.children
    };
}

export default ErrorBoundary;