import React from 'react'

import styles from './PerspectiveBackground.module.css'

const PerspectiveBackground = ({ children, className = '', ...delegated }) => {
  return (
    <div
      className={`${styles.perspectiveBackground} ${className}`}
      {...delegated}
    >
      {children}
    </div>
  )
}

export default PerspectiveBackground
