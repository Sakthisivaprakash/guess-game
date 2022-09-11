import { StyleSheet, Text } from "react-native";
import Colors from "../../const/colors";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instruction, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instruction: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  }
});
