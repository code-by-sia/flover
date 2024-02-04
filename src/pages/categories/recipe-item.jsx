import Tag from '@/components/tag'

import './recipe-item.scss'

export default function RecipeItem({
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
            <Tag icon="Clock">{timing.total}</Tag>
            <Tag icon="Tag">{category.name}</Tag>
            <Tag icon="Bookmark">{source.id}</Tag>
          </div>
          <p>{intro}</p>
        </div>
      </div>
    </li>
  )
}
