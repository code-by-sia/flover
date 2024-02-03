import SideBar from '@/components/side-bar'
import { Outlet } from 'react-router-dom'
import './home.scss'

export default function HomePage() {
  return (
    <div className="page home">
      <SideBar />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  )
}
