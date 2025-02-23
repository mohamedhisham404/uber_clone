import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View } from "react-native";
import { icons } from "@/constants";

const TabIcon = ({
    source,
    focused,
}: {
    source: ImageSourcePropType;
    focused: boolean;
}) => (
    <View
        style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 999,
            padding: 8,
            marginBottom: 28,
        }}
    >
        <View
            style={{
                width: 48,
                height: 48,
                borderRadius: 999,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: focused ? "#0CC25F" : "transparent", 
            }}
        >
            <Image
                source={source}
                tintColor="white"
                resizeMode="contain"
                style={{ width: 28, height: 28 }}
            />
        </View>
    </View>
);

export default function Layout() {
    return (
        <Tabs
            initialRouteName="home"
            screenOptions={{
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "white",
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#333333",
                    borderRadius: 50,
                    overflow: "hidden",
                    marginHorizontal: 20,
                    marginBottom: 20,
                    height: 60,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    position: "absolute",
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon source={icons.home} focused={focused} />
                    ),
                }}
            />
            <Tabs.Screen
                name="rides"
                options={{
                    title: "Rides",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon source={icons.list} focused={focused} />
                    ),
                }}
            />
            <Tabs.Screen
                name="chat"
                options={{
                    title: "Chat",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon source={icons.chat} focused={focused} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon source={icons.profile} focused={focused} />
                    ),
                }}
            />
        </Tabs>
    );
}
