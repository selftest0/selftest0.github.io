import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Pages from 'src/views/pages';
import Header from 'src/views/application/header';
import './index.scss';


export default class Application extends React.Component {
    render() {
        return (
            <main className="application">
                <Header />
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/survey/list" />} />
                    <Route path="/auth" component={Pages.Auth} />
                    <Route path="/user" component={Pages.User} />
                    <Route path="/survey" component={Pages.Survey} />
                    <Route component={Pages.NotFound} />
                </Switch>
            </main>
        );
    }
}
