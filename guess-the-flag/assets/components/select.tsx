import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

interface SelectProps {
  title: string;
  description: string;
  imageSrc: any;
  navigateTo: string;
}

export default function Select({ title, description, imageSrc, navigateTo, }: SelectProps) {
  const router = useRouter();
    return (
        <View style={{ borderColor: "lightgray", borderWidth: 2, borderRadius: 8, padding: 10, alignItems: "center", width: 300 }}>
        <Image source={imageSrc} style={{ width: 150, height: 150, marginBottom: 30 , borderRadius : 20}} />
        <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>{title}</Text>
        <Text style={{ fontSize: 16, textAlign: "center", marginBottom: 40, paddingHorizontal: 20 }}>
        {description}
        </Text>
        <TouchableOpacity onPress={() => router.push(navigateTo as any)} style={{ padding: 20, backgroundColor: "#e1e1e1", borderRadius: 8, marginBottom: 20 }}>
        <Text style={{ fontSize: 20 }}>{title} ▶</Text>
        </TouchableOpacity>
        </View>

            
  );
}