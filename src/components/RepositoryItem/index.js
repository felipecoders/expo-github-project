import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome5';

import { Container, Name, Description, Informations, Button, ButtonText } from './styles';

export default function RepositoryItem({
  data,
  onPress,
  //#region tarefa
  isFavorite,
  onHandlerFavorite
  //#endregion
}) {
  const {
    id,
    description,
    name,
    html_url,
    open_issues_count,
    forks,
    watchers
  } = data;
  //#region tarefa
  const props = isFavorite ? { solid: true } : {};
  //#endregion

  return (
    <Container>

      <Name onPress={() => onPress(html_url)} >{name}</Name>
      <Description>{description}</Description>

      <Informations>
        <Button>
          <FontAwesome name="code-branch" size={16} color="#333" />
          <ButtonText>{forks}</ButtonText>
        </Button>
        <Button>
          <FontAwesome name="eye" size={16} color="#333" />
          <ButtonText>{watchers}</ButtonText>
        </Button>
        <Button>
          <FontAwesome name="exclamation-circle" size={16} color="#333" />
          <ButtonText>{open_issues_count}</ButtonText>
        </Button>
        {
          //#region tarefa
          (<Button onPress={() => onHandlerFavorite(id)} >
            <FontAwesome name="star" {...props} size={16} color="#333" />
          </Button>)
          //#endregion
        }
      </Informations>
    </Container>
  );
}
