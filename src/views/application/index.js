import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pages from 'src/views/pages';
import Header from 'src/views/application/header';
import './index.css';


export default class Application extends React.Component {
    render() {
        return (
            <main className="application">
                <Header />
                <Switch>
                    <Route path="/auth" component={Pages.Auth} />
                    <Route path="/user" component={Pages.User} />
                    <Route path="/survey" component={Pages.Survey} />
                </Switch>
            </main>
        );
    }
}
