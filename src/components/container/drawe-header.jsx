import Icon from '@/components/icon'
import './drawer-header.scss'
import Spacer from '@/components/spacer'

export default function DrawerHeader({ children }) {
  return (
    <div className="drawer-header">
      <Icon name="ViewColumns" />
      {children}
    </div>
  )
}
