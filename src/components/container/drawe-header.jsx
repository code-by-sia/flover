import Icon from '@/components/icon'
import './drawer-header.scss'

export default function DrawerHeader({ children }) {
  return (
    <div className="drawer-header">
      <Icon name="ViewColumns" />
      {children}
    </div>
  )
}
