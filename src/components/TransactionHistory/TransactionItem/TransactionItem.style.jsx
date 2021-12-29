import styled from 'styled-components';

export const TransactionTr = styled.tr`
  display: block;
  /* justify-content: center;  */
  text-align: center;
  :not(:last-child) {
    margin-right: 40px;
  }
`;

export const TransactionTd = styled.td`
  /* display: flex; */
  text-align: center;

  :not(:last-child) {
    margin-right: 50px;
  }
`;
