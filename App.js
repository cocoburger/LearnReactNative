/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Greeting from './components/Greeting';
import {SafeAreaView} from 'react-native';
import Box from './components/Box';

const App = () => {
    const name = 'JSX';
  return (
      <SafeAreaView>
          {/* 주석을 작성해봐요~ */}
          <Box />
      </SafeAreaView>
  )
}

export default App;
