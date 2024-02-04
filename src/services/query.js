import { useEffect, useState } from 'react'
import { AppDatabase } from '@/services/database'

export default function useQuery(name, key, defaultValue) {
  const [x, setX] = useState()
  useEffect(() => {
    AppDatabase.get(name, key)
      .then(setX)
      .catch((_) => {
        setX(defaultValue)
      })
  }, [name, key])

  return x
}
