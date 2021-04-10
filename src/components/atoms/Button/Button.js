import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  font-size: 1.8rem;
  background-color: ${({theme}) => theme ? theme : 'transparent'};
  color: ${({color}) => color ? color : 'white'};
  cursor: pointer;
`

export default Button;
