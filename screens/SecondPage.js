import { StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";
function SecondPage(props) {
  return (
    <View>
      <Text>Second Page</Text>
      <Text>Test Change after rename repository</Text>
      <Text>Change #2 with more details</Text>
      <MainButton whenPressed={props.whenPressed.bind(this,0)}>Go back to Main</MainButton>
    </View>
    
  );
}

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    
  }
});
