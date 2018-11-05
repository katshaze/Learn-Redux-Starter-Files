import React from 'react';

import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

//import components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path="/view/:postId" component={Single}></Route>
        </Route>
    </Router>
)

render(router, document.getElementById('root'));

// if no path on the front of the location of where we're importing something, it means it's something
// coming from node modules folder and somethign that we npm installed at the start.

// the render method from react-dom: render out to html

// react router: render out the router to the page and then it will decide which componenent needs to be rendered