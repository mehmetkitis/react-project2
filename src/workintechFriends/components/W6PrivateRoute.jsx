import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const W6PrivateRoute = ({ children, ...rest }) => {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLoggedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathName: "/friendsLogin",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

export default W6PrivateRoute;