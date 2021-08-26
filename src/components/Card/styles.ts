import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 440px;
  width: calc(100vw/4.9);
  background: var(--white);
  border-radius: 5px;
  z-index: 11111111;
  margin-left: 20px;
`;

export const Avatar = styled.div``;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(440/2.5);
`;
export const FavoriteIcon = styled.div``;

// export const Card = styled.div`
//   display: flex;
//   flex-flow: column wrap;
//   height: 440px;
//   width: calc(100vw/4);
//   background: var(--white);
//   border-radius: 5px;
//   z-index: 1000;
// `;
