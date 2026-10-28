import { configureStore } from '@reduxjs/toolkit'
import themeReducer, { THEME_KEY } from './themeSlice'
import uiReducer from './uiSlice'
import projectsReducer from './projectsSlice'
import contactReducer from './contactSlice'

export function makeStore() {
  return configureStore({
    reducer: {
      theme: themeReducer,
      ui: uiReducer,
      projects: projectsReducer,
      contact: contactReducer,
    },
  })
}

export const store = makeStore()

/** Keeps <html> class + localStorage in sync with the theme slice. */
export function syncTheme(mode) {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  root.classList.toggle('dark', mode === 'dark')
  root.style.colorScheme = mode
  try {
    window.localStorage.setItem(THEME_KEY, mode)
  } catch {
    /* storage unavailable */
  }
}
