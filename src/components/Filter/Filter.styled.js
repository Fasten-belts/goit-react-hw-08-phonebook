import styled from 'styled-components';

export const FilterWrapper = styled.div`
  background-image: linear-gradient(-180deg, blueviolet 0%, #404040 100%);
  font-family: Coiny;
  color: #b88efa;
  padding: 10px;
  border: 3px solid blueviolet;
  border-radius: 16px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export const FilterLabel = styled.label`
  font-family: Coiny;
  font-size: 20px;
  font-weight: 600;
  color: #ff87fb;
`;

export const FilterInput = styled.input`
  padding: 10px;
  border: 1px solid blueviolet;
  border-radius: 16px;
  background-color: #b88efa;
`;
