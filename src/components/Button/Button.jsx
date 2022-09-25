import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={props.value === '=' ? `${styles.button} ${styles.equal}` : props.value === 'C' ? `${styles.button} ${styles.clear}` : styles.button} value={props.value}>{props.children}</button>
  )
}

export default Button
