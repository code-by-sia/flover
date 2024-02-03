import classNames from 'classnames'
import React from 'react'
import './input.scss'

export default function Input({ className, type, ...props }) {
  return (
    <input type={type} className={classNames('input', className)} {...props} />
  )
}

export function TextInput({ className, value, onChange, ...props }) {
  return (
    <Input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
      {...props}
    />
  )
}
export function PasswordInput({ className, value, onChange, ...props }) {
  return (
    <Input
      type="password"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
      {...props}
    />
  )
}
