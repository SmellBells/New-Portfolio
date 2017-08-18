import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../home/HomePage';
import WorkPage from '../work/WorkPage'

const Nav = () => (
    <div>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/work" component={WorkPage}/>
        </Switch>
    </div>
)
export default Nav;