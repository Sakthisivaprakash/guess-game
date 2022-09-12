import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../const/colors";
const Card = ({children}) => {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: deviceWidth < 380 ? 18 : 36,
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
})