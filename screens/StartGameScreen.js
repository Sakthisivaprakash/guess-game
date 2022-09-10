import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButtons";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonsCont}>
        <View style={styles.buttonCont}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonCont}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 4, // Shadow Prop for android
    shadowColor: "black", // Shadow Prop for IoS
    shadowOffset: { width: 0, height: 2 }, // Shadow Prop for IoS
    shadowRadius: 6, // Shadow Prop for IoS
    shadowOpacity: 0.25, // Shadow Prop for IoS
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: "#ddb52f",
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsCont: {
    flexDirection: "row",
  },
  buttonCont: {
    flex: 1
  }
});
