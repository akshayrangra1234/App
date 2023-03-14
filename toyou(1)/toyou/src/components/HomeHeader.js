import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, withBadge } from 'react-native-elements';
import { colors, parameters } from '../global/styles';

export default function HomeHeader() {
  const BadgeIcon = withBadge(0)(Icon);

  return (
    <View style={styles.header}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 15,
        }}>
        <Icon
          type="material-community"
          name="menu"
          color={colors.cardbackground}
          size={32}
        />
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text
          style={{
            color: colors.cardbackground,
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          ToYou
        </Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <BadgeIcon
          type="material-community"
          name="cart"
          size={30}
          color="white"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.grey2,
    height: parameters.headerHeight,
    alignItems: 'center',
    paddingHorizontal: 5,
    justifyContent: 'space-between',
  },
});
