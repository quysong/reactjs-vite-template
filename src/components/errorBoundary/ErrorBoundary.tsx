import React from 'react';

type ErrorHandler = (error: Error, info: React.ErrorInfo) => void;
type ErrorHandlingComponent<Props> = (props: Props, error?: Error) => React.ReactNode;

type ErrorState = { error?: Error };

// eslint-disable-next-line @typescript-eslint/ban-types
function Catch<Props extends {}>(
  component: ErrorHandlingComponent<Props>,
  errorHandler?: ErrorHandler
): React.ComponentType<Props> {
  return class extends React.Component<Props, ErrorState> {
    // eslint-disable-next-line react/state-in-constructor
    state: ErrorState = {
      error: undefined,
    };

    static getDerivedStateFromError(error: Error) {
      return { error };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
      if (errorHandler) {
        errorHandler(error, info);
      }
    }

    render() {
      // eslint-disable-next-line react/destructuring-assignment
      return component(this.props, this.state.error);
    }
  };
}

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

const ErrorBoundary = Catch(function ErrorBoundary(props: ErrorBoundaryProps, error?: Error) {
  if (error) {
    return (
      <div className="error-screen">
        <h2>An error has occurred</h2>
        <h4>{error.message}</h4>
      </div>
    );
  }
  return props.children;
});

// Document reference: https://gist.github.com/igorjs/6b7dfc8c9fe99884fe2e2b5ce093a07d
export default ErrorBoundary;
