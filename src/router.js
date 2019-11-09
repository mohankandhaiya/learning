import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import asyncComponent from 'helpers/asyncComponent';
import App from 'containers/App/App';
import { InitialLoader } from 'containers/Pages/InitialLoader';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isLoggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location },
                    }}
                />
            )
        }
    />
);

const PreventedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            let { from } = props.location.state || {
                from: { pathname: '/app' },
            };
            return isLoggedIn ? <Redirect to={from} /> : <Component {...props} />;
        }}
    />
);

const PublicRoutes = ({ history, isLoggedIn, validatingAuthToken }) => {
    if (validatingAuthToken) {
        return <InitialLoader />;
    }
    return (
        <Router history={history}>
            <Switch>
                <PreventedRoute
                    exact
                    path={'/'}
                    component={asyncComponent(() =>
                        import('./containers/OnBoarding/Login'),
                    )}
                    isLoggedIn={isLoggedIn}
                />
                <PreventedRoute
                    path="/login"
                    component={asyncComponent(() =>
                        import('./containers/OnBoarding/Login'),
                    )}
                    isLoggedIn={isLoggedIn}
                />
                <PreventedRoute
                    path="/forgot-password"
                    component={asyncComponent(() =>
                        import('./containers/OnBoarding/ForgotPassword'),
                    )}
                    isLoggedIn={isLoggedIn}
                />
                <PreventedRoute
                    path="/reset-password/:token"
                    component={asyncComponent(() =>
                        import('./containers/OnBoarding/ResetPassword'),
                    )}
                    isLoggedIn={isLoggedIn}
                />
                <PreventedRoute
                    path="/signup"
                    component={asyncComponent(() =>
                        import('./containers/OnBoarding/CreateAccount'),
                    )}
                    isLoggedIn={isLoggedIn}
                />
                <PrivateRoute path="/app" component={App} isLoggedIn={isLoggedIn} />
                <Route
                    component={asyncComponent(() =>
                        import('./containers/Pages/NotFound'),
                    )}
                />
            </Switch>
        </Router>
    );
};

export default connect(state => ({
    isLoggedIn: state.Auth.isLoggedIn,
    validatingAuthToken: state.Auth.validatingAuthToken,
}))(PublicRoutes);
