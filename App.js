/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, Button, StyleSheet} from 'react-native';
import Box from './components/Box';
import Counter from './components/Counter';

const App = () => {
    // const [visible, setVisible] = useState(true);
    const [count, setCount] = useState(0);

    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count - 1);

    // const onPress = () => {
    //     setVisible(!visible);
    // }
  return (
      // <SafeAreaView>
      //     {/* 둘 중에 하나 사용~ */}
      //     <Button title="토글" onPress={onPress} />
      //     {visible ? <Box rounded size="large" color='blue'/> : null }
      //     {/*<Box rounded={true}/>*/}
      // </SafeAreaView>

      <SafeAreaView style={styles.full}>
          <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease}/>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    full : {
        flex: 1,
    }
})

export default App;
