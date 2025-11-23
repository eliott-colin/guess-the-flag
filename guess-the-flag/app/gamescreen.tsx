import { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, ImageSourcePropType } from "react-native";

interface Flag {
  country: string;
  image: ImageSourcePropType;
  options: string[];
}

export default function GameScreen() {
  const [index, setIndex] = useState<number>(0);

  const flags: Flag[] = [
    {
      country: "France",
      image: require("../assets/flags/fr.png"),
      options: ["France", "Italy", "Russia", "Luxembourg"],
    },
    {
      country: "Japan",
      image: require("../assets/flags/ad.png"),
      options: ["China", "Japan", "Korea", "Bangladesh"],
    },
  ];

  const handlePress = (answer: string) => {
    if (answer === flags[index].country) {
      console.log("✔ Correct !");
    } else {
      console.log("❌ Faux !");
    }
    setIndex((prev) => (prev + 1) % flags.length);
  };

  return (
    <View style={styles.container}>
      <Image source={flags[index].image} style={styles.flag} />

      {flags[index].options.map((opt) => (
        <TouchableOpacity key={opt} style={styles.btn} onPress={() => handlePress(opt)}>
          <Text style={styles.text}>{opt}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  flag: { width: 260, height: 150, marginBottom: 30 },
  btn: { margin: 10, padding: 12, backgroundColor: "#e1e1e1", borderRadius: 8, width: 200 },
  text: { textAlign: "center", fontSize: 18 },
});
