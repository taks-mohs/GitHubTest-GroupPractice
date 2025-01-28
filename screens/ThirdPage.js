import { StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";
function ThirdPage(props) {
  return (
    <View style={styles.container}>
      <Text>Third Page</Text>
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
    </View>

  );
}

export default ThirdPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 48,
  },
  bottom: {
    //flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  }
});
