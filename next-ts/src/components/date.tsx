import { parseISO, format } from 'date-fns'
import { DateString } from '../types/types'

export const Date = ({ dateString }: DateString) => {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
  )
}