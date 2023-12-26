import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
    block:{
        padding: 15,
        backgroundColor: '#26a69a',
    },
    dateText:{
        fontSize:24,
        color:'white',
    }
});

function DateHead({date}){
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    const formatter = year + '년' + month + '월' + day + '일A';
    return(
        <>
        <StatusBar backgroundColor="#26a69a"/>
        <View style={styles.block}>
            {/* <Text style={styles.dateText}>{formatter}</Text> */}
            <Text style={styles.dateText}>{year}년{month}월{day}일</Text>
        </View>
        </>
    );
}

export default DateHead;