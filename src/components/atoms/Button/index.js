import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Button = ({ text, color = '#FFC700', textColor = '#020202' }) => {
  return (
    <View style={styles.container(color)}>
      <Text style={styles.text(textColor)}>{text}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (color) => ({
    backgroundColor: color,
    padding: 12,
    borderRadius: 8,
  }),
  text: (textColor) => ({
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: textColor,
  }),
});
