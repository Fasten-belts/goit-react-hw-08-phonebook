import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  background: linear-gradient(to bottom, #3a0880, #863cb1, #ce13db);
  color: #ff87fb;
  text-align: center;
  display: inline-block;
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

  &:hover,
  &:focus {
    color: magenta;
    background-color: blueviolet;
  }
`;
