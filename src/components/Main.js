import React, {Component} from 'react';
import Nav from './Nav';

var Main = props => {
	return (
			<div>
				<div>
					<div>
						<Nav />
						{props.children}
					</div>
				</div>
			</div>
	);
}

export default Main;