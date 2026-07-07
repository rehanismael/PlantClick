import { Tabs } from "expo-router";
import { Camera, History, House } from "lucide-react-native";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#f9fbf4",
          borderRadius: 28,
          height: 70,
          // width: "90%",
          bottom: 20,
          marginLeft: 12,
          marginRight: 12,
          // shadowColor: "transparent",
          shadowOpacity: 0,
        },
        tabBarItemStyle: {
          justifyContent: "center", // Centers content vertically
          alignItems: "center", // Centers content horizontally
          paddingTop: 5, // Adds a touch of breathing room at the top
        },
        tabBarLabelStyle: {
          fontFamily: "Manrope-Bold",
          fontSize: 10,
          color: "#5d8a52",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: () => <House color="#5d8a52" size={20} />,
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: "Camera",
          tabBarIcon: () => <Camera color="#5d8a52" size={20} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: () => <History color="#5d8a52" size={20} />,
        }}
      />
    </Tabs>
  );
}
