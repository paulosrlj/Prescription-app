import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  margin-bottom: 22px;
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ContentView = styled.View`
  display: flex;
  align-items: center;

  margin: 10px 0;
  padding: 10px;
`;

export const Title = styled.Text`
  margin-bottom: 10px;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.text_black};
`;

export const LightParagraph = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.paragraph};
  text-align: center;
`;

export const Paragraph = styled.Text`
  margin-bottom: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text_black};
  text-align: center;
`;

export const Link = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
`;
