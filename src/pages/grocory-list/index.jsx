import React from 'react'
import Icon from '@/components/icon'
import { SideBarListPage } from '@/components/container/side-bar'

export default function GrocoryListPage() {
  return (
    <SideBarListPage>
      <div className="title">Einkaufsliste</div>
      <Icon name="Plus" />
      <Icon name="Trash" />
    </SideBarListPage>
  )
}
