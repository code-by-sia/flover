import classNames from 'classnames'
import { Outlet } from 'react-router-dom'
import List from '@/components/list'
import DrawerHeader from '@/components/container/drawe-header'

import './side-bar-list.scss'

export default function SideBarList({ className, items, view, children }) {
  return (
    <List
      className={classNames(className, 'side-bar-list')}
      items={items}
      view={view}
      title={<DrawerHeader>{children}</DrawerHeader>}
    />
  )
}

export function SideBarListPage({ className, items, view, children }) {
  return (
    <>
      <SideBarList className={className} items={items} view={view}>
        {children}
      </SideBarList>
      <Outlet />
    </>
  )
}
