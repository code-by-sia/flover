import { useParams } from 'react-router-dom'
import { Recipes } from '@/pages/categories/data'
import { useMemo } from 'react'
import useQuery from '@/services/query'
import RecipeItem from '@/pages/categories/recipe-item'
import Icon from '@/components/icon'
import { Categories } from '@/services/categories'
import Button from '@/components/button'
import { SideBarListPage } from '@/components/container/side-bar'

import './categories.scss'

export default function CategoriesHomePage() {
  const { categoryId, recipeId } = useParams()
  const category = useQuery('categories', categoryId)
  const title = useMemo(
    () => category?.value || Categories[categoryId]?.value || categoryId,
    [categoryId, category]
  )

  return (
    <>
      <SideBarListPage view={RecipeItem} items={Recipes}>
        <div className="title">
          <strong>{title}</strong>
          <small>{6} Rezepte</small>
        </div>
        <Icon name="MagnifyingGlass" />
        <Icon name="SolidPlusCircle" />
      </SideBarListPage>

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
