import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({task, deleteItem}) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.item}>{task.text}</Text>
      <Icon
        name="remove"
        size={25}
        color="black"
        onPress={() => deleteItem(task.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 5,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 30,
  },
  item: {
    fontSize: 18,
    color: '#F7CE68',
  },
});

export default ListItem;
