import React, {useState} from 'react';
import ListItem from './components/ListItem';
import {StyleSheet, View, FlatList, Text} from 'react-native';

const App = () => {
  const [tasks, setTasks] = useState([
    {id: 1, text: 'Clean room'},
    {id: 2, text: 'Cook dinner'},
    {id: 3, text: 'Watch the simpsons'},
    {id: 4, text: 'Read chopped book'},
  ]);
  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={({item}) => <ListItem task={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
