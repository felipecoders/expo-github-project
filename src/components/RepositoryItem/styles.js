import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 8px;
  padding: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const Name = styled.Text`  
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #666;
  margin-top: 16px;
`;

export const Informations = styled.View`
  padding: 12px 4px 4px;
  margin-top: 16px;
  border-top-color:rgba(0, 0, 0, 0.1);
  border-top-width: 1px;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 11px;
  color: #333;
  margin-left: 8px;
`;
