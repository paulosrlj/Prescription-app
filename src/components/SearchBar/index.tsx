import React, { useContext, useState } from 'react';

import { Dimensions, Animated } from 'react-native';
import { AxiosResponse } from 'axios';
import { Container, Input, BoxButtonSearch, SearchIcon } from './styles';

import { Context } from '../../context/MedicineSearch';

import api from '../../services/api';
import { MedicineType } from '../../util/types';

export default function SearchBar(): JSX.Element {
  const animation = new Animated.Value(Dimensions.get('window').width - 40);
  const { width } = Dimensions.get('window');

  const { medicine, setMedicine, setMedicineData, setIsEmpty } =
    useContext(Context);

  async function handleSearch() {
    try {
      const { data } = (await api.get(
        `medicines/${medicine}`,
      )) as unknown as AxiosResponse<MedicineType>;

      if (data) {
        setMedicineData(data);
        setIsEmpty(false);
        return;
      }
      setIsEmpty(true);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container style={{ width: animation }}>
      <Input
        onChangeText={setMedicine}
        autoFocus
        placeholder="Digite algo..."
      />
      <BoxButtonSearch onPress={() => handleSearch()}>
        <SearchIcon />
      </BoxButtonSearch>
    </Container>
  );
}
