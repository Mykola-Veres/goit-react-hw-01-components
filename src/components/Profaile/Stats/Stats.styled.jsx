import styled from 'styled-components';

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: space-between;
  align-content: space-around;
  padding: 10px;
  border: 1px solid grey;
`;

export const StatsItem = styled.li`
  flex-direction: column;
  text-align: center;
  :not(:last-child) {
    margin-right: 50px;
  }
`;

export const StatsSpan = styled.span`
  display: block;
  font-weight: bold;
`;

export const StatsSpanNumber = styled.span`
  display: block;
  color: gray;
`;
