import styled from 'styled-components';
import { Twitter } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width:1440px;
  height: 50%;
  
  z-index: 1;
  margin: 0 auto;

`;
export const Header =styled.div`
  justify-content:flex-start;
  margin: 30px 62px;
  font-weight: lighter;
  font-style:italic;
  font-size: 15px;
`;
export const Content =styled.div`
  display: flex;
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin: 80px 58px;
  font-size: 43px;
  width: 55%;
  align-items: flex-end;

  p{
    width:100%;
    font-size: 12.5px;
    letter-spacing: 0.416667px;
    margin-top: 5px;
  }
`;
export const Footer =styled.div`
  font-family: ProximaNova;
  font-size: 14.5px;
  line-height: 14px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.3px;
  margin-left: 62px;

  span{
    color: var(--gray);
  }

`;
export const TweeterIcon = styled(Twitter)`
  fill:var(--gray);
  width:21px;
  height:21px;
  padding: 0 5px 2px 1.5px;
`;

