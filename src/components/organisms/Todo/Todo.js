import React, { useState } from 'react';
import AddTask from 'components/molecules/AddTask/AddTask';
import TaskList from 'components/molecules/TaskList/TaskList';
import EditModal from 'components/molecules/EditModal/EditModal';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Todo = () => {
  const [isModalVisible, setModalVisibility] = useState(false)
  const [prevValues, setPrevValues] = useState({})

  const openModal = ({id, title, priority, done}) => {
    setPrevValues({
      id,
      title,
      priority,
      done
    })
    setModalVisibility(true)
  }

  const closeModal = () => {
    setModalVisibility(false)
  }

  return (
    <StyledWrapper>
      <AddTask />
      <TaskList openModal={openModal} />
      { isModalVisible && <EditModal closeModal={closeModal} prevValues={prevValues} /> }
    </StyledWrapper>
  )
}

export default Todo;
