import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            {/* SUESS */}
            <View>
                <Text>Higher or lower?</Text>
                {/* +
                - */}
            </View>
            {/* <View>LOG ROUNDS</View> */}
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    }
});