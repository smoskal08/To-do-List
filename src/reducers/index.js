import { types } from 'types';

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Wygraj w lotto",
      priority: false,
      done: false
    },
    {
      id: 2,
      title: "Zrób todo-list",
      priority: true,
      done: false
    },
    {
      id: 3,
      title: "Dodaj edytowanie i usuwanie do todo-list",
      priority: false,
      done: false
    },
  ]
}

const rootReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.ADD_TASK:
      return {
        tasks: [
          ...state.tasks,
          payload
        ]
      }
    case types.DONE_TASK:
      return {
        tasks: [
          ...state.tasks.map(task => {
            if (task.id === payload.id) task.done = !task.done
            return task
          }),
        ]
      }
    case types.EDIT_TASK:
      return {
        tasks: [
          ...state.tasks.map(task => {
            if (task.id === payload.id) {
              return {
                id: payload.id,
                title: payload.title,
                priority: payload.priority,
                done: payload.done
              }
            }
            return task
          })
        ]
      }
    case types.REMOVE_TASK:
      return {
        tasks: [
          ...state.tasks.filter(task => task.id !== payload.id)
        ]
      }
    default:
      return state
  }
}

export default rootReducer;
