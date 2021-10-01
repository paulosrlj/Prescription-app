import React from 'react';
import {
  Container,
  DoctorInfo,
  DoctorName,
  DoctorCRM,
  DoctorLabel,
  DoctorImg,
  HeaderGradient,
} from './styles';

const DoctorHomeHeader = (): JSX.Element => {
  return (
    <Container>
      <HeaderGradient colors={['#49DAD0', 'transparent']}>
        <DoctorInfo>
          <DoctorName>Paulo Sérgio Rodrigues Leite Junior</DoctorName>
          <DoctorCRM>000.000.000-00</DoctorCRM>
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

export default DoctorHomeHeader;
