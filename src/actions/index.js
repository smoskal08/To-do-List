import { types } from 'types';

export const addTask = (id, title) => ({
  type: types.ADD_TASK,
  payload: {
    id,
    title,
    done: false
  }
})

export const doneTask = id => ({
  type: types.DONE_TASK,
  payload: {
    id
  }
})

export const editTask = (id, title, done) => ({
  type: types.EDIT_TASK,
  payload: {
    id,
    title,
    done
  }
})

export const removeTask = id => ({
  type: types.REMOVE_TASK,
  payload: {
    id
  }
})
