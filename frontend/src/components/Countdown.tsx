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

let strokeDashoffsetCalculation = (countdown, seconds, circumference):number =>
    circumference -
    (countdown / seconds) * circumference

export default function Countdown({seconds, size, countdown, strokeBgColor, strokeColor, strokeWidth, isPlaying}: Props) {

    let radius = size / 2;
    let circumference = size * Math.PI;
    let strokeDashoffset = strokeDashoffsetCalculation(countdown, seconds, circumference)

    const countdownSizeStyles = {
        height: size,
        width: size,
    };

    const textStyles = {
        color: strokeColor,
        fontSize: size * 0.3,
    };

    const secondsLeft = countdown.toFixed();

    return (
        <div>
            <div
                className={
                    styles.countdownContainer
                }
                style={countdownSizeStyles}
            >
                <p style={textStyles}>{secondsLeft}s</p>
                <svg className={styles.svg}>
                    <circle
                        cx={radius}
                        cy={radius}
                        r={radius}
                        fill="none"
                        stroke={strokeBgColor}
                        strokeWidth={strokeWidth}
                    ></circle>
                </svg>
                <svg className={styles.svg}>
                    <circle
                        strokeDasharray={circumference}
                        strokeDashoffset={
                            isPlaying ? strokeDashoffset : 0
                        }
                        r={radius}
                        cx={radius}
                        cy={radius}
                        fill="none"
                        strokeLinecap="square"
                        stroke={strokeColor}
                        strokeWidth={strokeWidth}
                    ></circle>
                </svg>
            </div>
        </div>
    );
}
