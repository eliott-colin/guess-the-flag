import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Guess The Flag" }} />
      <Stack.Screen name="gamescreen" options={{ headerTitle: "Game Screen" }} />
    </Stack>
  );
}
