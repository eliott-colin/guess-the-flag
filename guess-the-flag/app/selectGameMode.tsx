import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import Select from "../assets/components/select";
 
export default function GameModeSelection() {
  const router = useRouter();
    return (
    <View style={{ flex: 1 ,marginTop: 100,flexDirection: 'row',flexWrap: 'wrap',justifyContent: 'center', gap: 20}}>
        <View style={{ marginBottom: 20 , gap: 20}}>
            <Select title="Endless Flags" description="Choose your preferred game mode and test your knowledge of world flags!" imageSrc={require("../assets/images/endless-image.png")} navigateTo="/endlessFlags" ></Select>
            <Select title="Endless Flags" description="Choose your preferred game mode and test your knowledge of world flags!" imageSrc={require("../assets/images/endless-image.png")} navigateTo="/endlessFlags" ></Select>
        </View>
        <View style={{ marginBottom: 20 , gap: 20}}>
            <Select title="Endless Flags" description="Choose your preferred game mode and test your knowledge of world flags!" imageSrc={require("../assets/images/endless-image.png")} navigateTo="/endlessFlags" ></Select>
            <Select title="Endless Flags" description="Choose your preferred game mode and test your knowledge of world flags!" imageSrc={require("../assets/images/endless-image.png")} navigateTo="/endlessFlags" ></Select>
        </View>
    </View>
  );
}

