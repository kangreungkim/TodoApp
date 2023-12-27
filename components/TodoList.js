import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import TodoItem from "./TodoItem";

styles = StyleSheet.create({
    list:{
        flex:1,
    },
    separator:{
        backgroundColor:'#e0e0e0',
        height:1,
    }
});

function TodoList({todos}){
    return(
        <FlatList 
            ItemSeparatorComponent={()=><View style={styles.separator} />} 
            style={styles.list}
            data={todos} 
            renderItem={({item}) =>(
                // <View>
                //     <Text>{item.text}</Text>
                // </View>
                <TodoItem id={item.id} text={item.text} done={item.done} />
            )}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default TodoList;