import React, { Component, ReactNode, PropsWithChildren } from 'react';

type ErrorBoundaryState = {
  error: boolean
}

type ErrorBoundaryProps = {
  children: ReactNode
}

export default class ErrorBoundary extends Component<PropsWithChildren<ErrorBoundaryProps>, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      error: false
    };
  }

  componentDidCatch(error: Error) {
    this.setState({
      error: true
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

