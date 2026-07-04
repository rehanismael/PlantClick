import { Tabs } from "expo-router";
import { Camera, History, House } from "lucide-react-native";

export default function _layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{ title: "Home", tabBarIcon: () => <House size={25} /> }}
      />
      <Tabs.Screen
        name="camera"
        options={{ title: "Camera", tabBarIcon: () => <Camera size={25} /> }}
      />
      <Tabs.Screen
        name="history"
        options={{ title: "History", tabBarIcon: () => <History size={25} /> }}
      />
    </Tabs>
  );
}
