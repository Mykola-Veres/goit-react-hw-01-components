import styled from 'styled-components';

export const TransactionTable = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: auto;
  margin-bottom: 70px;
`;

export const TransactionTitle = styled.tr`
  display: flex;
  justify-content: space-around;
  background-color: #87d6ee;
`;

export const TransactionTbody = styled.tbody`
  display: flex;
  flex-direction: column;
`;
