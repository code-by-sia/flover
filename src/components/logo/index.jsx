import React from 'react'
import classNames from 'classnames'
import { FireIcon } from '@heroicons/react/16/solid'
import './logo.scss'

export default function Logo({ className }) {
  return (
    <h1 className={classNames('logo', className)}>
      <FireIcon className="icon" />
      <div>
        Flavor <span>Notes</span>
      </div>
    </h1>
  )
}
