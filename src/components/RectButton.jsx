import React from 'react';
import {
  TouchableOpacity, Text, StyleSheet,
} from 'react-native';
import { func, string, shape } from 'prop-types';

// カラーパレットの読み込み
import colors from '../utils/Color';

export default function RectButton(props) {
  const {
    label, onPress, rectStyle, labelStyle,
  } = props;

  return (
    <TouchableOpacity style={[styles.defaultRectButtonContainer, rectStyle]} onPress={onPress}>
      <Text style={[styles.defaultLabel, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}

RectButton.propTypes = {
  label: string.isRequired,
  onPress: func,
  rectStyle: shape(),
  labelStyle: shape(),
};

RectButton.defaultProps = {
  onPress: null,
  rectStyle: null,
  labelStyle: null,
};

const styles = StyleSheet.create({
  defaultRectButtonContainer: {
    backgroundColor: colors.appColor,
    borderColor: colors.appColor,
    borderRadius: 4,
    borderWidth: 2,
    alignSelf: 'flex-start',
  },
  defaultLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: colors.textRegular,
  },
});
