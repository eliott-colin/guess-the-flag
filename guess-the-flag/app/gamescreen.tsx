import { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, ImageSourcePropType } from "react-native";
import flagsData from "../data/flags.json";
import { flagImages } from "../data/flagImages";
import ScoreText from "./scoreText";

interface Flag {
  country: string;
  code: string;
  image: ImageSourcePropType;
  options: string[];
}

export default function GameScreen() {
  const flags: Flag[] = flagsData.countries.map((c) => ({
    country: c.name,
    code: c.code,
    image: flagImages[c.code as keyof typeof flagImages] as ImageSourcePropType,
    options: generateOptions(c.name),
  }));

  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  
  const handlePress = (answer: string) => {
    let score;
    if (answer === flags[index].country) {
      setScore((prev) => (prev + 1));
      console.log("✔ Correct !");
    } else {
      console.log("❌ Faux !");
    }
    setIndex((prev) => (prev + 1) % flags.length);
  };

  return (
    <View style={styles.container}>
      <ScoreText score={score}/>
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


function generateOptions(correct: string): string[] {
  const otherCountries = flagsData.countries
    .map((c) => c.name)
    .filter((n) => n !== correct)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const allOptions = [...otherCountries, correct];
  return allOptions.sort(() => 0.5 - Math.random());
}
