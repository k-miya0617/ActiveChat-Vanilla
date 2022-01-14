import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../utils/Color';

export default function RegisterScreen1() {
  return (
    <View>
      <Text style={styles.test01}>DEBUG. This is the RegisterScreen1.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  test01: {
    color: colors.appColor,
    fontWeight: 'bold',
    fontSize: 48,
  },
});
