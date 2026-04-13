import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { Logo } from "../assets/logo/Logo";
import { Link } from "expo-router";
import { Colors } from "../constants/colors";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";


const Home = () => {

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },

    linkButton: {      
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: Colors.primary,
        borderRadius: 5,
    }
});

    return (
        <ThemedView style={styles.container}>
            <Logo size={100} />
            <ThemedText type="title" style={styles.title}>The Number 1</ThemedText>
            <Spacer height={10} />
            <ThemedText type="text">Reading List App</ThemedText>

            <Spacer height={50} />
            <Link href="/about" style={styles.linkButton}>
                <ThemedText type="title" >About</ThemedText>
            </Link>
            <Spacer height={10} />
            <Link href="/contact" style={styles.linkButton}>
                <ThemedText type="title" >Contact</ThemedText>
            </Link>

        </ThemedView>
    )
}



export default Home;