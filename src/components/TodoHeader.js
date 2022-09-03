// @ts-nocheck
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/slice/todosSlice'
const TodoAdd = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      if (name.trim() === '') return setName('')
      // 分发任务  添加todo
      dispatch(addTodo(name))
      // 清空input
      setName('')
    }
  }
  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus value={name} onChange={(e) => setName(e.target.value)} onKeyUp={onKeyUp} />
    </header>
  )
}

export default TodoAdd
