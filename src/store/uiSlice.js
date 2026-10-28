import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: { menuOpen: false, scrolled: false, activeSection: 'about' },
  reducers: {
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen
    },
    closeMenu(state) {
      state.menuOpen = false
    },
    setScrolled(state, action) {
      state.scrolled = action.payload
    },
    setActiveSection(state, action) {
      state.activeSection = action.payload
    },
  },
})

export const { toggleMenu, closeMenu, setScrolled, setActiveSection } = uiSlice.actions
export const selectMenuOpen = (s) => s.ui.menuOpen
export const selectScrolled = (s) => s.ui.scrolled
export const selectActiveSection = (s) => s.ui.activeSection
export default uiSlice.reducer
