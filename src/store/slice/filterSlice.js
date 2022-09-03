import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: 'All',
  reducers: {
    changeState: (state, action) => {
      return (state = action.payload)
    }
  }
})
export const { changeState } = filterSlice.actions
export default filterSlice.reducer
