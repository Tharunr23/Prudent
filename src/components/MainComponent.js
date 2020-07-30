import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Main extends Component
{
    constructor(props)
    {
        super(props);

    }
    render()
    {
        return(
            <div>
                <Header />
                <Switch>
                    <Route path="/upload" component={()=><Upload />} />
                    <Redirect to="/upload" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;