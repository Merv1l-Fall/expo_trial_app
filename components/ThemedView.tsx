import { View, useColorScheme } from "react-native";
import { Colors } from "../constants/colors";


const ThemedView = ({ style, ...props }: { children: React.ReactNode, style?: any }) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme === "dark" ? "dark" : "light"];

    return (
        <View style={[
            { backgroundColor: theme.background },
            style
        ]} {...props}
        />

    )
}

export default ThemedView;