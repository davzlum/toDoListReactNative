import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({task, deleteItem, markAsDone}) => {
  const styleText = {
    item: {
      fontSize: 18,
      color: '#F7CE68',
      textDecorationLine: !task.state ? 'none' : 'line-through',
    },
  };
  return (
    <TouchableOpacity
      onLongPress={() => markAsDone(task.id)}
      style={styles.listContainer}>
      <Text style={styleText.item}>{task.text}</Text>
      <Icon
        name="remove"
        size={25}
        color="black"
        onPress={() => deleteItem(task.id)}
      />
    </TouchableOpacity>
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
});

export default ListItem;
