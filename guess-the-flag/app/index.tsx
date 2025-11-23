import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={() => router.push("/gamescreen")} style={{ padding: 20, backgroundColor: "#e1e1e1", borderRadius: 8 }}>
        <Text style={{ fontSize: 20 }}>Start Game ▶</Text>
      </TouchableOpacity>
    </View>
  );
}