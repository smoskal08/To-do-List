import React from 'react';
import Label from 'components/atoms/Label/Label';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addTask as addTaskAction } from 'actions';
import { Formik, Form, Field } from 'formik';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledField = styled(Field)`
  margin: 10px 0;
  padding: 5px 10px;
  font-size: 1.8rem;
  border: 1px solid black;
  border-radius: 5px;
`

const AddTask = ({tasks, addTask}) => (
  <Formik
    initialValues={{
      title: ''
    }}
    onSubmit={({title}, {resetForm}) => {
      let id
      if (tasks[tasks.length - 1]) {
        id = tasks[tasks.length - 1].id + 1
      } else {
        id = 1
      }
      addTask(id, title)
      resetForm({ title: '' })
    }}
  >
    {() => (
      <StyledForm>
        <Label>Title</Label>
        <StyledField name="title" type="text" />
        <Button type="submit" theme="#5cb85c">add new task</Button>
      </StyledForm>
    )}
  </Formik>
);

const mapStateToProps = ({tasks}) => ({tasks})

const mapDispatchToProps = dispatch => ({
  addTask: (id, title) => dispatch(addTaskAction(id, title))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
