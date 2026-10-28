import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { projects } from '../data/profile'

const adapter = createEntityAdapter({ selectId: (p) => p.name })

const projectsSlice = createSlice({
  name: 'projects',
  // `open` controls the "Show / Hide details" toggle on each project card.
  initialState: adapter.setAll(
    adapter.getInitialState(),
    projects.map((p) => ({ ...p, open: true })),
  ),
  reducers: {
    toggleProject(state, action) {
      const entity = state.entities[action.payload]
      if (entity) entity.open = !entity.open
    },
  },
})

export const { toggleProject } = projectsSlice.actions
export const { selectAll: selectProjects, selectById: selectProjectById } = adapter.getSelectors(
  (state) => state.projects,
)
export default projectsSlice.reducer
