import React from 'react'
import Icon from '@/components/icon'
import { SideBarListPage } from '@/components/container/side-bar'
import './browser.scss'
import Input from '@/components/input'

export default function BrowserPage() {
  return (
    <SideBarListPage className="browser">
      <Icon name="ChevronLeft" />
      <Icon name="ChevronRight" />
      <div className="url-input">
        <Input value="test.com" />
      </div>
      <Icon name="BookOpen" />
      <Icon name="ArrowUpOnSquare" />
    </SideBarListPage>
  )
}
