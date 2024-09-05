import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import W4SideBar from './components/W4SideBar.jsx';
import W4Home from './components/W4Home.jsx';
import W4Form from './components/W4Form.jsx';
import W4Contact from './components/W4Contact.jsx';

export default function W4FihristApp() {
    const queryClient = new QueryClient();
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <div className='flex gap-5'>
                    <W4SideBar />
                    <div id="detail">
                        <Switch>
                            <Route exact path="/">
                                <W4Home />
                            </Route>
                            <Route exact path="/contacts/new">
                                <W4Form />
                            </Route>
                            <Route path="/contacts/:contactId/edit">
                                <W4Form />
                            </Route>
                            <Route path="/contacts/:contactId">
                                <W4Contact />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </QueryClientProvider>
        </>
    );
}