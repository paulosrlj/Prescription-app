import styled from 'styled-components/native';

export const InputText = styled.TextInput`
  padding: 3px 5px;
  height: 100%;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_black};
  background-color: transparent;
`;
