import React from 'react'

function DefaultView({ value }) {
  return <li>{value}</li>
}

export default function List({
  className,
  title,
  items = [],
  view: View = DefaultView,
  children,
  ...props
}) {
  return (
    <>
      <ul className={className}>
        <li className="header">{title}</li>
        {items.map((it) => (
          <View key={it.id} id={it.id} {...it} {...props} />
        ))}
      </ul>
      {children}
    </>
  )
}
