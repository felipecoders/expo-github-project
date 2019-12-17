import React from 'react';
import {
  Container,
  Avatar,
  DescriptionContent,
  Name,
  Bio,
  Location,
} from './styles';

export default function UserItem({ data, onPress }) {
  const { avatar_url, name, bio, login, location } = data;
  
  return (
    <Container onTouchEnd={() => onPress(data)}>
      <Avatar source={{ uri: avatar_url }} />
      <DescriptionContent>
        <Name>{name}</Name>
        <Bio>{bio}</Bio>
        
        <Location>{location}</Location>
      </DescriptionContent>
    </Container>
  );
}
