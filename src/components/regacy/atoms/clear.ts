import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ClearButton = styled.button`
  user-select: none;
  padding: 0;
  border: none;
  background-color: Transparent;
  background-repeat: no-repeat;
  cursor: pointer;
  outline: none;
`;

export const ClearLink = styled(Link)`
  user-select: none;
  text-decoration: none;
  color: #3f4040;
`;

export const ClearUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
