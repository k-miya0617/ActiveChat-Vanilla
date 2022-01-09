import React from 'react';
import {
  View, Text, StyleSheet, Image, ImageBackground,
} from 'react-native';

// グローバルデザインの読み込み
import globalStyle from '../utils/GlobalStyle';

// 画像の読み込み
const backgroundImage = require('../../assets/system/topScreen.jpg');
const iconImage = require('../../assets/system/logo_x512.png');

export default function TopScreen() {
  return (
    <View style={[globalStyle.container]}>
      <View style={styles.feature}>
        <ImageBackground source={backgroundImage} style={styles.featureBackgroundImage}>
          <View style={styles.featureInner}>
            <Image source={iconImage} style={styles.icon} />
            <Text style={styles.appTitle}>Active Chat</Text>
            <Text style={styles.appGnome}>To learn more happily.</Text>
          </View>
          <View style={styles.featureFooter}>
            <Text style={styles.copyright}>© 2021 K.Miyazawa</Text>
            {/* eslint-disable-next-line max-len */}
            <Text style={styles.footerMessage}>To create an account, you will need the Acceptance Password provided by this administrator.</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.banner}>
        <Text>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerMessage: {
    fontSize: 16,
    marginVertical: 10,
    fontFamily: 'Roboto',
    color: '#FFFFFF',
  },
  copyright: {
    marginVertical: 10,
    fontSize: 14,
    fontFamily: 'Comfortaa_300Light',
    color: '#FFFFFF',
  },
  featureFooter: {
    padding: 10,
    alignItems: 'center',
  },
  appGnome: {
    fontSize: 24,
    fontFamily: 'Comfortaa_300Light',
    color: '#FFFFFF',
  },
  appTitle: {
    fontSize: 48,
    fontFamily: 'Comfortaa_700Bold',
    color: '#FFFFFF',
  },
  icon: {
    width: 128,
    height: 128,
  },
  featureInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  featureBackgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  feature: {
    flex: 6,
    backgroundColor: '#00FFFF',
  },
  banner: {
    flex: 1,
    backgroundColor: '#FF0000',
  },
});
