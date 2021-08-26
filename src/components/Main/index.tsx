import React from 'react';

import { 
  Container,
  CardSection
} from './styles';

import Card from '../Card';

const Main: React.FC = () => {
  return (
    <Container>
      <div>
        <CardSection>
          <div>
            <Card 
              name='Rafael Torales'
              nickname='rafaeltorales'
              ocupation='developer'
              quote={('lorem ipsum').repeat(5)}

            />
          </div>
          <div>
            <Card 
              name='Rafael Torales'
              nickname='rafaeltorales'
              ocupation='developer'
              quote={('lorem ipsum').repeat(5)}

            />
          </div>
          <div>
            <Card 
              name='Rafael Torales'
              nickname='rafaeltorales'
              ocupation='developer'
              quote={('lorem ipsum').repeat(5)}

            />
          </div>
          <div>
            <Card 
              name='Rafael Torales'
              nickname='rafaeltorales'
              ocupation='developer'
              quote={('lorem ipsum').repeat(5)}

            />
          </div>
        </CardSection>
      </div>
    </Container>
  );
}

export default Main;