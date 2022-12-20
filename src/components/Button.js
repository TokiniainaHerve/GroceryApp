import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { labelTypes, typography,shadow } from '@/theme';
import LinearGradient from 'react-native-linear-gradient';
import { TextLabel } from './TextLabel';
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    
  },
  linear_gradient:{
    width:'100%',
    height:60,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8
  }
});

export function Button({ style, textStyle, title, ...rest }) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={[styles.button, { borderColor: colors.border },shadow.primary, style]} {...rest}>
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[colors.primary, colors.primary_dark]} style={styles.linear_gradient}>
        <TextLabel text={title} type={labelTypes.PARAGRAPH_REGULAR} style={{color:colors.base}} />
      </LinearGradient>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  title: PropTypes.string.isRequired,
};

Button.defaultProps = {
  style: null,
  textStyle: null,
};
