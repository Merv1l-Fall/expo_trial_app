import { Stack } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native"
import { Colors } from "../constants/colors";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme === "dark" ? "dark" : "light"];

    return (
        <>
            <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
            <Stack screenOptions={{
                headerStyle: { backgroundColor: theme.navBackground },
                headerTintColor: theme.title,
            }}>
                <Stack.Screen name="index" options={{ title: "Home" }} />
                <Stack.Screen name="about" options={{ title: "About" }} />
                <Stack.Screen name="contact" options={{ title: "Contact" }} />
            </Stack>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        
        
    },
});

export default RootLayout;