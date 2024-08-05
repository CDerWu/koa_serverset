import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        catchFunc(error, errorInfo, this)
    }

    render() {
        if (this.state.errorInfo) {
            return handleError(this)
        }
        // Normally, just render children
        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.element,
}

export const withErrorBoundary = (WrappedComponent) => {
    class WithErrorBoundary extends Component {
        constructor(props) {
            super(props);
            this.state = { error: null, errorInfo: null };
        }

        componentDidCatch(error, errorInfo) {
            catchFunc(error, errorInfo, this)
        }

        render() {
            if (this.state.errorInfo) {
                return handleError(this)
            }
            // Normally, just render children
            return <WrappedComponent {...this.props} ref={this.props.forwardedRef} />;
        }

    }

    WithErrorBoundary.propTypes = {
        forwardedRef: PropTypes.any
    }

    function forwardRefFunc(props, ref) {
        return <WithErrorBoundary {...props} forwardedRef={ref} />;
    }

    const name = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    forwardRefFunc.displayName = `withErrorBoundary(${name})`;

    return React.forwardRef(forwardRefFunc);
};

const catchFunc = (error, errorInfo, ctx) => {
    // catch errors in any components below and re-render with error message
    ctx.setState({
        error: error,
        errorInfo: errorInfo
    })
    // log error messages, etc.
}

const handleError = (ctx) => (
    // Error path
    <div style={ctx.props.style || styles.error}>
        <h2>Something went wrong.</h2>
        <details style={{ whiteSpace: 'pre-wrap' }}>
            {ctx.state.error && ctx.state.error.toString()}
            <br />
            {ctx.state.errorInfo.componentStack}
        </details>
    </div>
);

const styles = {
    error: {
        backgroundColor: '#f98e7e',
        borderTop: '1px solid #777',
        borderBottom: '1px solid #777',
        padding: '12px',
    }
}