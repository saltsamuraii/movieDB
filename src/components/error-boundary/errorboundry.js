import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    componentDidCatch(error, errorInfo) {
       this.setState({
           hasError: error
       });
    }

    render() {
        if (this.state.hasError) {
            return (
                <span>Something gone wrong....</span>
            );
        }
        return this.props.children
    };
}

export default ErrorBoundary;