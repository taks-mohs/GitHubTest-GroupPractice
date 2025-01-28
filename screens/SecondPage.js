import { ScrollView, ImageBackground, StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";

export default function SecondPage(props) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('../assets/pacImage.jpg')} resizeMode='cover'>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Text style={{ fontSize: 100 }}>
            Moanalua High School
          </Text>
          <View style={styles.top}>
            <Text style={styles.text}>Hello World</Text>
            <Text style={styles.text}>Hello World</Text>
            <Text style={styles.text}>Hello World</Text>
            <Text style={styles.text}>Hello World</Text>
          </View>
          <View style={styles.middle}>

          </View>
          <View style={styles.bottom}>
            <Text style={styles.text}>More Words</Text>
            <Text style={styles.text}>More Words</Text>
            <Text style={styles.text}>More Words</Text>
            <Text style={styles.text}>More Words</Text>
            <Text style={styles.text}>More Words</Text>
            <Text style={styles.text}>More Words</Text>
            <Text style={styles.text}>More Words</Text>
            <Text style={styles.text}>More Words</Text>
          </View>
          <MainButton whenPressed={props.whenPressed.bind(this, 0)}>Go back to Main</MainButton>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    width: '100%',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    width: 'undefined',
    //height: '100'
  },
  text: {
    fontSize: 48,
  },
  top: {
    //flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  middle: {
    //flex: 1,
    height: 300,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  bottom: {
    //flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  }
});
