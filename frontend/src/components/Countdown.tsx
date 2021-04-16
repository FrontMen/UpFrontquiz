import * as React from "react";
import styles from "styles/countdown.module.scss";

type Props = {
    seconds: number;
    size: number;
    strokeBgColor: string;
    strokeColor: string;
    strokeWidth: number;
    countdown: number
    isPlaying: boolean;
};

export default class Countdown extends React.Component<Props> {
    milliseconds: number;
    radius: number;
    circumference: number;
    strokeDashoffset: () => number;

    constructor(props: Props) {
        super(props);

        this.milliseconds = this.props.seconds * 1000;
        this.radius = this.props.size / 2;
        this.circumference = this.props.size * Math.PI;

        this.strokeDashoffset = () =>
            this.circumference -
            (this.props.countdown / this.milliseconds) * this.circumference;
    }

    render() {
        const countdownSizeStyles = {
            height: this.props.size,
            width: this.props.size,
        };

        const textStyles = {
            color: this.props.strokeColor,
            fontSize: this.props.size * 0.3,
        };

        const seconds = (this.props.countdown / 1000).toFixed();

        return (
            <div>
                <div
                    className={
                        styles.countdownContainer
                    }
                    style={countdownSizeStyles}
                >
                    <p style={textStyles}>{seconds}s</p>
                    <svg className={styles.svg}>
                        <circle
                            cx={this.radius}
                            cy={this.radius}
                            r={this.radius}
                            fill="none"
                            stroke={this.props.strokeBgColor}
                            strokeWidth={this.props.strokeWidth}
                        ></circle>
                    </svg>
                    <svg className={styles.svg}>
                        <circle
                            strokeDasharray={this.circumference}
                            strokeDashoffset={
                                this.props.isPlaying ? this.strokeDashoffset() : 0
                            }
                            r={this.radius}
                            cx={this.radius}
                            cy={this.radius}
                            fill="none"
                            strokeLinecap="round"
                            stroke={this.props.strokeColor}
                            strokeWidth={this.props.strokeWidth}
                        ></circle>
                    </svg>
                </div>
            </div>
        );
    }
}
