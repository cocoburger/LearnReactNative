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

const App = () => {
    const [visible, setVisible] = useState(true);
    const onPress = () => {
        setVisible(!visible);
    }

  return (
      // <SafeAreaView>
      //     {/* 둘 중에 하나 사용~ */}
      //     <Button title="토글" onPress={onPress} />
      //     {visible ? <Box rounded size="large" color='blue'/> : null }
      //     {/*<Box rounded={true}/>*/}
      // </SafeAreaView>

      <SafeAreaView style={styles.full}>

      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    full : {
        flex: 1,
    }
})

export default App;
