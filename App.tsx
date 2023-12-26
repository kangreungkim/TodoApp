/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
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

function App(): React.JSX.Element {
  const today = new Date();
  // console.log(today);
  const [todos, setTodos] = useState([
    {id:1, text: '작업환경 설정', done:true},
    {id:2, text: '리액트 네이티브 기초 공부', done:false},
    {id:3, text: '투두 리스트 만들어 보기', done:false},
  ]);

  return (
    <SafeAreaView style={styles.block}>
      {/* <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.avoid}> */}
      <KeyboardAvoidingView behavior={Platform.select({ios:'padding', android: undefined})} style={styles.avoid}>
         <DateHead date={today}/>
         {/* <Empty /> */}
         {/* {todos.length === 0 ? <Empty /> : <TodoList todos={todos}/>} */}
         <TodoList todos={todos}/>
         <AddTodo />
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
