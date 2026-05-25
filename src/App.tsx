import { TodoItem } from './components/TodoItem/TodoItem.tsx';
import { TodoForm } from './components/Todoform/Todoform.tsx';
import './App.css'
import type { TodoItemType } from "./shared/types.ts";
import { useState } from "react";
import logo from './assets/icon.png';

const mockTodos: TodoItemType[] = [{
  id: 1,
  label: 'Сдать чекпоинт по проектно-технологической практике СРОЧНО !!!',
  isChecked: false
}, {
  id: 2,
  label: 'Сдать семестровку Кириллу!',
  isChecked: false
}, {
  id: 3,
  label: 'Купить хлеб и сосиски :)',
  isChecked: true
}]

function App() {
  const [todos, setTodos] = useState<TodoItemType[]>(mockTodos);

  const handleTaskCheckedChange = (id: number) => {
    setTodos((prevState) => {
      return prevState.map((value) => {
        if (value.id === id) {
          return {
            ...value,
            isChecked: !value.isChecked
          }
        }

        return value;
      })
    });
  }

  const handleAddTodo = (todoItem: TodoItemType) => {
    setTodos((prevState) => {
      return [
        ...prevState,
        todoItem
      ]
    });
  }

  const completedCount = todos.filter((value) => value.isChecked).length;

  return (
      <div className="page">
        <div className="app-card">
          <header className="app-header">
            <div>
              <h1>Мой список задач</h1>
              <p className="app-subtitle">
                Выполнено {completedCount} из {todos.length}
              </p>
            </div>

            <div className="app-logo">
              <img src={logo} alt="logo" />
            </div>
          </header>

          <TodoForm onAdd={handleAddTodo} />

          <div className="todo-list">
            {todos.map((value) => (
                <TodoItem id={value.id} key={value.id} label={value.label} done={value.isChecked} onChange={handleTaskCheckedChange} />
            ))}
          </div>
        </div>
      </div>
  )
}

export default App