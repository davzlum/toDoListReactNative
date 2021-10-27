import React, {useState} from 'react';
import ListItem from './components/ListItem';
import Header from './components/Header';
import AddItem from './components/AddItem';
import {StyleSheet, View, FlatList} from 'react-native';

const App = () => {
  const [tasks, setTasks] = useState([
    {id: 1, text: 'Clean room'},
    {id: 2, text: 'Cook dinner'},
    {id: 3, text: 'Watch the simpsons'},
    {id: 4, text: 'Read chopped book'},
  ]);

  const addItem = text => {
    setTasks(tasksList => {
      return [
        {id: Math.round(Math.random() * 100 - 5) + 5, text},
        ...tasksList,
      ];
    });
  };

  const deleteItem = taskId => {
    setTasks(tasksList => {
      return tasksList.filter(task => task.id !== taskId);
    });
  };
  return (
    <View>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={tasks}
        renderItem={({item}) => (
          <ListItem deleteItem={deleteItem} task={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
