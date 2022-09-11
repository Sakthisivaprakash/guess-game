import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../const/colors";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterCont}>
      <Pressable
        style={({pressed}) => pressed ? [styles.buttonInnerCont, styles.pressed] : styles.buttonInnerCont}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
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
    backgroundColor: Colors.primary500,
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
