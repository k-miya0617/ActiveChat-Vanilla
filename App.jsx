import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// Google Fonts の読み込み
import {
  // eslint-disable-next-line camelcase
  useFonts, Comfortaa_300Light, Comfortaa_700Bold,
} from '@expo-google-fonts/comfortaa';

// 各画面の読み込み
import TopScreen from './src/screen/TopScreen';

export default function App() {
  // フォントをロードする
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line camelcase
    Comfortaa_300Light, Comfortaa_700Bold,
  });

  // もしロードが終わっていない場合、nullを返す
  if (!fontsLoaded) return null;

  return (
    <TopScreen />
  );
}
