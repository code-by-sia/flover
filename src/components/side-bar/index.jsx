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
import './side-bar.scss'

export default function SideBar() {
  const { categories, rss } = useSelector((state) => state.data)
  const { pathname } = useLocation()
  const All = createCategoriesMenu(categories)
  const RssFeeds = createRssFeedMenu(rss)

  return (
    <aside className="side-bar">
      <Logo />
      <TreeNav
        items={[All, NewCategories, Flagged, WishList, Uncategorized]}
        value={pathname}
      />
      <TreeNav items={[RssFeeds, Browser, Calendar, Basket]} value={pathname} />
    </aside>
  )
}
