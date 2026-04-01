import { View, Text, StyleSheet, Image } from "react-native";
import { Logo } from "../assets/logo/Logo";


const Home = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://via.placeholder.com/100" }} style={styles.image} />
            <Text style={styles.title}>The number 1</Text>
            <Text style={styles.subTitle}>Reading List App</Text>

            <Logo size={100} />

            <View style={styles.card}>
                <Text>Hello, this is a card</Text>
            </View>
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
    card: {
        backgroundColor: "#e1e0e0",
        padding: 20,
        borderRadius: 5,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
    }
});

export default Home;