import { View, useColorScheme, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
});


const ThemedView = ({ style, ...props }: { children: React.ReactNode, style?: any }) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme === "dark" ? "dark" : "light"];

    return (
        <View style={[
            { backgroundColor: theme.uiBackground }, styles.card,
            style
        ]} {...props}
        />

    )
}

export default ThemedView;