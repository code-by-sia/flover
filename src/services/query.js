import { useEffect, useState } from 'react'
import { AppDatabase } from '@/services/database'

export default function useQuery(name, key) {
  const [x, setX] = useState()
  useEffect(() => {
    AppDatabase.get(name, key).then(setX)
  }, [name, key])

  return x
}
