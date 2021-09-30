import React from 'react';
import { AppLogo, Icon, LogoView, LogoText } from './styles';

export default function Logo(): JSX.Element {
  return (
    <LogoView>
      <AppLogo>
        <Icon name="pill" />
        <LogoText>PRESCRIPTION</LogoText>
      </AppLogo>
    </LogoView>
  );
}
