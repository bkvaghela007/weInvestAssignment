import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import ModelPortfolioContainer from './component/ModelPortfolioList';
import PortfolioConstituent from './component/PortfolioConstituent';

function RoutingModule() {
    return (
        <div>
            <Router>
                <div>
                    {/* <ul>
                        <li>
                            <Link to='/'>Model Portfolio</Link>
                        </li>
                        <li>
                            <Link to='/portfolio'>Portfolio</Link>
                        </li>
                    </ul> */}
                    <Switch>
                        <Route exact  path='/' component={ModelPortfolioContainer}></Route>
                        <Route path='/portfolio/:id' component={PortfolioConstituent}></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default RoutingModule;

