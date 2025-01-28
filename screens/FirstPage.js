import { View, StyleSheet } from "react-native";

import MainButton from "../components/MainButton";

function FirstPage(props) {
    return (
        <View style={styles.container}>
            <MainButton>Main Page</MainButton>
            <MainButton whenPressed={props.whenPressed.bind(this,1)}>Second Page</MainButton>
            <MainButton whenPressed={props.whenPressed.bind(this,2)}>Third Page</MainButton>
        </View>
    );
}

export default FirstPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aaaaaa',
        justifyContent: 'center'
    }
});