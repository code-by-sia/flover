import classNames from 'classnames'
import { ChevronUpDownIcon } from '@heroicons/react/24/outline'
import './data-table.scss'

function DefaultView({ name, row }) {
  return row[name]
}

function Cell({ name, view: View = DefaultView, row }) {
  return (
    <td>
      <View row={row} name={name} />
    </td>
  )
}

function Column({ label, name }) {
  return (
    <th key={name}>
      <span>
        {label} <ChevronUpDownIcon className="sort-icon" />
      </span>
    </th>
  )
}

export default function DataTable({
  className,
  columns = [],
  data = [],
  onRowClick,
}) {
  return (
    <table className={classNames(className, 'data-table')}>
      <thead>
        <tr>
          {columns.map((it) => (
            <Column key={it.name} label={it.label} name={it.name} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row, index) => (
          <tr key={index} onClick={() => onRowClick(row)}>
            {columns.map((column) => (
              <Cell
                key={`${row}_${column.name}`}
                name={column.name}
                view={column.view}
                row={row}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
