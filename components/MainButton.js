import { Pressable, StyleSheet, Text } from "react-native";


function MainButton(props) {
  return (
    <Pressable onPress={props.whenPressed} style={styles.container}>
      <Text>{props.children}</Text>
    </Pressable>
  );
}

export default MainButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aa2831",
    padding: 8,
    margin: 16,
    borderColor: "black",
    justifyContent: 'center',
    alignItems: 'center'
  },
});
