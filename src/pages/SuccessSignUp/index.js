import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IllSuccessSignUp } from '../../assets';
import { Button } from '../../components';

const SuccessSignUp = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <IllSuccessSignUp />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Yeay! Complete</Text>
        <Text style={styles.subtitle}>
          Now you are able to order some foods as a self-reward
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text="Find Foods"
          onPress={() => {
            navigation.replace('MainApp');
          }}
        />
      </View>
    </View>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textContainer: {
    width: 220,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    marginTop: 30,
    color: '#020202',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 30,
    width: 200,
  },
});
