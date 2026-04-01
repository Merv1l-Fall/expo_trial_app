import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact us</Text>
            <Text style={styles.content}>
                If you have any questions or feedback, feel free to reach out to us!
            </Text>

            <Link href="/" style={styles.linkButton}>
                <Text style={{ color: "white", fontWeight: "bold" }}>Back to Home</Text>
            </Link>
        </View>
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
        backgroundColor: "#007AFF",
        borderRadius: 5,
    }
});

export default About;