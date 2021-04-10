import { types } from 'types';

export const addTask = (id, title, priority) => ({
  type: types.ADD_TASK,
  payload: {
    id,
    title,
    priority,
    done: false
  }
})

export const doneTask = id => ({
  type: types.DONE_TASK,
  payload: {
    id
  }
})

export const editTask = (id, title, priority, done) => ({
  type: types.EDIT_TASK,
  payload: {
    id,
    title,
    priority,
    done
  }
})

export const removeTask = id => ({
  type: types.REMOVE_TASK,
  payload: {
    id
  }
})
