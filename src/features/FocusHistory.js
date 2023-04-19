import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';
export const FocusHistory = ({ history }) => {

  if (!history || !history.length) return null;

  const renderItem = ({ item }) => <View style={styles.item}>- {item}</View>; ;
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Things we have focused on: </Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.md,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
  },
});
