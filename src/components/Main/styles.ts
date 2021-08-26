import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1500px;
  
  z-index: 500;
`;

export const CardSection = styled.div`
  display: flex;
  flex-flow: row wrap;
  /* justify-content: space-evenly; */
  align-content: flex-start center;
  width: 100vw;
  margin: 25px 62px;
  
  /* &:first-child {
    margin-left: 160px;
  }  */
`;
