import { Stack } from "expo-router";
import { useManropeFonts } from "../../hooks/useManropeFonts";

export default function RootLayout() {
  const { fontsLoaded, fontError } = useManropeFonts();
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
