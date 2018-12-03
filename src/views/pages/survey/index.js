import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SurveyList from './list/index';
import SurveyItem from './item/index';

export default () => (
    <Switch>
        <Route path="/survey/list" component={SurveyList} />
        <Route path="/survey/item/:id" component={SurveyItem} />
    </Switch>
);
