import React from 'react'
import styles from './ButtonComponent.module.scss'

const ButtonComponent = ({ id, name, func }: { id: number; name: string, func():void }) => {
  return (
    <div style={id === 1 ? { marginRight: '1.7vw' } : {}}>
      <button className={styles.bttn} onClick={func}>{name}</button>
    </div>
  )
}

export default ButtonComponent
