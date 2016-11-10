import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import CountdownForm from '../../components/CountdownForm';

describe('CountdownForm', () => {
	it('should render', () => {
		expect(CountdownForm).toExist();
	});

	it('should call onSetCountdown if valid seconds are entered', () => {
		var spy = expect.createSpy();
		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
		var $el = $(ReactDOM.findDOMNode(countdownForm)); 
		countdownForm.refs.seconds.value = '109';
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(109);
	});

	it('should not call onSetCountdown if invalid seconds are entered', () => {
		var spy = expect.createSpy();
		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
		var $el = $(ReactDOM.findDOMNode(countdownForm)); 
		countdownForm.refs.seconds.value = '109b';
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});
});