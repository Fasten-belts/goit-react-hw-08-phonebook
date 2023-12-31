import styled from 'styled-components';

export const ContactListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

export const ContactListItem = styled.li`
  background-image: linear-gradient(-180deg, blueviolet 0%, #404040 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 3px solid blueviolet;
  border-radius: 16px;
  margin-bottom: 10px;
  gap: 20px;
`;

export const ContactName = styled.span`
  font-family: Coiny;
  font-size: 20px;
  font-weight: 600;
  color: magenta;
`;

export const ContactNumber = styled.span`
  color: magenta;
`;

export const DeleteButton = styled.button`
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
