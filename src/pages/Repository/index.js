import React, { useEffect, useState } from 'react';
import {
  FlatList,
  //#region tarefa
  AsyncStorage,
  ActivityIndicator
  //#endregion
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import {
  Container,
  Avatar,
  BackButton,
  BackButtonText,
  List,
  //#region tarefa
  LoadingContainer,
  //#endregion
} from './styles';

import RepositoryItem from '../../components/RepositoryItem';

import api from '../../services/api';

export default function Repository({ navigation }) {
  const user = navigation.getParam('user');
  const [repos, setRepos] = useState([]);
  //#region tarefa
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  async function loadFavorites() {
    const all = await AsyncStorage.getItem('favorites');
    const allFavorites = JSON.parse(all || []);
    setFavorites(allFavorites);
  }
  //#endregion

  async function loadRepositories() {
    if (user.public_repos === repos.length) return;

    //#region tarefa
    setLoading(true);
    //#endregion

    const number = 10;
    const page = (repos.length / number) + 1;
    const url = `/users/${user.login}/repos?page=${page}&per_page=number`;
    const { data } = await api.get(url);

    const repositories = data.map(repo => ({
      id: repo.id,
      description: repo.description,
      name: repo.name,
      html_url: repo.html_url,
      open_issues_count: repo.open_issues_count,
      forks: repo.forks,
      watchers: repo.watchers,
    }));

    setRepos([...repos, ...repositories]);
    //#region tarefa
    setLoading(false);
    //#endregion
  }

  useEffect(() => {
    loadRepositories();
    //#region tarefa
    loadFavorites();
    //#endregion
  }, []);

  //#region tarefa
  useEffect(() => {
    async function updateFavorites() {
      await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
      console.log(favorites)
    }

    updateFavorites();
  }, [favorites]);
  //#endregion

  function backPage() {
    navigation.navigate('Main');
  }

  async function openViewer(url) {
    await WebBrowser.openBrowserAsync(url);
  }

  //#region tarefa
  async function handlerFavorite(id) {
    if (favorites.includes(id)) {
      const newFavorites = favorites.filter(favorite => favorite !== id);
      setFavorites(newFavorites);
    } else {
      setFavorites([ ...favorites, id ]);
    }
  }

  function Footer() {
    if (!loading) return null;

    return (
      <LoadingContainer>
        <ActivityIndicator color="#ff3d00" />
      </LoadingContainer>
    )
  }
  //#endregion

  return (
    <Container>
      <BackButton onPress={backPage}>
        <BackButtonText>voltar</BackButtonText>
      </BackButton>
      <Avatar source={{ uri: user.avatar_url }} />

      <List>
        {repos && (
          <FlatList
            data={repos}
            keyExtractor={item => String(item.id)}
            // função que vai ser disparada quando chegar no limite do scroll
            onEndReached={loadRepositories}
            // porcentagem que quando atigida do fim vai disparar a função
            onEndReachedThreshold={0.1}
            renderItem={({ item }) => (
              <RepositoryItem
                data={item}
                onPress={openViewer}
                //#region tarefa
                isFavorite={favorites.includes(item.id)}
                onHandlerFavorite={handlerFavorite}
                //#endregion
              />
            )}
            //#region tarefa
            ListFooterComponent={() => <Footer/>}
            //#endregion
          />
        )}
      </List>
    </Container>
  );
}