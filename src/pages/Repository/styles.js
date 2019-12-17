import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 15px;
  align-items: stretch;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 30px;
  align-self: center;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const BackButtonText = styled.Text`
  color: #ff3d00;
  font-weight: bold;
`;

export const List = styled.View`
  flex: 1;
  padding: 8px 0;
  margin-top: 16px;
`;

//#region tarefa
export const LoadingContainer = styled.View`
  padding: 15px;
  align-items: center;
`;
//#endregion
