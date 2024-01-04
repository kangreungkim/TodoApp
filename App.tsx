/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo.js';
import Empty from './components/Empty.js';
import TodoList from './components/TodoList.js';
// import AsyncStorage from '@react-native-community/async-storage';
import todoStorage from './storages/todoStorages.js'

function App(): React.JSX.Element {
  const today = new Date();
  // console.log(today);
  const [todos, setTodos] = useState([
    {id:1, text: '작업환경 설정', done:true},
    {id:2, text: '리액트 네이티브 기초 공부', done:false},
    {id:3, text: '투두 리스트 만들어 보기', done:false},
  ]);

  useEffect(()=>{
    todoStorage
    .get()
    .then(setTodos)
    .catch(console.error);
  }, []);

  useEffect(()=>{
    todoStorage.set(todos).catch(console.error);
  }, [todos]);
  // useEffect(()=>{
  //   async function load() {
  //     try{
  //       const rawTodos = await AsyncStorage.getItem('todos');
  //       const savedTodos = JSON.parse(rawTodos);
  //       setTodos(savedTodos);
  //     }catch(e){
  //       console.log('failed to load todos');
  //     }
  //   }
  //   async function save(){
  //     try{
  //       await AsyncStorage.setItem('todos', JSON.stringify(todos));
  //     } catch(e){
  //       console.log('Failed to save todos');
  //     }
  //   }
  //   save();
  // },[todos]);

  const onInsert = text =>{
    const nextId = todos.length > 0 ? Math.max(...todos.map(todo=>todo.id))+1:1;
    const todo = {
      id:nextId,
      text,
      done:false,
    };
    setTodos(todos.concat(todo));
  };

  const onToggle = id =>{
    const nextTodos = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );

    setTodos(nextTodos);
  };

  const onRemove = id =>{
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  return (
    <SafeAreaView style={styles.block}>
      {/* <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.avoid}> */}
      <KeyboardAvoidingView behavior={Platform.select({ios:'padding', android: undefined})} style={styles.avoid}>
         <DateHead date={today}/>
         {todos.length === 0 ? 
          (<Empty />) : 
          (<TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>)
         }
         
         <AddTodo onInsert={onInsert}/>
      </KeyboardAvoidingView>         
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block:{
    flex:1,
  },
  avoid:{
    flex:1,
  }
});

export default App;
