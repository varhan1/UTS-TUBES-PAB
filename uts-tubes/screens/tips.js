import React from "react";
import { View, Text, Button } from "native-base";
import { StyleSheet, ScrollView } from "react-native";

const Setting = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Scrollable content */}
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.healthSection}>
          <Text style={styles.healthTitle}>Health Tips</Text>

          <Text style={styles.healthDescription}>
            Stay hydrated, exercise regularly, and eat a balanced diet for a healthy life.
          </Text>

          <Text style={styles.healthTitle}>1. Stay Hydrated</Text>
          <Text style={styles.healthDescription}>
            Drinking plenty of water is essential for your body's functions. Aim for at least 8 cups of water a day.
          </Text>

          <Text style={styles.healthTitle}>2. Exercise Regularly</Text>
          <Text style={styles.healthDescription}>
            Physical activity helps improve cardiovascular health, strengthen muscles, and boost overall energy. Aim for at least 30 minutes of exercise 5 days a week.
          </Text>

          <Text style={styles.healthTitle}>3. Eat a Balanced Diet</Text>
          <Text style={styles.healthDescription}>
            Include a variety of fruits, vegetables, lean proteins, and whole grains in your diet. Avoid processed foods high in sugars and fats.
          </Text>

          <Text style={styles.healthTitle}>4. Get Enough Sleep</Text>
          <Text style={styles.healthDescription}>
            Aim for 7-9 hours of quality sleep each night. Sleep is crucial for mental clarity, emotional well-being, and physical recovery.
          </Text>

          <Text style={styles.healthTitle}>5. Manage Stress</Text>
          <Text style={styles.healthDescription}>
            Practice mindfulness, deep breathing exercises, or meditation to reduce stress and improve your mental health.
          </Text>

          <Text style={styles.healthTitle}>6. Regular Check-ups</Text>
          <Text style={styles.healthDescription}>
            Schedule annual health check-ups to monitor and manage any potential health risks before they become more serious.
          </Text>

          {/* Tombol navigasi */}
          <Button onPress={() => navigation.goBack()} style={styles.button}>
            <Text>Go Back</Text>
          </Button>

          <Button
            onPress={() => navigation.navigate("HealthScreen")}
            style={[styles.button, styles.healthButton]}
          >
            <Text>Go to Health Screen</Text>
          </Button>

          <Button
            onPress={() => navigation.navigate("AnotherScreen")}
            style={[styles.button, styles.anotherButton]}
          >
            <Text>Go to Another Screen</Text>
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  scrollContainer: {
    flex: 1,
    width: "100%",
  },
  healthSection: {
    marginBottom: 30,
    alignItems: "center",
    paddingBottom: 20, // Added padding at the bottom to ensure buttons aren't hidden
  },
  healthTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  healthDescription: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: "#6200EE",
    marginBottom: 10,
  },
  healthButton: {
    backgroundColor: "#4CAF50",
  },
  anotherButton: {
    backgroundColor: "#FF5722",
  },
});

export default Setting;
