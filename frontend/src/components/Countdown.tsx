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

let milliseconds:number = 0
let radius:number = 0
let circumference:number = 0
let strokeDashoffset:number = 0
let strokeDashoffsetCalculation = (countdown):number =>
    circumference -
    (countdown / milliseconds) * circumference


export default class Countdown extends React.Component<Props> {

    constructor(props: Props) {
        super(props);

        milliseconds = this.props.seconds * 1000;
        radius = this.props.size / 2;
        circumference = this.props.size * Math.PI;

        strokeDashoffset = strokeDashoffsetCalculation(this.props.countdown)
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
                            cx={radius}
                            cy={radius}
                            r={radius}
                            fill="none"
                            stroke={this.props.strokeBgColor}
                            strokeWidth={this.props.strokeWidth}
                        ></circle>
                    </svg>
                    <svg className={styles.svg}>
                        <circle
                            strokeDasharray={circumference}
                            strokeDashoffset={
                                this.props.isPlaying ? strokeDashoffsetCalculation(this.props.countdown) : 0
                            }
                            r={radius}
                            cx={radius}
                            cy={radius}
                            fill="none"
                            strokeLinecap="square"
                            stroke={this.props.strokeColor}
                            strokeWidth={this.props.strokeWidth}
                        ></circle>
                    </svg>
                </div>
            </div>
        );
    }
}
