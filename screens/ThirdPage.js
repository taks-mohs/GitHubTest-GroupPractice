import { StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";
function ThirdPage(props) {
  return (
    <View style={styles.container}>
      <Text>Third Page</Text>
      <MainButton whenPressed={props.whenPressed.bind(this,0)}>Go back to Main</MainButton>
    </View>
    
  );
}

export default ThirdPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'blue',
  }
});
