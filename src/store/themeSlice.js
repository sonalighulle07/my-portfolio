import { createSlice } from '@reduxjs/toolkit'

export const THEME_KEY = 'portfolio-theme'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark'
  try {
    const stored = window.localStorage.getItem(THEME_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    /* storage unavailable */
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: { mode: getInitialTheme() },
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === 'dark' ? 'light' : 'dark'
    },
    setTheme(state, action) {
      state.mode = action.payload === 'light' ? 'light' : 'dark'
    },
  },
})

export const { toggleTheme, setTheme } = themeSlice.actions
export const selectTheme = (state) => state.theme.mode
export default themeSlice.reducer
