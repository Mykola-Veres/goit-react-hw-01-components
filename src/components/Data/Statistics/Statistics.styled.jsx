import styled from 'styled-components';

export const StatisticsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: auto;
  text-align: center;
  width: 50px;
  height: 50px;
  &:nth-child(1) {
    background-color: #58effa;
  }
  &:nth-child(2) {
    background-color: #9045d6;
  }
  &:nth-child(3) {
    background-color: #ce1bbf;
  }
  &:nth-child(4) {
    background-color: #4f78e9;
  }
  &:nth-child(5) {
    background-color: #cae93f;
  }
`;

export const StatisticsSpan = styled.span`
  text-align: center;
`;
