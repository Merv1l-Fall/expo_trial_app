import { View, Text, StyleSheet } from "react-native";
import { Logo } from "../assets/logo/Logo";
import { Link } from "expo-router";


const Home = () => {
    return (
        <View style={styles.container}>
            
            <Logo size={100} style={styles.logo} />
            <Text style={styles.title}>The number 1</Text>
            <Text style={styles.subTitle}>Reading List App</Text>

            <Link href="/about" style={styles.linkButton}>
                <Text style={{ color: "white", fontWeight: "bold" }}>About</Text>
            </Link>
            <Link href="/contact" style={styles.linkButton}>
                <Text style={{ color: "white", fontWeight: "bold" }}>Contact</Text>
            </Link>

        </View>
    )
}

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
        backgroundColor: "#007AFF",
        borderRadius: 5,
    }
});

export default Home;