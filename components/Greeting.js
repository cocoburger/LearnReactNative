import React from 'react';
import {View, Text} from 'react-native';

//반환할 때 꼭 하나의 태그로 감싸져 있어야 한다.
function Greeting(props) {
    return (
        <>
            <View>
                <Text> 안녕하세요. {props.name} </Text>
            </View>
            <Text> 추가 text! </Text>
        </>
    );

}

Greeting.defaultProps = {
    name: '리액트 네이티브',
}
export default Greeting;
