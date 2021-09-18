import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  IcHome,
  IcHomeNormal,
  IcOrder,
  IcOrderNormal,
  IcProfile,
  IcProfileNormal,
} from '../../../assets';

const Icon = ({ label, focus }) => {
  switch (label) {
    case 'Home':
      return focus ? <IcHome /> : <IcHomeNormal />;
    case 'Order':
      return focus ? <IcOrder /> : <IcOrderNormal />;
    case 'Profile':
      return focus ? <IcProfile /> : <IcProfileNormal />;
    default:
      return <IcHome />;
  }
};

const BottomNavigator = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingTop: 15,
    paddingBottom: 13,
    paddingHorizontal: 60,
    justifyContent: 'space-between',
  },
});
