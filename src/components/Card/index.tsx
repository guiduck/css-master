import React from 'react';

import { 
  Container, 
  Avatar, 
  Info, 
  FavoriteIcon 
} from './styles';

interface Props {
  // image:,
  name: string,
  nickname: string,
  ocupation: string,
  quote: string
}

const Card: React.FC<Props> = ({
  //image,
  name,
  nickname,
  ocupation,
  quote
}) => {
  return (
    <Container>
      <div>
        <Avatar />

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
          <strong>{ocupation}</strong>
          <p>{quote}</p>

        </Info>

      </div>

      <FavoriteIcon />
    </Container>
  );
}

export default Card;