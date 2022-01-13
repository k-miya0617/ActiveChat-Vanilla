import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text styles={styles.appbarCenter}>APPBAR_CENTER</Text>
        <Text styles={styles.appbarRight}>APPBAR_RIGHT</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 128,
    backgroundColor: '#FF0000',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarCenter: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: '#aabbcc',
    fontWeight: 'bold',
  },
  appbarRight: {
    position: 'absolute',
    right: 20,
    bottom: 16,
    color: '#0000FF',
  },
});
