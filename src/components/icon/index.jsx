import {
  ArchiveBoxIcon,
  Bars2Icon,
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
  MagnifyingGlassIcon,
  PlusIcon,
  RssIcon,
  ShoppingBagIcon,
  TagIcon,
  ViewColumnsIcon,
  WindowIcon,
  PlusCircleIcon,
  NewspaperIcon,
  ArrowPathIcon,
  SquaresPlusIcon,
  TrashIcon,
  BookOpenIcon,
  ArrowUpOnSquareIcon,
} from '@heroicons/react/24/outline'
import classNames from 'classnames'
import { PlusCircleIcon as SolidPlusCircleIcon } from '@heroicons/react/24/solid'

const ICONS = {
  Clock: ClockIcon,
  Flag: FlagIcon,
  Folder: FolderIcon,
  FolderOpen: FolderOpenIcon,
  Heart: HeartIcon,
  Tag: TagIcon,
  Rss: RssIcon,
  Bookmark: BookmarkIcon,
  BookOpen: BookOpenIcon,
  Window: WindowIcon,
  CalendarDays: CalendarDaysIcon,
  ShoppingBag: ShoppingBagIcon,
  ChevronDown: ChevronDownIcon,
  ChevronRight: ChevronRightIcon,
  ChevronLeft: ChevronLeftIcon,
  ChevronUp: ChevronUpIcon,
  MagnifyingGlass: MagnifyingGlassIcon,
  ViewColumns: ViewColumnsIcon,
  PlusCircle: PlusCircleIcon,
  SolidPlusCircle: SolidPlusCircleIcon,
  Plus: PlusIcon,
  ArchiveBox: ArchiveBoxIcon,
  Bar2: Bars2Icon,
  Newspaper: NewspaperIcon,
  ArrowPath: ArrowPathIcon,
  ArrowUpOnSquare: ArrowUpOnSquareIcon,
  SquaresPlus: SquaresPlusIcon,
  Trash: TrashIcon,
}

export default function Icon({ name, className, ...props }) {
  const IC = ICONS[name]
  if (!IC) return <></>
  return <IC className={classNames('icon', className)} {...props} />
}
