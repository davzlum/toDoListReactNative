import React, {useState} from 'react';
import ListItem from './components/ListItem';
import Header from './components/Header';
import {StyleSheet, View, FlatList} from 'react-native';

const App = () => {
  const [tasks, setTasks] = useState([
    {id: 1, text: 'Clean room'},
    {id: 2, text: 'Cook dinner'},
    {id: 3, text: 'Watch the simpsons'},
    {id: 4, text: 'Read chopped book'},
  ]);
  return (
    <View>
      <Header />
      <FlatList
        data={tasks}
        renderItem={({item}) => <ListItem task={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
