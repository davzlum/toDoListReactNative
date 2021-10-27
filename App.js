import React, {useState} from 'react';
import ListItem from './components/ListItem';
import Header from './components/Header';
import AddItem from './components/AddItem';
import {StyleSheet, View, FlatList} from 'react-native';

const App = () => {
  const [tasks, setTasks] = useState([
    {id: 1, text: 'Clean room', state: false},
    {id: 2, text: 'Cook dinner', state: false},
    {id: 3, text: 'Watch the simpsons', state: false},
    {id: 4, text: 'Read chopped book', state: false},
  ]);

  const addItem = text => {
    setTasks(tasksList => {
      return [
        {id: Math.round(Math.random() * 100 - 5) + 5, text, state: false},
        ...tasksList,
      ];
    });
  };

  const markAsDone = taskId => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? {...task, state: !task.state} : task,
      ),
    );
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
          <ListItem
            deleteItem={deleteItem}
            task={item}
            markAsDone={markAsDone}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
