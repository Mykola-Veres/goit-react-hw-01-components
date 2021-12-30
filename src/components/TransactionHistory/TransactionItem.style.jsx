import styled from 'styled-components';

export const TransactionTr = styled.tr`
  /* display: flex;
  justify-content: space-around; 
  text-align: center; */
  /* :not(:last-child) {
    margin-right: 40px;
  } */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
  :nth-child(even) {
    background-color: #e4dfd7;
  }
`;

export const TransactionTd = styled.td`
  text-align: center;
`;
