import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const TemperatureConverter: React.FC = () => {
  const [celsius, setCelsius] = useState<string>("");
  const [fahrenheit, setFahrenheit] = useState<string>("");

  const convertToFahrenheit = () => {
    const celsiusValue = parseFloat(celsius);
    if (!isNaN(celsiusValue)) {
      const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
      setFahrenheit(fahrenheitValue.toFixed(2)); // Rounds to 2 decimal places
    } else {
      setFahrenheit("Invalid input");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Temperature Converter</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter Celsius"
        placeholderTextColor="lightgray"
        value={celsius}
        onChangeText={(text) => setCelsius(text)}
      />
      <Button title="Convert" onPress={convertToFahrenheit} />
      <Text style={styles.result}>
        Fahrenheit: {fahrenheit ? fahrenheit : "-"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#000", // Set background color to black for better contrast
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white", // White text color for the header
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 20,
    color: "white", // White text color for input
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    color: "white", // White text color for the result
  },
});

export default TemperatureConverter;
