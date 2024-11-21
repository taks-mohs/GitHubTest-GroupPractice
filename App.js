import { StyleSheet, SafeAreaView } from 'react-native';
import { useState } from 'react';

import FirstPage from './screens/FirstPage';
import SecondPage from './screens/SecondPage';



export default function App() {
  const [pageNum, setPageNum] = useState(0);

  function changePageHandler() {
    setPageNum(1);
  }

  let screen = <FirstPage whenPressed={changePageHandler}/>

  if(pageNum === 1) {
    screen = <SecondPage />
  }

  return (
    <SafeAreaView style={styles.container}>
      {screen}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
