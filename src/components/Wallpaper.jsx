import { shape } from 'prop-types';
import React from 'react';
import { ImageBackground } from 'react-native-web';

// const backgroundImage = require('../../assets/system/topScreen.jpg');

export default function Wallpaper(props) {
  const { wallpaperStyle } = props;

  // eslint-disable-next-line
  const minute = ('00' + new Date().getMinutes() % 6).slice(-2);
  return (
    // eslint-disable-next-line
    <ImageBackground style={[wallpaperStyle]} source={require(`../../assets/system/wallpaper/${minute}.jpeg`)} />
  );
}

Wallpaper.propTypes = {
  wallpaperStyle: shape().isRequired,
};
