import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({task, deleteItem, markAsDone}) => {
  const [editing, setEditing] = useState(null);
  const [editingText, setEditingText] = useState(task.text);

  const onChange = value => {
    setEditingText(value);
  };

  const editText = taskId => {
    task.id === taskId
      ? (task.text = editingText[0].toUpperCase() + editingText.slice(1))
      : task.text;
    setEditing(null);
  };

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
      <View>
        {editing === task.id ? (
          <TextInput
            style={styles.input}
            placeholder={task.text}
            onChangeText={onChange}
          />
        ) : (
          <Text style={styleText.item}>{task.text}</Text>
        )}
      </View>
      <View style={styles.icons}>
        {editing === task.id ? (
          <Icon
            name="check"
            size={25}
            color="black"
            onPress={() => editText(task.id)}
          />
        ) : (
          <Icon
            name="edit"
            size={25}
            color="black"
            onPress={() => setEditing(task.id)}
          />
        )}
        <Icon
          name="remove"
          size={27}
          color="black"
          onPress={() => deleteItem(task.id)}
        />
      </View>
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
    position: 'relative',
  },
  icons: {
    width: 55,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: '#F7CE68',
    color: 'gray',
    fontSize: 18,
    position: 'absolute',
    marginHorizontal: 30,
    marginVertical: 5,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 30,
    top: -29,
    width: 335,
    left: -61,
  },
});

export default ListItem;
