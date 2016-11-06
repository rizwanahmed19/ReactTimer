import React from 'react';
import {Link, IndexLink} from 'react-router';

var Nav = props => {
	return (
		<div className='top-bar'>
			<div className='top-bar-left'>
				<ul className='menu'>
					<li className='menu-text'>React Timer</li>
					<li><IndexLink activeLinkStyle={{fontWeight: 'bold'}}>Timer</IndexLink></li>
					<li><Link to='/countdown' activeLinkStyle={{fontWeight: 'bold'}}>Countdown</Link></li>
				</ul>
			</div>
			<div className='top-bar-right'>
				<ul className='menu'>
					<li className='menu-text'>
						Created by <a href='https://www.github.com/rizwanahmed19'>Rizwan Ahmed</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Nav;