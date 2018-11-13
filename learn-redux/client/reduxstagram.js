import React from 'react';

import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

//import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider }  from 'react-redux'; // allows us to use redux with react coz redux can actually be used with anything
import store, { history } from './store'; // store is a default export so no destructuring required, but history is named so needs destructuring

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));

// if no path on the front of the location of where we're importing something, it means it's something
// coming from node modules folder and somethign that we npm installed at the start.

// the render method from react-dom: render out to html

// react router: render out the router to the page and then it will decide which componenent needs to be rendered