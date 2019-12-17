import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-self: center;
`;

export const DescriptionContent = styled.View`
  padding: 0 8px;
  align-self: stretch;
  flex: 1;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2
})`
  font-size: 12px;
  color: #666;
`;

export const Location = styled.Text`
  color: #999;
  font-size: 11px;
  align-self: flex-end;
`;
