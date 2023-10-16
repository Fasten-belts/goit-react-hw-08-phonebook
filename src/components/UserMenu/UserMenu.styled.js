import styled from 'styled-components';

export const Button = styled.button`
  background: linear-gradient(to bottom, #3a0880, #863cb1, #ce13db);
  font-family: Coiny;
  font-size: 20px;
  font-weight: 600;
  background-color: #4f2ee8;
  color: #ff87fb;
  border: none;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    color: magenta;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  font-family: Coiny;
  font-size: 20px;
  font-weight: 600;
  color: #b88efa;
  margin: 20px;
  text-align: center;
`;
