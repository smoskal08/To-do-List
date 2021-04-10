import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import styled, { css } from 'styled-components';
import { doneTask as doneTaskAction, removeTask as removeTaskAction } from 'actions';
import { connect } from 'react-redux';

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  list-style: none;
`

const StyledItem = styled.li`
  margin: 5px 0;
  font-size: 2rem;

  span {
    font-weight: bold;
  }

  ${({done}) =>
    done && css`
      span {
        font-style: italic;
        text-decoration: line-through;
      }
    `
  }

  ${({priority}) =>
    priority && css`
      span {
        color: #d9534f
      }
    `
  }
`

const StyledButton = styled(Button)`
  margin-left: 15px;
  padding: 5px 10px;
`

const TaskList = ({openModal, tasks, doneTask, removeTask}) => (
  <StyledList>
    {
      tasks.sort((a, b) => {
        if (a.priority) return -1
        else if (b.priority) return 1
        return 0
      }).map(task => (
        <StyledItem key={task.id} done={task.done} priority={task.priority}>
          <span>{task.title}</span>
          <StyledButton theme="#5cb85c" onClick={() => doneTask(task.id)}><i className="fas fa-check"></i></StyledButton>
          <StyledButton theme="#0275d8" onClick={() => openModal(task)}><i className="fas fa-edit"></i></StyledButton>
          <StyledButton theme="#d9534f" onClick={() => removeTask(task.id)}><i className="fas fa-times"></i></StyledButton>
        </StyledItem>
      ))
    }
  </StyledList>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = ({tasks}) => ({tasks})

const mapDispatchToProps = dispatch => ({
  doneTask: id => dispatch(doneTaskAction(id)),
  removeTask: id => dispatch(removeTaskAction(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
