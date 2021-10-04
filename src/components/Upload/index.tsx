import React, { useState } from 'react';
import { Image, View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import * as ImagePicker from 'react-native-image-picker';
import {
  ImagePickerResponse,
  Asset,
} from 'react-native-image-picker/lib/typescript/types';

export default function Upload() {
  const [avatar, setAvatar] = useState<ImagePickerResponse & Asset>();

  function imagePickerCallback(data: ImagePickerResponse & Asset) {
    console.log(data);
    if (data.didCancel || data.errorCode || !data.uri) return;

    setAvatar(data);
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: avatar
            ? avatar.assets[0].uri
            : 'https://greenvolt.com.br/wp-content/uploads/2018/05/ef3-placeholder-image.jpg',
        }}
        style={styles.placeholderImage}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => ImagePicker.launchImageLibrary({}, imagePickerCallback)}
      >
        <Text style={styles.buttonText}>Escolher imagem</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 3,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
  placeholderImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
