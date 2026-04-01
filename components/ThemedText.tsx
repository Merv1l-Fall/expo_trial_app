import {Text, TextProps, useColorScheme} from "react-native";
import { Colors } from "../constants/colors";

type ThemedTextProps = TextProps & {
    type: "title" | "text";
    children: React.ReactNode;
}

const ThemedText = ({ style, type, children, ...props }: ThemedTextProps) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme === "dark" ? "dark" : "light"];
    return (
        <Text style={[
            type === "title" ? { color: theme.title } : { color: theme.text },
            style
        ]} {...props} >
            {children}
        </Text>
    )
}

export default ThemedText;