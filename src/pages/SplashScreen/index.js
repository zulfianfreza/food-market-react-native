import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Logo } from '../../assets';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 200);
  }, [navigation]);

  return (
    <>
      <View style={styles.container}>
        <Logo />
        <Text style={styles.text}>FoodMarket</Text>
      </View>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC700',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    color: '#020202',
    marginTop: 36,
  },
});
