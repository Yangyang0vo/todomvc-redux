// @ts-nocheck
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'
const TodoMain = () => {
  const list = useSelector((state) => {
    const { list } = state.todos
    const type = state.filter
    if (type === 'Active') {
      return list.filter((item) => !item.done)
    } else if (type === 'Completed') {
      return list.filter((item) => item.done)
    } else {
      return list
    }
  })

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {list.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  )
}

export default TodoMain
