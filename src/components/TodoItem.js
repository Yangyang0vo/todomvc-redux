// @ts-nocheck
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeDone, changeName, delTodo } from '../store/slice/todosSlice'
export default function TodoItem({ item }) {
  const dispatch = useDispatch()
  const [current, setCurrent] = useState('')
  const inputRef = useRef(null)
  // 删除todo
  const del = (id) => {
    dispatch(delTodo(id))
  }
  // 修改todo状态
  const change = (id, done) => {
    dispatch(changeDone({ id, done }))
  }
  //
  const showEdit = (id) => {
    setCurrent(id)
  }
  useEffect(() => {
    inputRef.current.focus()
  }, [current])

  const onKeyUp = (e, id) => {
    if (e.keyCode === 27) {
      setCurrent('')
    }
    if (e.keyCode === 13) {
      //
      const name = e.target.value
      dispatch(changeName({ id, name }))
      setCurrent('')
    }
  }
  return (
    <li className={[item.done ? 'completed' : '', item.id === current ? 'editing' : ''].join(' ')}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={item.done} onChange={(e) => change(item.id, e.target.checked)} />
        <label onDoubleClick={() => showEdit(item.id)}>{item.name}</label>
        <button
          className="destroy"
          onClick={() => {
            del(item.id)
          }}
        />
      </div>
      <input className="edit" defaultValue={item.name} ref={inputRef} onBlur={() => setCurrent('')} onKeyUp={(e) => onKeyUp(e, item.id)} />
    </li>
  )
}
