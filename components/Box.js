import React from 'react';
import {View, StyleSheet} from 'react-native';


function Box(props) {
    return (
        //컴포넌트 스타일을 지정할 때 여러 스타일을 적용하고 싶다면 배열로 설정한다.
        <View style={[styles.box, styles.rounded]} />
    );
}

const styles = StyleSheet.create({
    box : {
        width: 64,
        height: 64,
        backgroundColor: 'black',
    },
    rounded : {
        borderRadius: 16,
    },
});

export default Box;
