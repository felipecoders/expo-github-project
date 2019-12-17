import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 15px;
  align-items: stretch;
  margin: 8px;
`;

export const Form = styled.View`
  background: #ff3d00;
  border-radius: 4px;
  padding: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: center;
`;

export const FormTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  align-self: center;
  padding: 8px;
  font-size: 24px;
`;

export const FormInput = styled.TextInput.attrs({
  placeholder: 'Procure os usuários',
  placeholderColor: '#999'
})`
  width: 100%;
  height: 48px;
  padding: 0 8px;
  font-size: 16px;
  color: #333;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const FormButton = styled.TouchableOpacity`
  background: #fff;
  padding: 8px;
  border-radius: 4px;
  align-self: flex-end;
  margin-top: 8px;
`;

export const FormButtonText = styled.Text`
  color: #ff3d00;
  font-weight: bold;
`;

export const List = styled.View`
  flex: 1;
  padding: 8px 0;
`;

//#region Tarefa
export const FormErrorMessage = styled.Text`
  color: #fff;
  font-weight: bold;
`;
//#endregion