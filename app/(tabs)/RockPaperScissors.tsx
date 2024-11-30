import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const RockPaperScissors: React.FC = () => {
  const [userChoice, setUserChoice] = useState<string>("");
  const [computerChoice, setComputerChoice] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const choices = ["Rock", "Paper", "Scissors"];

  const playGame = (userSelection: string) => {
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(userSelection);
    setComputerChoice(computerSelection);
    determineWinner(userSelection, computerSelection);
  };

  const determineWinner = (user: string, computer: string) => {
    if (user === computer) {
      setResult("It's a Tie!");
    } else if (
      (user === "Rock" && computer === "Scissors") ||
      (user === "Paper" && computer === "Rock") ||
      (user === "Scissors" && computer === "Paper")
    ) {
      setResult("You Win!");
    } else {
      setResult("Computer Wins!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rock Paper Scissors</Text>
      <View style={styles.choicesContainer}>
        {choices.map((choice) => (
          <Button key={choice} title={choice} onPress={() => playGame(choice)} />
        ))}
      </View>
      <Text style={styles.text}>Your Choice: {userChoice || "-"}</Text>
      <Text style={styles.text}>Computer's Choice: {computerChoice || "-"}</Text>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000", // Black background
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  choicesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: "white",
    marginVertical: 10,
  },
  result: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    color: "white",
  },
});

export default RockPaperScissors;
