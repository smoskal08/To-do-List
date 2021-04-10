import React from 'react';
import Label from 'components/atoms/Label/Label';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import { editTask as editTaskAction } from 'actions';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';

const StyledCloseButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

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

const StyledPriorityLabel = styled(Label)`
  margin-right: 10px;
`

const EditModal = ({prevValues, closeModal, editTask}) => (
  <div>
    <StyledCloseButtonBox>
      <Button theme="transparent" color="#d9534f" onClick={closeModal}><i className="fas fa-times"></i></Button>
    </StyledCloseButtonBox>
    <Formik
      initialValues={{
        title: prevValues.title,
        priority: prevValues.priority
      }}
      onSubmit={({title, priority}, {resetForm}) => {
        const { id, done } = prevValues
        editTask(id, title, priority, done)
        resetForm({ title: '', priority: false })
        closeModal()
      }}
    >
      {() => (
        <StyledForm>
          <Label>Title</Label>
          <StyledField name="title" type="text" />
          <div>
            <StyledPriorityLabel>Priority</StyledPriorityLabel>
            <StyledField name="priority" type="checkbox" />
          </div>
          <Button theme="#0275d8" type="submit">save</Button>
        </StyledForm>
      )}
    </Formik>
  </div>
);

const mapDispatchToProps = dispatch => ({
  editTask: (id, title, priority, done) => dispatch(editTaskAction(id, title, priority, done))
})

export default connect(null, mapDispatchToProps)(EditModal);
