import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Google Fonts の読み込み
import {
  // eslint-disable-next-line camelcase
  useFonts, Comfortaa_300Light, Comfortaa_700Bold,
} from '@expo-google-fonts/comfortaa';

// 戻るボタンの読み込み
import BackButton from './src/components/BackButton';

// カラーパレットの読み込み
import colors from './src/utils/Color';

// 各画面の読み込み
import TopScreen from './src/screen/TopScreen';
import RegisterScreen1 from './src/screen/RegisterScreen1';

const Stack = createStackNavigator();

export default function App() {
  // フォントをロードする
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line camelcase
    Comfortaa_300Light, Comfortaa_700Bold,
  });

  // もしロードが終わっていない場合、nullを返す
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Top"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.backgroundPrimary,
            height: 128,
          },
          headerTitleStyle: {
            color: colors.textRegular,
            fontSize: 24,
            fontWeight: 'bold',
          },
          // headerBackTitle: 'back',
        }}
      >
        <Stack.Screen
          name="Top"
          component={TopScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register1"
          component={RegisterScreen1}
          options={{
            title: 'Register',
            headerTitleStyle: {
              color: colors.appColor,
              fontSize: 42,
            },
            allowAsProps: true,
            headerLeft: () => (
              <BackButton />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
