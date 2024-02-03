import List from '@/components/list'

import { useState } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import Icon from '@/components/icon'
import './nav.scss'

function TreeItem({
  id,
  value,
  current,
  isOpen = false,
  icon,
  openIcon,
  items = [],
}) {
  const selected = id === current
  const [open, toggle] = useState(true)
  return (
    <li className={classNames({ open })}>
      <label className={classNames({ selected })}>
        {items?.length > 0 && (
          <Icon
            name={open ? 'ChevronDown' : 'ChevronRight'}
            className="toggle"
            onClick={(e) => {
              e.stopPropagation()
              toggle((i) => !i)
            }}
          />
        )}
        <Link className="link" to={id}>
          <Icon name={icon} />
          {value}
        </Link>
      </label>
      <List
        view={TreeItem}
        className={classNames('tree-nav')}
        items={items}
        current={current}
      />
    </li>
  )
}

export function TreeNav({ className, value, onChange, items = [] }) {
  return (
    <List
      className={classNames('tree-nav', className)}
      view={TreeItem}
      current={value}
      items={items}
    />
  )
}
