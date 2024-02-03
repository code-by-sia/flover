export const createCategoriesMenu = (categories) => ({
  id: '/categories/all',
  value: 'Alle',
  icon: 'Folder',
  openIcon: 'FolderOpen',
  items: categories?.map(({ id, value }) => ({
    id: `/categories/${id}`,
    icon: 'Tag',
    value,
  })),
})

export const NewCategories = {
  id: '/categories/new',
  value: 'Neueste',
  icon: 'Clock',
}
export const Flagged = {
  id: '/categories/flagged',
  value: 'Will ich kochen',
  icon: 'Flag',
}
export const WishList = {
  id: '/categories/wishlist',
  value: 'Favoriten',
  icon: 'Heart',
}

export const Uncategorized = {
  id: '/categories/uncategorized',
  value: 'Unkategorisiert',
  icon: 'Tag',
}

export const createRssFeedMenu = (rss) => ({
  id: '/feeds/all',
  value: 'Feeds',
  icon: 'Rss',
  items: rss?.map(({ id, value }) => ({
    id: `/feeds/${id}`,
    icon: 'Bookmark',
    value,
  })),
})

export const Browser = {
  id: '/browser',
  value: 'Browser',
  icon: 'Window',
}
export const Calendar = {
  id: '/calendar',
  value: 'Kalendar',
  icon: 'CalendarDays',
}
export const Basket = {
  id: '/grocory-list',
  value: 'Einkafsliste',
  icon: 'ShoppingBag',
}
