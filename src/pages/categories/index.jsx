import { Outlet, useParams } from 'react-router-dom'
import List from '@/components/list'
import { Recipes } from '@/pages/categories/data'
import { useMemo } from 'react'
import DrawerHeader from '@/components/container/drawe-header'
import useQuery from '@/services/query'
import RecipeItem from '@/pages/categories/recipe-item'
import './categories.scss'
import Icon from '@/components/icon'

function CategoryHeader({ name, count }) {
  return (
    <DrawerHeader>
      <div className="title">
        <strong>{name}</strong>
        <small>{count} Rezepte</small>
      </div>
      <Icon name="MagnifyingGlass" />
      <Icon name="PlusCircle" />
    </DrawerHeader>
  )
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
