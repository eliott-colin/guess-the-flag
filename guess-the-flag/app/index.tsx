import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", marginTop: 100 }}>
      <Image source={require("../assets/images/flag-image.png")} style={{ width: 300, height: 300, marginBottom: 30 }} />
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>Guess The Flag</Text>
      <Text style={{ fontSize: 16, textAlign: "center", marginBottom: 40, paddingHorizontal: 20 }}>
        Test your knowledge of world flags ! Can you identify them all ?
      </Text>
      <TouchableOpacity onPress={() => router.push("/selectGameMode")} style={{ padding: 20, backgroundColor: "#e1e1e1", borderRadius: 8 }}>
        <Text style={{ fontSize: 20 }}>Start Game ▶</Text>
      </TouchableOpacity>
    </View>
  );
}