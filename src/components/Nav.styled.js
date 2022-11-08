import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 15px 15px;
  box-shadow: 0px 5px 5px 0px rgba(140, 140, 140, 0.47);
  margin-bottom: 5px;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    color: red;
  }
  &:hover {
    text-decoration: underline;
  }
`;
