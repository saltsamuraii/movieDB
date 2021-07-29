import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };
  }

  componentDidCatch(error) {
    this.setState({
      error,
    });
    throw new Error(error.message);
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return <span>Something gone wrong.... We worked on it.</span>;
    }
    return children;
  }
}

export default ErrorBoundary;
