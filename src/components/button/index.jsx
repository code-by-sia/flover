import React from 'react'
import classNames from 'classnames'
import './button.scss'

export default function Button({ className, children, disabled, ...rest }) {
  return (
    <button
      className={classNames('button', className, { disabled: !disabled })}
      {...rest}
    >
      {children}
    </button>
  )
}
