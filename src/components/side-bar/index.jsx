import Logo from '@/components/logo'
import { TreeNav } from '@/components/nav'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import {
  Basket,
  Browser,
  Calendar,
  createCategoriesMenu,
  createRssFeedMenu,
  Flagged,
  NewCategories,
  Uncategorized,
  WishList,
} from '@/components/side-bar/menu'
import classNames from 'classnames'
import './side-bar.scss'

export default function SideBar() {
  const { categories, rss, isSideBarOpen } = useSelector((state) => ({
    ...state.data,
    isSideBarOpen: state.setting.sidebar.open,
  }))
  const { pathname } = useLocation()
  const All = createCategoriesMenu(categories)
  const RssFeeds = createRssFeedMenu(rss)

  return (
    <aside className={classNames('side-bar', { open: isSideBarOpen })}>
      <Logo />
      <TreeNav
        items={[All, NewCategories, Flagged, WishList, Uncategorized]}
        value={pathname}
      />
      <TreeNav items={[RssFeeds, Browser, Calendar, Basket]} value={pathname} />
    </aside>
  )
}
