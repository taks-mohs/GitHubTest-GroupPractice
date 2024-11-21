import { View, StyleSheet } from "react-native";

import MainButton from "../components/MainButton";

function FirstPage(props) {
    return (
        <View style={styles.container}>
            <MainButton>Main Page</MainButton>
            <MainButton whenPressed={props.changePageHandler} >Second Page</MainButton>
            <MainButton>Third Page</MainButton>
            <MainButton>Fourth Page</MainButton>
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