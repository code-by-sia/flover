import {
  createAction,
  createAsyncThunk,
  createReducer,
  createSlice,
} from '@reduxjs/toolkit'
import { AppDatabase } from '@/services/database'

export const fetchAllCategories = createAsyncThunk(
  `data/fetchAllCategories`,
  async () => await AppDatabase.getAll('categories')
)

export const fetchAllRssFeeds = createAsyncThunk(
  `data/fetchAllRssFeeds`,
  async () => await AppDatabase.getAll('rss')
)

export const initializeData = createAsyncThunk(
  'data/initialize',
  async (_, { dispatch }) => {
    await AppDatabase.addAll('categories', [
      { id: 'backery', value: 'Bäckerei' },
      { id: 'breakfst', value: 'Frühstück' },
      { id: 'vegan', value: 'Veganer' },
    ])

    await AppDatabase.addAll('rss', [
      { id: 1, value: 'BBC', url: 'https://www.bbcgoodfood.com/' },
      {
        id: 2,
        value: 'Simply Recipes',
        url: 'https://www.simplyrecipes.com/',
      },
    ])

    await dispatch(fetchAllCategories())
    await dispatch(fetchAllRssFeeds())
  }
)

const initialState = {
  categories: [],
  rss: [],
}

export const dataSlice = createSlice({
  initialState,
  name: 'data',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
      state.categories = action.payload
    })
    builder.addCase(fetchAllRssFeeds.fulfilled, (state, action) => {
      state.rss = action.payload
    })
  },
})
