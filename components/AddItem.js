import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');
  const onChange = value => setText(value);
  return (
    <View style={styles.listContainer}>
      <TextInput
        style={styles.item}
        placeholder="Add item"
        onChangeText={onChange}
      />
      <TouchableOpacity onPress={() => addItem(text)}>
        <Icon name="plus" size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'gray',
  },
  item: {
    fontSize: 18,
    color: 'black',
  },
});

export default AddItem;
