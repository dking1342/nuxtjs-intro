import { Todo, Todos } from '~/types/todo'

export const state = (): Todos => {
  return {
    todos: [],
  }
}

export const mutations = {
  ADD_TODO(state: Todos, todo: Todo) {
    state.todos = [
      {
        id: Math.ceil(Math.random() * 1000),
        content: todo.content,
        done: todo.done,
      },
      ...state.todos,
    ]
  },
  REMOVE_TODO(state: Todos, todo: Todo) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },
  TOGGLE_TODO(state: Todos, todo: Todo) {
    state.todos.map((item) => {
      if (item.id === todo.id) {
        item.done = !item.done
      }
      return item
    })
  },
}
