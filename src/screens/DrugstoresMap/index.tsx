import React from 'react';
import { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import {
  Container,
  DrugstoreInfo,
  DrugstoreName,
  DrugstoresMapBox,
  DrugstoresTitle,
} from './styles';

import Logo from '../../components/Logo';

interface IDrugstore {
  id: string;
  name: string;
  lat: number;
  lng: number;
}

const drugstores: IDrugstore[] = [
  {
    id: '00001',
    name: 'Farmácia 1',
    lat: -7.119740958107511,
    lng: -38.50062899581659,
  },
  {
    id: '00002',
    name: 'Farmácia 2',
    lat: -7.11995473426831,
    lng: -38.500390338572345,
  },
  {
    id: '00003',
    name: 'Farmácia 3',
    lat: -7.117016863557475,
    lng: -38.49725382574161,
  },
  {
    id: '00004',
    name: 'Farmácia 4',
    lat: -6.891682494516421,
    lng: -38.56873891317398,
  },
  {
    id: '00005',
    name: 'Farmácia 5',
    lat: -6.892741162774188,
    lng: -38.5644321231547,
  },
];

const DrugstoresMap = (): JSX.Element => {
  return (
    <Container>
      <Logo />
      <DrugstoresTitle>Farmácias próximas</DrugstoresTitle>
      <DrugstoresMapBox
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -6.5205485,
          longitude: -38.4155765,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        {drugstores.map(drugstore => (
          <Marker
            key={drugstore.id}
            coordinate={{
              latitude: drugstore.lat,
              longitude: drugstore.lng,
            }}
          >
            <Callout>
              <DrugstoreInfo>
                <DrugstoreName>{drugstore.name}</DrugstoreName>
              </DrugstoreInfo>
            </Callout>
          </Marker>
        ))}
      </DrugstoresMapBox>
    </Container>
  );
};

export default DrugstoresMap;
