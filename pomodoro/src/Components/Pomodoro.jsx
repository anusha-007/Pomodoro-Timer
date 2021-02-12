import React from 'react'


import styles from "./Pomodoro.module.css"

export const Pomodoro = () => {
    return (
        <div className = {styles.container}>
            <h1>Pomodoro Timer</h1>
            <div className = {styles.image_container}>
                 <div className = {styles.center}>
                     <div>
                         <h3>keep working</h3>
                         <h1>25 :00</h1>
                         <button className = {styles.button}>start</button>
                     </div>
                 </div>

            </div>

            <div className = {styles.timerSettings}>

                <div className = {styles.work}>
                    <p>work duration</p>
                    <button className = {styles.button_settings}>+</button>
                    <div>5 mins</div>
                    <button className = {styles.button_settings}>-</button>
                </div>
                <div>
                <button className = {styles.reset}>reset</button>


                </div>

                <div className = {styles.break}>
                    <p>break duration</p>
                    <button className = {styles.button_settings}>+</button>
                    <div>5 mins</div>
                    <button className = {styles.button_settings}>-</button>
                </div>
            </div>
        </div>
    )
}
