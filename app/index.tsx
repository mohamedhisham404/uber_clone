import { Redirect } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

const Home = () => {
    return (
        <Redirect href={'/(auth)/welcome'}/>
    );
};

export default Home;