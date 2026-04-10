import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

type ScoreTextProps = {
  score: number;
  style?: TextStyle; 
};

const scoreText: React.FC<ScoreTextProps> = ({ score, style }) => {
  return <Text style={[styles.text, style]}>Score: {score}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "lightgray",
    borderStyle: "solid",
    backgroundColor: "#e1e1e1",
  },
});

export default scoreText;