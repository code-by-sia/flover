import React from 'react'
import Icon from '@/components/icon'
import Input from '@/components/input'
import ExtractRecipe from '@/pages/browser/extract-recipe'
import DrawerHeader from '@/components/container/drawe-header'
import './browser.scss'

export default function BrowserPage() {
  return (
    <>
      <div className="browser">
        <DrawerHeader>
          <Icon name="ChevronLeft" />
          <Icon name="ChevronRight" />
          <div className="url-input">
            <Input value="delish.com" />
          </div>
          <Icon name="BookOpen" />
          <Icon name="ArrowUpOnSquare" />
        </DrawerHeader>
      </div>
      <ExtractRecipe />
    </>
  )
}
