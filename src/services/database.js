import { useEffect, useMemo, useState } from 'react'

class Database {
  constructor(name, schema = {}, version = 1) {
    this.name = name
    this.schema = schema
    this.version = version
  }

  get database() {
    return new Promise((resolve, reject) => {
      if (this.db) {
        resolve(this.db)
      } else {
        const request = window.indexedDB.open(this.name, this.version)
        request.onsuccess = (e) => {
          this.db = e.target.result
          resolve(this.db)
        }
        request.onupgradeneeded = (e) => {
          const db = e.target.result
          Object.entries(this.schema).forEach(
            ([
              name,
              options = {
                keyPath: 'id',
                autoIncrement: true,
              },
            ]) => {
              db.createObjectStore(name, options)
            }
          )
        }
        request.onerror = (e) => {
          reject(e.target.errorCode)
        }
      }
    })
  }

  async getAll(name) {
    const db = await this.database
    return await new Promise((resolve, reject) => {
      const req = db.transaction(name, 'readonly').objectStore(name).getAll()
      req.onsuccess = (_) => resolve(req.result)
      req.onerror = (e) => reject(e)
    })
  }

  async get(name, key) {
    const db = await this.database
    return await new Promise((resolve, reject) => {
      const req = db.transaction(name, 'readonly').objectStore(name).get(key)
      req.onsuccess = (_) => resolve(req.result)
      req.onerror = (e) => reject(e)
    })
  }

  async add(name, value) {
    const db = await this.database
    db.transaction(name, 'readwrite').objectStore(name).add(value)
  }

  async addAll(name, values = []) {
    values.forEach((value) => this.add(name, value))
  }
}

export const AppDatabase = new Database(
  'flavor',
  {
    categories: { keyPath: 'id' },
    rss: { keyPath: 'id', autoIncrement: true },
  },
  8
)

export function useDatabase(name) {
  return useMemo(() => AppDatabase, [name])
}
