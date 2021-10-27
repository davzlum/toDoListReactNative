import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ListItem = ({task}) => {
  return (
    <View>
      <Text>{task.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ListItem;
