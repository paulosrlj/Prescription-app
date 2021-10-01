import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 10px;
`;

export const MedicineName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 17px;
  margin-bottom: 15px;
`;
export const MedicineDosage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 17px;
`;
