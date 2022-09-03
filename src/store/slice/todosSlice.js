// @ts-nocheck
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// 异步action 用于获取数据
export const getList = createAsyncThunk('todos/getList', async () => {
  const res = await axios.get('http://localhost:8888/todos')
  return res.data
})

export const addTodo = createAsyncThunk('todos/addTodo', async (name) => {
  const res = await axios.post('http://localhost:8888/todos', {
    name,
    done: false
  })
  return res.data
})

export const delTodo = createAsyncThunk('todos/delTodo', async (id, { dispatch }) => {
  await axios.delete(`http://localhost:8888/todos/${id}`)
  dispatch(getList())
})

export const changeDone = createAsyncThunk('todos/changeDone', async ({ id, done }, { dispatch }) => {
  await axios({
    method: 'patch',
    url: `http://localhost:8888/todos/${id}`,
    data: {
      done
    }
  })
  dispatch(getList())
})

export const changeName = createAsyncThunk('todos/changeDone', async ({ id, name }, { dispatch }) => {
  await axios({
    method: 'patch',
    url: `http://localhost:8888/todos/${id}`,
    data: {
      name
    }
  })
  dispatch(getList())
})
const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    list: []
  },
  reducers: {},
  // extraReducers: {
  //   [getList.fulfilled](state, { payload }) {
  //     state.list = payload
  //   },
  //   [addTodo.fulfilled]({ list }, { payload }) {
  //     list.push(payload)
  //   }
  // }
  extraReducers: (builder) => {
    builder.addCase(getList.fulfilled, (state, { payload }) => {
      state.list = payload
    })
    builder.addCase(addTodo.fulfilled, ({ list }, { payload }) => {
      list.push(payload)
    })
  }
})

// export const {  } = todosSlice.actions

export default todosSlice.reducer
