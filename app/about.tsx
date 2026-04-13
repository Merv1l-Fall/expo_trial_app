import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

//themed imports
import ThemedText from "../components/ThemedText";
import ThemedView from "../components/ThemedView";
import Spacer from "../components/Spacer";

const About = () => {

    return (
        <ThemedView style={styles.container}>
            <ThemedText type="title" style={styles.title}>About This App</ThemedText>
            <Spacer height={10} />
            <ThemedText type="text" style={styles.content}>
                This app is designed to help you keep track of your reading list. You can add books you want to read, mark them as read, and organize them into categories.
            </ThemedText>

            <Spacer height={20} />
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
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
    },
    linkButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: Colors.primary,
        borderRadius: 5,
    }
});

export default About;