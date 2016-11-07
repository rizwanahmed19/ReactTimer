import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from './components/Main';
import Timer from './components/Timer';
import Countdown from './components/Countdown';


import 'style!css!foundation-sites/dist/foundation.min.css';
$(document).foundation();

import 'style!css!sass!./styles/app.scss';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Timer} />
			<Route path='countdown' component={Countdown} />
		</Route>
	</Router>, 
	document.getElementById('app')
);