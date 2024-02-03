import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { dataSlice, initializeData } from '@/services/data-service'

const rootReducer = combineReducers({
  [dataSlice.reducerPath]: dataSlice.reducer,
})

export const store = configureStore({ reducer: rootReducer })

setupListeners(store.dispatch)

store.dispatch(initializeData())
