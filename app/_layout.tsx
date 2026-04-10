import { Stack } from "expo-router";
import LoginTest from "./LoginTest";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Guess the Flag App" }} />
      <Stack.Screen name="endlessFlags" options={{ headerTitle: "Endless Flags" }} />
      <Stack.Screen name="selectGameMode" options={{ headerTitle: "Game mode" }} />
      <Stack.Screen name="LoginTest" />
    </Stack>
  );
}
