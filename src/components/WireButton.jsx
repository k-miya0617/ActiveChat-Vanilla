import React from 'react';
import {
  TouchableOpacity, Text, StyleSheet,
} from 'react-native';
import { func, string, shape } from 'prop-types';

// カラーパレットの読み込み
import colors from '../utils/Color';

export default function WireButton(props) {
  const {
    label, onPress, rectStyle, labelStyle,
  } = props;

  return (
    <TouchableOpacity style={[styles.defaultWireButtonContainer, rectStyle]} onPress={onPress}>
      <Text style={[styles.defaultLabel, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}

WireButton.propTypes = {
  label: string.isRequired,
  onPress: func,
  rectStyle: shape(),
  labelStyle: shape(),
};

WireButton.defaultProps = {
  onPress: null,
  rectStyle: null,
  labelStyle: null,
};

const styles = StyleSheet.create({
  defaultWireButtonContainer: {
    borderRadius: 4,
    alignSelf: 'flex-start',
    borderColor: colors.textRegular,
    borderWidth: 2,
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
