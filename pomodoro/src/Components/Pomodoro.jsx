import React, { useState, useEffect } from "react";
import { useTimer } from "../Hooks/useTimer";

import styles from "./Pomodoro.module.css";

export const Pomodoro = () => {
    const [initialTime, useInitialTime] = useState(25);
    const [workDuration, setWorkDuration] = useState(25);
    const [breakDuration, , setBreakDuration] = useState(5);

    const { startTimer, stopTimer, resetTimer,running, displayTimeFormat } = useTimer(
        initialTime
    );
    // const [answer] = useTimer(timer)

    const handleWorkDurInc = () => {
        setWorkDuration((prev) => prev + 5);
    };
    const handleWorkDurDec = () => {
        setWorkDuration((prev) => prev - 5);
    };

    return (
        <div className={styles.container}>
            <h1>Pomodoro Timer</h1>
            <div className={styles.image_container}>
                <div className={styles.center}>
                    <div>
                        <h1>{displayTimeFormat}</h1>
                        {running && (
                            <button
                                className={styles.button}
                                onClick={() => stopTimer()}
                            >
                                stop
                            </button>
                        )}
                        {!running && (
                            <button
                                className={styles.button}
                                onClick={() => startTimer()}
                            >
                                start
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className={styles.timerSettings}>
                <div className={styles.work}>
                    <p>work duration</p>
                    <button
                        onClick={handleWorkDurInc}
                        disabled={workDuration >= 60}
                        className={styles.button_settings}
                    >
                        +
                    </button>
                    <div>{workDuration} mins</div>
                    <button
                        onClick={handleWorkDurDec}
                        disabled={workDuration <= 5}
                        className={styles.button_settings}
                    >
                        -
                    </button>
                </div>
                <div>
                    <button className={styles.reset} onClick= {resetTimer}>reset</button>
                </div>

                <div className={styles.break}>
                    <p>break duration</p>
                    <button className={styles.button_settings}>+</button>
                    <div>5 mins</div>
                    <button className={styles.button_settings}>-</button>
                </div>
            </div>
        </div>
    );
};
