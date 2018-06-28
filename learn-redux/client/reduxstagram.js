import React from 'react';
import {render} from 'react-dom';
// import css
import css from './styles/style.styl';

//import components
import Main from './components/Main';

render(<Main />, document.getElementById('root'));

// if no path on the front of the location of where we're importing something, it means it's something
// coming from node modules folder and somethign that we npm installed at the start.
