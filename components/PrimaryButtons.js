import { View, Text, Pressable, StyleSheet } from "react-native";
const PrimaryButton = ({ children }) => {
  const pressHandler = () => {
    console.log("Pressed!");
  };
  return (
    <View style={styles.buttonOuterCont}>
      <Pressable
        style={({pressed}) => pressed ? [styles.buttonInnerCont, styles.pressed] : styles.buttonInnerCont}
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterCont: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerCont: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75
  }
});
