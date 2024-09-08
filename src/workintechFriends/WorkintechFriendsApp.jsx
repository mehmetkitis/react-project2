import React from 'react';
import './workintechFriends.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthContextProvider from './contexts/AuthContext';
import W6Header from './components/W6Header';
import W6LoginForm from './components/W6LoginForm';
import W6FriendsList from './components/W6FriendsList';
import W6AddFriend from './components/W6AddFriend';
import W6PrivateRoute from './components/W6PrivateRoute';

function WorkintechFriendsApp() {
    return (
        <div className="App">
            <W6Header />
            <Switch>
                <Route path="/friendsLogin">
                    <W6LoginForm />
                </Route>
                <W6PrivateRoute exact path="/friendsList">
                    <W6FriendsList />
                </W6PrivateRoute>
                <W6PrivateRoute exact path="/friends/add">
                    <W6AddFriend />
                </W6PrivateRoute>
                <Route exact path="/friends">
                    <Redirect to="/friendsLogin" />
                </Route>
            </Switch>
        </div>
    );
}

export default WorkintechFriendsApp;
