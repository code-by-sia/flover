import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebar: {
    open: true,
  },
}

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebar.open = !state.sidebar.open
    },
  },
})

export const { toggleSidebar } = settingSlice.actions
