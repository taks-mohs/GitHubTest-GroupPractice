import { StyleSheet, SafeAreaView } from 'react-native';
import { useState } from 'react';

import FirstPage from './screens/FirstPage';
import SecondPage from './screens/SecondPage';
import ThirdPage from './screens/ThirdPage';



export default function App() {
  const [pageNum, setPageNum] = useState(0);

  function changePageHandler(num) {
    console.log("change page");
    setPageNum(num);
  }

  let screen = <FirstPage whenPressed={changePageHandler}/>

  if(pageNum === 1) {
    screen = <SecondPage whenPressed={changePageHandler} />
  }

  if(pageNum === 2) {
    screen = <ThirdPage whenPressed={changePageHandler} />
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
