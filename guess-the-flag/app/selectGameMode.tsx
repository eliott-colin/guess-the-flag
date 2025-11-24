import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function GameModeSelection() {
  const router = useRouter();
    return (
    <View style={{ flex: 1,marginTop: 100,flexDirection: 'row',flexWrap: 'wrap',justifyContent: 'center', gap: 20 }}>
        <View style={{ borderColor: "lightgray", borderWidth: 2, borderRadius: 8, padding: 10, alignItems: "center", width: 300 }}>
            <Image source={require("../assets/images/endless-image.png")} style={{ width: 150, height: 150, marginBottom: 30 , borderRadius : 20}} />
            <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>Select Game Mode</Text>
            <Text style={{ fontSize: 16, textAlign: "center", marginBottom: 40, paddingHorizontal: 20 }}>
            Choose your preferred game mode and test your knowledge of world flags!
            </Text>
            <TouchableOpacity onPress={() => router.push("/endlessFlags")} style={{ padding: 20, backgroundColor: "#e1e1e1", borderRadius: 8, marginBottom: 20 }}>
            <Text style={{ fontSize: 20 }}>Endless Flags ▶</Text>
            </TouchableOpacity>
        </View>
        <View style={{ borderColor: "lightgray", borderWidth: 2, borderRadius: 8, padding: 10, alignItems: "center", width: 300 }}>
            <Image source={require("../assets/images/endless-image.png")} style={{ width: 150, height: 150, marginBottom: 30 }} />
            <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>Select Game Mode</Text>
            <Text style={{ fontSize: 16, textAlign: "center", marginBottom: 40, paddingHorizontal: 20 }}>
            Choose your preferred game mode and test your knowledge of world flags!
            </Text>
            <TouchableOpacity onPress={() => router.push("/endlessFlags")} style={{ padding: 20, backgroundColor: "#e1e1e1", borderRadius: 8, marginBottom: 20 }}>
            <Text style={{ fontSize: 20 }}>Endless Flags ▶</Text>
            </TouchableOpacity>
        </View>
        <View style={{ borderColor: "lightgray", borderWidth: 2, borderRadius: 8, padding: 10, alignItems: "center", width: 300 }}>
            <Image source={require("../assets/images/endless-image.png")} style={{ width: 150, height: 150, marginBottom: 30 }} />
            <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>Select Game Mode</Text>
            <Text style={{ fontSize: 16, textAlign: "center", marginBottom: 40, paddingHorizontal: 20 }}>
            Choose your preferred game mode and test your knowledge of world flags!
            </Text>
            <TouchableOpacity onPress={() => router.push("/endlessFlags")} style={{ padding: 20, backgroundColor: "#e1e1e1", borderRadius: 8, marginBottom: 20 }}>
            <Text style={{ fontSize: 20 }}>Endless Flags ▶</Text>
            </TouchableOpacity>
        </View>
        <View style={{ borderColor: "lightgray", borderWidth: 2, borderRadius: 8, padding: 10, alignItems: "center", width: 300 }}>
            <Image source={require("../assets/images/endless-image.png")} style={{ width: 150, height: 150, marginBottom: 30 }} />
            <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>Select Game Mode</Text>
            <Text style={{ fontSize: 16, textAlign: "center", marginBottom: 40, paddingHorizontal: 20 }}>
            Choose your preferred game mode and test your knowledge of world flags!
            </Text>
            <TouchableOpacity onPress={() => router.push("/endlessFlags")} style={{ padding: 20, backgroundColor: "#e1e1e1", borderRadius: 8, marginBottom: 20 }}>
            <Text style={{ fontSize: 20 }}>Endless Flags ▶</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}