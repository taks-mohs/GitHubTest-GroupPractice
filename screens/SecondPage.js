import { StyleSheet, Text } from "react-native";
import MainButton from "../components/MainButton";
function SecondPage(props) {
  return (
    <View>
      <Text>Second Page</Text>
      <Text>Change #1</Text>
      <Text>Change #2 with more details</Text>
      <MainButton whenPressed={props.homeButtonPressed}>Go back to Main</MainButton>
    </View>
    
  );
}

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    
  }
});
