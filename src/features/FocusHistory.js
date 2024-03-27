import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { FontSizes, Spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.title}>We have not focused on anything yet.</Text>;

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Spacing.md,
    flex:1,
  },
  item: {
    fontSize: FontSizes.md,
    color: colors.white,
    paddingTop: Spacing.sm
  },
  title: {
    color: colors.white,
    fontSize: FontSizes.md,
    fontWeight: 'bold',
  },
});