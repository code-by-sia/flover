import { Outlet } from 'react-router-dom'
import List from '@/components/list'
import DrawerHeader from '@/components/container/drawe-header'
import moment from 'moment'
import { useMemo } from 'react'
import Icon from '@/components/icon'
import classNames from 'classnames'
import './calendar.scss'

function Day({ value, isSameDay, isSameYear }) {
  return (
    <li
      className={classNames('date', {
        today: isSameDay,
        'another-year': !isSameYear,
      })}
    >
      <h1>{value.format('DD')}</h1>
      <div id={isSameDay ? 'today-date' : undefined}>
        <span>{value.format('dddd')}</span>
        <small>
          {value.format('MMMM')}
          &nbsp;
          {isSameYear ? '' : value.format('YYYY')}
        </small>
      </div>
      <Icon name="Plus" />
    </li>
  )
}

export default function CalendarPage() {
  const dates = useMemo(() => {
    const today = moment()
    const start = moment().startOf('year')
    return [...Array(1_000)]
      .map((_, i) => moment(start).add(i, 'day'))
      .map((it) => ({
        id: it,
        value: it,
        isSameDay: it.isSame(today, 'day'),
        isSameYear: it.isSame(today, 'year'),
      }))
  }, [])

  console.log([...dates])

  return (
    <>
      <List
        className="calendar-page"
        items={dates}
        view={Day}
        title={
          <DrawerHeader>
            <div className="title">Kalendar</div>
            <a href="#today-date">
              <Icon name="Bar2" />
            </a>
          </DrawerHeader>
        }
      />
      <Outlet />
    </>
  )
}
