import React from 'react'
import classNames from 'classnames'

export default function FormHeader({ title, subtitle, icon: Icon, className }) {
  return (
    <header className={classNames('form-header', className)}>
      <h1>
        {Icon && <Icon className="icon" />} {title}
      </h1>
      {subtitle && <span>{subtitle}</span>}
    </header>
  )
}
