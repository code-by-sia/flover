import Tag from '@/components/tag'
import Spacer from '@/components/spacer'
import './extract-recipe.scss'

const MOCK = {
  title: 'Steak & Potato Skillet',
  source: 'delish.com',
  proportion: 4,
  timing: {
    total: '30min',
    prep: '10min',
  },
}

export default function ExtractRecipe() {
  const extracted = MOCK
  return (
    <aside className="new-recipe">
      <h1 className="title">{extracted.title} </h1>
      <div className="attributes">
        <Tag icon="BookOpen">{extracted.source}</Tag>
        <Tag icon="People">{extracted.proportion} serving(s)</Tag>
        <Tag icon="Clock">
          <span>
            {extracted.timing.total}
            <small>PREP</small>
          </span>
        </Tag>
        <Tag>
          <span>
            {extracted.timing.total}
            <small>TOTAL</small>
          </span>
        </Tag>
      </div>
    </aside>
  )
}
