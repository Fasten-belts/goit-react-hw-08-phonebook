import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  background: linear-gradient(to bottom, #3a0880, #863cb1, #ce13db);
  color: #ff87fb;
  display: inline-block;
  text-align: center;
  font-family: Coiny;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  padding: 10px;
  border: 5px solid blueviolet;
  border-radius: 16px;

  nav &:hover,
  nav &:focus {
    color: magenta;
    background-color: blueviolet;
  }
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;
