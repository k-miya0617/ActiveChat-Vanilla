import React from 'react';
import {
  View, Text, StyleSheet, Image, ImageBackground,
} from 'react-native';

// ボタンの読み込み
import RectButton from '../components/RectButton';
import WireButton from '../components/WireButton';

// グローバルデザインとカラーパレットの読み込み
import globalStyle from '../utils/GlobalStyle';
import colors from '../utils/Color';

// 画像の読み込み
const iconImage = require('../../assets/system/logo_x512.png');

// const backgroundImage = wallpaper();

// Longhorn
// const backgroundImage = require('../../assets/system/topScreen.jpg');
// space 01
// const backgroundImage = require('../../assets/system/space01.jpg');
// space 02
const backgroundImage = require('../../assets/system/wallpaper/05.jpeg');

export default function TopScreen(props) {
  const { navigation } = props;
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
      <View style={styles.bannerOuter}>
        <View style={styles.bannerInner}>
          <WireButton
            label="LOG IN"
            rectStyle={styles.loginButton}
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Register1' }],
              });
            }}
          />
          <RectButton
            label="REGISTER"
            rectStyle={styles.loginButton}
            onPress={() => {
              /* navigation.reset({
                index: 0,
                routes: [{ name: 'Register1' }],
              });
              */
              navigation.navigate('Register1');
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    alignContent: 'center',
    alignItems: 'center',
    width: '40%', // 画面の幅の30%
  },
  bannerInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bannerOuter: {
    height: 128,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  footerMessage: {
    fontSize: 16,
    marginVertical: 10,
    color: colors.textRegular,
    textShadowRadius: 10,
    textShadowColor: '#000',
    padding: 10,
  },
  copyright: {
    marginVertical: 10,
    fontSize: 14,
    fontFamily: 'Comfortaa_300Light',
    color: colors.textRegular,
    textShadowRadius: 4,
    textShadowColor: '#000',
    padding: 10,
  },
  featureFooter: {
    padding: 10,
    alignItems: 'center',
  },
  appGnome: {
    fontSize: 24,
    fontFamily: 'Comfortaa_300Light',
    color: colors.textRegular,
    textShadowRadius: 10,
    textShadowColor: '#000',
    margin: 10,
  },
  appTitle: {
    fontSize: 48,
    fontFamily: 'Comfortaa_700Bold',
    color: colors.textRegular,
    textShadowRadius: 10,
    textShadowColor: '#000',
    margin: 10,
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
    flex: 5,
    backgroundColor: colors.backgroundPrimary,
  },
});
