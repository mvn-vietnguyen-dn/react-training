import { Component } from "react";

interface CircleProps {
  number: number;
  circleSize: number | string;
  isCountdowning?: boolean;
}

interface CircleState {
  number: number;
  isCountdowning: boolean;
}

class Circle extends Component<CircleProps, CircleState> {
  interval: any;
  colors: string[];
  color: string;

  constructor(props: CircleProps) {
    super(props);

    this.toggleCountdown = this.toggleCountdown.bind(this);
    this.colors = [
      "lightblue",
      "lightgreen",
      "lightpink",
      "lightcoral",
      "lightsalmon",
      "lightyellow",
      "lightgrey",
      "limegreen",
      "purple",
      "plum",
    ];
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  state: CircleState = {
    number: this.props.number,
    isCountdowning: !!this.props.isCountdowning,
  };

  componentDidMount() {
    if (this.state.isCountdowning) {
      this.startCountdown();
    } else {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate() {
    if (this.state.number === 0) {
      clearInterval(this.interval);
    }
  }

  startCountdown() {
    this.interval = setInterval(() => {
      this.setState((prev) => {
        if (prev.number > 0) {
          return { ...prev, number: prev.number - 1 };
        }
        return prev;
      });
    }, 1000);
  }

  toggleCountdown() {
    if (this.state.isCountdowning) {
      clearInterval(this.interval);
    } else {
      this.startCountdown();
    }
    this.setState({ isCountdowning: !this.state.isCountdowning });
  }

  render() {
    const { number, isCountdowning } = this.state;
    const { circleSize } = this.props;

    return (
      <div className="circle-content">
        <button
          disabled={number === 0}
          className="btn-toggle"
          onClick={this.toggleCountdown}
        >
          {number === 0 ? "FINISHED" : isCountdowning ? "STOP" : "START"}
        </button>
        <div
          className="circle"
          style={{
            width: `${circleSize}px`,
            height: `${circleSize}px`,
            backgroundColor: this.color,
          }}
        >
          {number}
        </div>
      </div>
    );
  }
}

export default Circle;
