import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButtons";
import Colors from "../const/colors";

const StartGameScreen = ({OnConfirm}) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (value) => {
    setEnteredNumber(value);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
      );
      return;
    }
    OnConfirm(chosenNumber);
    console.log('Valid Number!');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsCont}>
        <View style={styles.buttonCont}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonCont}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
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
    backgroundColor: Colors.primary800,
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
    borderBottomColor: Colors.accent500,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsCont: {
    flexDirection: "row",
  },
  buttonCont: {
    flex: 1,
  },
});
