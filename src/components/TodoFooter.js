// @ts-nocheck
import { useDispatch, useSelector } from 'react-redux'
import { changeState } from '../store/slice/filterSlice'

const TodoFooter = () => {
  const arr = ['All', 'Active', 'Completed']
  const type = useSelector((state) => state.filter)
  const dispatch = useDispatch()
  const count = useSelector((state) => state.todos.list.filter((item) => !item.done).length)
  const changeType = (item) => {
    dispatch(changeState(item))
  }
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{count}</strong> item left
      </span>
      <ul className="filters">
        {arr.map((item) => (
          <li key={item}>
            <a className={item === type ? 'selected' : ''} href="#/" onClick={() => changeType(item)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}

export default TodoFooter
