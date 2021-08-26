import React from 'react';

import { 
  Container,
  Header,
  Content,
  Footer,
  TweeterIcon
} from './styles';

const Title: React.FC = () => {
  return (
    <Container>
      <Header>
        <div>
          <h1>Startaê</h1>
        </div>
      </Header>
      <Content>
        <div>
          <h1>Meet our team</h1>
          <p>We are a group of multi-skilled individuals who are entrepreneurial by nature and live to make digital products and services that people love to use.</p>
        </div>
      </Content>
      <Footer>
        <div>
          <span>
            <TweeterIcon />
            Latest tweets from our team
          </span>
        </div>
      </Footer>
    </Container>
    
  );
}

export default Title;