import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');
  const onChange = value => setText(value);
  return (
    <View>
      <TextInput placeholder="Add item" onChangeText={onChange} />
      <TouchableOpacity onPress={() => addItem(text)}>
        <Icon name="plus" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;
