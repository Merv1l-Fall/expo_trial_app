import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

//themed imports
import ThemedText from "../components/ThemedText";
import ThemedView from "../components/ThemedView";

const About = () => {

    
    return (
        <ThemedView style={styles.container}>
            <ThemedText type="title" style={styles.title}>Contact us</ThemedText>
            <ThemedText type="text" style={styles.content}>
                If you have any questions or feedback, feel free to reach out to us!
            </ThemedText>

            <Link href="/" style={styles.linkButton}>
                <ThemedText type="title" >Back to Home</ThemedText>
            </Link>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
    },
    linkButton: {
        marginTop: 20,       
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: Colors.primary,
        borderRadius: 5,
    }
});

export default About;