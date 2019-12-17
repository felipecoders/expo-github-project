import React, { useState, useEffect } from 'react';
import {
  FlatList,
  //#region tarefa
  AsyncStorage,
  //#endregion
} from 'react-native';
import {
  Container,
  Form,
  FormTitle,
  FormInput,
  FormButton,
  FormButtonText,
  List,
  //#region tarefa
  FormErrorMessage,
  //#endregion
} from './styles';

import api from '../../services/api';

import UserItem from '../../components/UserItem';

export default function Main({ navigation }) {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  //#region Tarefa
  const [error, serError] = useState(null);
  //#endregion

  async function handlerRepository() {
    try {
      const { data } = await api.get(`/users/${name}`);

      setUsers([...users, data]);
      setName('');
      //#region tarefa
      serError(null);
      //#endregion
    } catch (e) {
      //#region tarefa
      serError(`* User ${name} cannot be found!`);
      //#endregion
    }
  }

  function goTo(user) {
    navigation.navigate('Repository', { user });
  }

  //#region Tarefa
  useEffect(() => {
    async function loadUsers() {
      const savedUsers = await AsyncStorage.getItem('users');
      setUsers(JSON.parse(savedUsers));
    }

    loadUsers();
  }, []);

  useEffect(() => {
    async function addUser() {
      await AsyncStorage.setItem('users', JSON.stringify(users));
    }

    addUser();
  }, [users]);
  //#endregion

  return (
    <>
      <Container>
        <Form>
          <FormTitle>Usuários</FormTitle>
          <FormInput
            value={name}
            autoCapitalize="none"
            onChangeText={text => setName(text)}
          />
          <FormButton onPress={handlerRepository}>
            <FormButtonText>Adicionar</FormButtonText>
          </FormButton>

          {
            //#region tarefa
            error && (<FormErrorMessage>{error}</FormErrorMessage>)
            //#endregion
          }
        </Form>

        <List>
          {users && (<FlatList
            keyExtractor={item => String(item.id)}
            data={users}
            renderItem={({ item }) => <UserItem data={item} onPress={goTo} />}
          />)}
        </List>
      </Container>
    </>
  );
}
