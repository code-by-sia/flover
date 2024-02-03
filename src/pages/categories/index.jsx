import { Outlet, useLocation, useParams } from 'react-router-dom'
import List from '@/components/list'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import {
  ViewColumnsIcon,
  MagnifyingGlassIcon,
  BookmarkIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'
import { Recipes } from '@/pages/categories/data'
import './categories.scss'
import { useEffect, useMemo, useState } from 'react'
import { AppDatabase } from '@/services/database'

function CategoryHeader({ name, count }) {
  return (
    <>
      <ViewColumnsIcon className="icon" />

      <div className="title">
        <strong>{name}</strong>
        <small>{count} Rezepte</small>
      </div>
      <MagnifyingGlassIcon className="icon" />
      <PlusCircleIcon className="icon" />
    </>
  )
}

function RecipeItem({
  id,
  intro,
  name,
  description,
  images = [],
  category,
  source,
  timing,
  tag,
}) {
  return (
    <li>
      <div className="recipe">
        <img alt={name} src={images[0]} />
        <div className="info">
          <strong className="title">{name}</strong>
          <div className="attributes">
            <span>
              <ClockIcon className="icon" />
              {timing.total}
            </span>
            <span>
              <ClockIcon className="icon" />
              {category.name}
            </span>
            <span>
              <BookmarkIcon className="icon" /> {source.id}
            </span>
          </div>
          <p>{intro}</p>
        </div>
      </div>
    </li>
  )
}

function useQuery(name, key) {
  const [x, setX] = useState()
  useEffect(() => {
    AppDatabase.get(name, key).then(setX)
  }, [name, key])

  return x
}

export default function CategoriesHomePage() {
  const { categoryId } = useParams()
  const category = useQuery('categories', categoryId)
  const title = useMemo(
    () => category?.value || categoryId,
    [categoryId, category]
  )
  return (
    <>
      <List
        className="categories"
        items={Recipes}
        view={RecipeItem}
        title={<CategoryHeader name={title} count={6} />}
      />
      <Outlet />
    </>
  )
}
