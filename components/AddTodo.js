import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Image,
     TouchableOpacity, TouchableNativeFeedback, platform, Platform, Keyboard} from 'react-native';

const styles = StyleSheet.create({
    block:{
        backgroundColor:'white',
        height : 64,
        paddingHorizontal: 16,
        borderColor: '#bdbdbd',
        borderTopWidth:1,
        borderBottomWidth:1,
        justifyContent:'center',
        flexDirection:'row',
        alignItems: "center",
    },
    input:{
        flex:1,
        fontSize: 16,
        paddingVertical: 8,
    },
    buttonStyle:{
        alignItems:'center',
        justifyContent:'center',
        width:48,
        height:48,
        backgroundColor:'#26a69a',
        borderRadius:24,
    },
    cicleWrapper:{
        overflow: 'hidden',
        borderRadius: 24,
    }
});

function AddTodo(){
    const [text, setText] = useState('');
    // console.log(text);
    const button = (
        <View style={styles.buttonStyle}>
            <Image source={require('../assets/icons/add_white/add_white.png')} />
        </View>
    );
    const onPress = () =>{
        setText('');
        Keyboard.dismiss();
    };

    return(
        <View style={styles.block}>
            <TextInput placeholder='할일을 입력하세요' 
                style={styles.input} 
                value={text} 
                onChangeText={setText} 
                onSubmitEditing={onPress} 
                returnKeyType='done'
            />
            {/* {Platform.OS === 'ios' ? (
            <TouchableOpacity activeOpacity={0.5}>{button}</TouchableOpacity>
            ) :(
                <View style={styles.cicleWrapper}>
                <TouchableNativeFeedback>{button}</TouchableNativeFeedback>
                </View>
            )} */}
            {Platform.select({
                ios:<TouchableOpacity activeOpacity={0.5} onPress={onPress}>{button}</TouchableOpacity>,
                android:(
                    <View style={styles.cicleWrapper}>
                    <TouchableNativeFeedback onPress={onPress}>{button}</TouchableNativeFeedback>
                    </View>                    
                )
            })}
        </View>
    );
}
export default AddTodo;