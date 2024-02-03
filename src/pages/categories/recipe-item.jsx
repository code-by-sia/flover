import Icon from '@/components/icon'

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
            <span>
              <Icon name="clock" />
              {timing.total}
            </span>
            <span>
              <Icon name="clock" />
              {category.name}
            </span>
            <span>
              <Icon name="Bookmark" />
              {source.id}
            </span>
          </div>
          <p>{intro}</p>
        </div>
      </div>
    </li>
  )
}
