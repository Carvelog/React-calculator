import React from 'react'
import styles from './Display.module.css'

const Display = (props) => {
  return (
    <div className={styles.display}>
      <div className={styles['operation-digits']}>
        {props.formula.replace(',', '')}
      </div>
      <div className={styles['operation-result']}>
        {props.result.result}
      </div>
    </div>
  )
}

export default Display
