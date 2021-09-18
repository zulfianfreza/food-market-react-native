import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Gap, Header, Select, TextInput } from '../../components';

const SignUpAddress = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Header
        title="Sign Up Addres"
        subtitle="Register and Eat"
        onBack={() => {}}
      />
      <View style={styles.container}>
        <TextInput label="Phone No." placeholder="Type your phone number" />
        <Gap height={16} />
        <TextInput label="Address" placeholder="Type your address" />
        <Gap height={16} />
        <TextInput label="House Number" placeholder="Type your house number" />
        <Gap height={16} />
        <Select label="City" />
        <Gap height={24} />
        <Button
          text="Sign Up Now"
          onPress={() => navigation.replace('SuccessSignUp')}
        />
      </View>
    </View>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 26,
    marginTop: 24,
    flex: 1,
  },
});
