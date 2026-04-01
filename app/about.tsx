import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const About = () => {



    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About This App</Text>
            <Text style={styles.content}>
                This app is designed to help you keep track of your reading list. You can add books you want to read, mark them as read, and organize them into categories.
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