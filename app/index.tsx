import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { Logo } from "../assets/logo/Logo";
import { Link } from "expo-router";
import { Colors } from "../constants/colors";


const Home = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme === "dark" ? "dark" : "light"];

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.background,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: theme.title,
    },
    subTitle: {
        marginTop: 10,
        marginBottom: 30,
        color: theme.text,
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



export default Home;