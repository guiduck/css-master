import React from 'react';

import Main from '../Main';
import Title from '../Title';

import { 
    Container,
    Wrapper,
} from './styles';

const Layout: React.FC = () => {
  return (
      <Container>
          <Wrapper>
              <div id='bg'>
                <Title />
              </div>            
              <Main /> 
          </Wrapper>
      </Container>
  );
}

export default Layout;