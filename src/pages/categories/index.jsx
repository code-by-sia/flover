import { Outlet, useParams } from 'react-router-dom'
import List from '@/components/list'
import { Recipes } from '@/pages/categories/data'
import { useMemo } from 'react'
import DrawerHeader from '@/components/container/drawe-header'
import useQuery from '@/services/query'
import RecipeItem from '@/pages/categories/recipe-item'
import Icon from '@/components/icon'
import { Categories } from '@/services/categories'
import Button from '@/components/button'
import './categories.scss'

function CategoryHeader({ name, count }) {
  return (
    <DrawerHeader>
      <div className="title">
        <strong>{name}</strong>
        <small>{count} Rezepte</small>
      </div>
      <Icon name="MagnifyingGlass" />
      <Icon name="SolidPlusCircle" />
    </DrawerHeader>
  )
}

export default function CategoriesHomePage() {
  const { categoryId, recipeId } = useParams()
  const category = useQuery('categories', categoryId)
  const title = useMemo(
    () => category?.value || Categories[categoryId]?.value || categoryId,
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
      {!recipeId && (
        <div className="categories-empty-page">
          <Button className="toolbar">
            <Icon name="PlusCircle" />
            Neues Rezept
          </Button>
          <Icon className="empty" name="Newspaper" />
        </div>
      )}
    </>
  )
}
