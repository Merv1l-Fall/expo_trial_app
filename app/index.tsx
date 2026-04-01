import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { Logo } from "../assets/logo/Logo";
import { Link } from "expo-router";
import { Colors } from "../constants/colors";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";


const Home = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme === "dark" ? "dark" : "light"];

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
    subTitle: {
        marginTop: 10,
        marginBottom: 30,
    },
    logo: {
        marginVertical: 20,
    },
    linkButton: {
        marginTop: 20,       
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: Colors.primary,
        borderRadius: 5,
    }
});

    return (
        <ThemedView style={styles.container}>
            <Logo size={100} style={styles.logo} />
            <ThemedText type="title" style={styles.title}>The Number 1</ThemedText>
            <ThemedText type="text" style={styles.subTitle}>Reading List App</ThemedText>


            <Link href="/about" style={styles.linkButton}>
                <ThemedText type="title" >About</ThemedText>
            </Link>
            <Link href="/contact" style={styles.linkButton}>
                <ThemedText type="title" >Contact</ThemedText>
            </Link>

        </ThemedView>
    )
}



export default Home;