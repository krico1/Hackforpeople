import React, { Component } from 'react';

class TimerInput extends React.Component {
    render() {
        return (
            <div style={{ marginLeft: 100 }}>
                <h3>Input your desired time</h3>
                <input type="number" minutes={this.props.minutes} required />
            </div>
        );
    }
}
class Timer extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{ fontSize: 100, marginLeft: 100 }}>{this.props.minutes}:{this.props.seconds}
                </h1>
            </div>
        );
    }
}
class StartButton extends React.Component {
    render() {
        return (
            <div style={{ marginLeft: 130 }}>
                <button onClick={this.props.startCountDown}>Start</button>
            </div>
        );
    }
}
class Meditation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: '00',
            minutes: ''
        }
        this.secondsRemaining;
        this.intervalHandle;
        this.handleChange = this.handleChange.bind(this);
        // method that triggers the countdown functionality
        this.startCountDown = this.startCountDown.bind(this);
        this.tick = this.tick.bind(this);
    }
    handleChange(event) {
        this.setState({
            minutes: event.target.value
        })
    }
    tick() {
        var min = Math.floor(this.secondsRemaining / 60);
        var sec = this.secondsRemaining - (min * 60);
        this.setState({
            minutes: min,
            seconds: sec
        })
        if (sec < 10) {
            this.setState({
                seconds: "0" + this.state.seconds,
            })
        }
        if (min < 10) {
            this.setState({
                value: "0" + min,
            })
        }
        if (min === 0 & sec === 0) {
            clearInterval(this.intervalHandle);
        }
        this.secondsRemaining--
    }
    startCountDown() {
        this.intervalHandle = setInterval(this.tick, 1000);
        let time = this.state.minutes;
        this.secondsRemaining = time * 60;
    }
}
export default Meditation;