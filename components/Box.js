import React from 'react';
import {View, StyleSheet} from 'react-native';


function Box({rounded, size, color}) {
    return (
        //컴포넌트 스타일을 지정할 때 여러 스타일을 적용하고 싶다면 배열로 설정한다.
        //삼항 연산자 혹은 아래 코드처럼 실행가능 props.rounded가 true이면, 스타일 적용하고 false이면 아무 스타일도 적용 안한다.
        <View style={[styles.box, rounded && styles.rounded, sizes[size], {
            backgroundColor: color
        } ]} />
        // <View style={[styles.box, props.rounded ? styles.rounded : null]} />
    );
}

Box.defaultProps = {
    size: 'medium',
    color: 'black'
}

const styles = StyleSheet.create({
    box : {
        width: 64,
        height: 64,
        backgroundColor: 'black',
    },
    rounded : {
        borderRadius: 35,
    },
    small : {
        width: 32,
        height: 32,
    },
    medium: {
        width: 64,
        height: 64,
    },
    large: {
        width: 128,
        height: 128,
    },
});

const sizes = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
};
export default Box;
