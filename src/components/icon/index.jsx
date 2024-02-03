import {
  BookmarkIcon,
  CalendarDaysIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ClockIcon,
  FlagIcon,
  FolderIcon,
  FolderOpenIcon,
  HeartIcon,
  RssIcon,
  ShoppingBagIcon,
  TagIcon,
  WindowIcon,
} from '@heroicons/react/24/outline'
import classNames from 'classnames'

const ICONS = {
  Clock: ClockIcon,
  Flag: FlagIcon,
  Folder: FolderIcon,
  FolderOpen: FolderOpenIcon,
  Heart: HeartIcon,
  Tag: TagIcon,
  Rss: RssIcon,
  Bookmark: BookmarkIcon,
  Window: WindowIcon,
  CalendarDays: CalendarDaysIcon,
  ShoppingBag: ShoppingBagIcon,
  ChevronDown: ChevronDownIcon,
  ChevronRight: ChevronRightIcon,
  ChevronLeft: ChevronLeftIcon,
  ChevronUp: ChevronUpIcon,
}

export default function Icon({ name, className, ...props }) {
  const IC = ICONS[name]
  if (!IC) return <></>
  return <IC className={classNames('icon', className)} {...props} />
}
