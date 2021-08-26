import styled from 'styled-components';

export const Container = styled.div`
  background: var(--primary);
  z-index: -1; 
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  height: 100%;
  background: var(--secondary);
  clip-path: polygon(0 0, 100% 0, 100% 68%, 0 36%); 
  z-index: 0;

  #bg{
    position: relative;
    height:20%;
    margin-top: 0;
    width: 100%;
  
  }
  
`;