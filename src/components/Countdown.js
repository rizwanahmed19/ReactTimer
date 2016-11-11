import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';
import Controls from './Controls';

class Countdown extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			count: 0,
			countdownStatus: 'stopped'
		}
	}
	componentDidUpdate(prevProps, prevState){
		if(this.state.countdownStatus !== prevState.countdownStatus){
			switch(this.state.countdownStatus){
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
			var newCount = this.state.count - 1;
			this.setState({
				count: newCount >= 0 ? newCount : 0
			});

			if(newCount === 0){
				this.setState({countdownStatus: 'stopped'});
			}
		}, 1000);
	}
	componentWillUnmount(){
		clearInterval(this.timer);
		this.timer = undefined;
	}
	handleSetCountdown(seconds){
		this.setState({ 
			count: seconds,
			countdownStatus: 'started'
		});
	}
	handleStatusChange(newStatus){
		this.setState({
			countdownStatus: newStatus
		});
	}
	render(){
		var {count, countdownStatus} = this.state;
		var renderControlsArea = () => {
			if(countdownStatus !== 'stopped'){
				return <Controls onStatusChange={this.handleStatusChange.bind(this)} countdownStatus={countdownStatus} /> 
			} else {
				return <CountdownForm onSetCountdown={this.handleSetCountdown.bind(this)} />
			}
		}
		return (
			<div>
				<Clock totalSeconds={count} />
				{renderControlsArea()}
			</div>
		);	
	}
}
	

module.exports = Countdown;