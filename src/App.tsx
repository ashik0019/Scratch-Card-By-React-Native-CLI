/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import AnimationScratchCard from './screens/AnimationScratchCard';







function App(): React.JSX.Element {


  return (
    <SafeAreaView style={styles?.container}>
      <AnimationScratchCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

})

export default App;
