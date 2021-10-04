import React from 'react';
import { useAuthContext } from '../../../context/Authentication/AuthProvider';
import {
  Container,
  DoctorInfo,
  DoctorName,
  DoctorCRM,
  DoctorLabel,
  DoctorImg,
  HeaderGradient,
} from './styles';

const Header = (): JSX.Element => {
  const { user } = useAuthContext();

  return (
    <Container>
      <HeaderGradient colors={['#49DAD0', 'transparent']}>
        <DoctorInfo>
          <DoctorName>{user?.name}</DoctorName>
          <DoctorCRM>{user?.crm}</DoctorCRM>
          <DoctorLabel>Médico</DoctorLabel>
        </DoctorInfo>
        {/* <DoctorImg
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/194/194938.png',
          }}
        /> */}
      </HeaderGradient>
    </Container>
  );
};

export default Header;
