import moment from 'moment'
import { useMemo } from 'react'
import Icon from '@/components/icon'
import { SideBarListPage } from '@/components/container/side-bar'
import Day from '@/pages/calendar/day'
import './calendar.scss'

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

  return (
    <SideBarListPage className="calendar-page" items={dates} view={Day}>
      <div className="title">Kalendar</div>
      <a href="#today-date">
        <Icon name="Bar2" />
      </a>
    </SideBarListPage>
  )
}
