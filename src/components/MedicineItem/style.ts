import styled from 'styled-components/native';

export const MedicineBox = styled.View`
  width: 100%;
  height: auto;

  padding: 20px 15px;

  border: 1px solid ${({ theme }) => theme.colors.secondary_blue};
`;

export const TextBox = styled.View`
  margin: 3px 0;
`;

export const MedicineName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 17px;
  color: ${({ theme }) => theme.colors.text_black};

  text-align: center;

  margin: 15px 0;
`;

export const RecipeText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 17px;
  color: ${({ theme }) => theme.colors.text_black};
`;

export const Label = styled(RecipeText)`
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const MedicineText = styled(RecipeText)``;
