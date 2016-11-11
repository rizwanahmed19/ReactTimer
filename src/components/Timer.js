import React, {Component, PropTypes} from 'react';
import Clock from './Clock';
import Controls from './Controls';

class Timer extends Component {
	constructor(props){
		super(props);
		this.state = {
			count: 0,
			timerStatus: 'stopped'
		};
	}
	handleStatusChange(newStatus){
		this.setState({
			timerStatus: newStatus
		});
	}
	componentWillUnmount(){
		clearInterval(this.timer);
	}
	componentDidUpdate(prevProps, prevState){
		if(this.state.timerStatus !== prevState.timerStatus){
			switch (this.state.timerStatus) {
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({count: 0});
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	}
	startTimer(){
		this.timer = setInterval(() => {
			var newCount = this.state.count + 1;
			this.setState({
				count: newCount
			});
		}, 1000);
	}
	render(){
		var {count, timerStatus} = this.state;
		var renderStartPauseButton = () => {
			if(this.state.timerStatus !== 'stopped'){
				return <button className='button secondary'>Pause</button>
			} else {
				return <button className='button primary'>Start</button>
			}
		}
		return (
			<div className='timer'>
				<h1 className='page-title'>Timer App</h1>
				<Clock totalSeconds={count}/>
				<Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange.bind(this)} />
			</div>
		);
	}
}

export default Timer;