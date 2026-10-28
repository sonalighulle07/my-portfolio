import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { profile } from '../data/profile'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export const initialForm = { name: '', email: '', subject: '', message: '' }

export function validate(form) {
  const errors = {}
  if (form.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!EMAIL_RE.test(form.email.trim())) errors.email = 'Enter a valid email address.'
  if (form.subject.trim().length < 3) errors.subject = 'Add a short subject.'
  if (form.message.trim().length < 12) errors.message = 'Tell me a little more (12+ characters).'
  return errors
}

/**
 * Sends through Formspree when profile.formspreeId is set;
 * otherwise opens the visitor's email app with everything pre-filled.
 */
export const submitContact = createAsyncThunk('contact/submit', async (form, { rejectWithValue }) => {
  const payload = {
    name: form.name.trim(),
    email: form.email.trim(),
    subject: form.subject.trim(),
    message: form.message.trim(),
  }

  if (profile.formspreeId) {
    const res = await fetch(`https://formspree.io/f/${profile.formspreeId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) return rejectWithValue('request-failed')
    return 'sent'
  }

  const subject = encodeURIComponent(payload.subject)
  const body = encodeURIComponent(`${payload.message}\n\n---\n${payload.name}\n${payload.email}`)
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  return 'mailto'
})

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    form: initialForm,
    errors: {},
    status: 'idle', // idle | sending | sent | error
    via: null, // 'mailto' | 'sent'
  },
  reducers: {
    updateField(state, action) {
      const { field, value } = action.payload
      state.form[field] = value
      if (state.errors[field]) delete state.errors[field]
    },
    setErrors(state, action) {
      state.errors = action.payload
    },
    resetStatus(state) {
      state.status = 'idle'
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContact.pending, (state) => {
        state.status = 'sending'
      })
      .addCase(submitContact.fulfilled, (state, action) => {
        state.status = 'sent'
        state.via = action.payload
        state.form = initialForm
      })
      .addCase(submitContact.rejected, (state) => {
        state.status = 'error'
      })
  },
})

export const { updateField, setErrors, resetStatus } = contactSlice.actions
export default contactSlice.reducer
