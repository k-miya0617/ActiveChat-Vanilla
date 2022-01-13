import React from 'react';
import {
  TouchableOpacity, StyleSheet,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import colors from '../utils/Color';

export default function BackButton() {
  const navigation = useNavigation();

  function handlePress() {
    navigation.goBack();
  }

  return (
    // eslint-disable-next-line react/jsx-no-bind
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <AntDesign name="back" style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: '#FF0000',
  },
  icon: {
    marginHorizontal: 12,
    color: colors.textRegular,
    fontWeight: '400',
    fontSize: 24,
  },
});
