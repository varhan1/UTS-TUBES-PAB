import React, { useState, useEffect } from "react";
import { View, Text, Button, Spinner, Box, Icon } from "native-base";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation untuk navigasi
import { Ionicons } from '@expo/vector-icons';

const BreathingExercisesScreen = ({ userName }) => {
  const [breathingStage, setBreathingStage] = useState("start");
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isInProgress, setIsInProgress] = useState(false);
  const [error, setError] = useState("");

  const navigation = useNavigation(); // Hook untuk navigasi

  const stages = {
    inhale: 4, // 4 detik untuk tarik napas
    hold: 7,   // 7 detik untuk tahan napas
    exhale: 6, // 6 detik untuk hembuskan napas
  };

  const startBreathingExercise = () => {
    setBreathingStage("inhale");
    setIsInProgress(true);
    setTimeRemaining(stages.inhale);
  };

  useEffect(() => {
    let timer;
    if (isInProgress) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime > 1) {
            return prevTime - 1; // Kurangi waktu jika lebih dari 0
          } else {
            // Menentukan tahap berikutnya ketika waktu habis
            switch (breathingStage) {
              case "inhale":
                setBreathingStage("hold");
                return stages.hold;
              case "hold":
                setBreathingStage("exhale");
                return stages.exhale;
              case "exhale":
                setBreathingStage("inhale");
                return stages.inhale;
              default:
                return prevTime; // Jangan lakukan apa-apa jika tidak ada tahap
            }
          }
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer); // Bersihkan interval ketika tidak diperlukan lagi
  }, [isInProgress, breathingStage]);

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Kesalahan: {error}</Text>
      </View>
    );
  }

  const getInstruction = () => {
    switch (breathingStage) {
      case "inhale":
        return "Tarik napas dalam-dalam selama beberapa detik.";
      case "hold":
        return "Tahan napas Anda selama beberapa detik.";
      case "exhale":
        return "Keluarkan napas perlahan-lahan.";
      default:
        return "Mulai latihan pernapasan!";
    }
  };

  return (
    <View style={styles.container}>
      {/* Tombol Back hanya menggunakan Icon */}
      <Button transparent style={styles.backButton} onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={20} color="black" />

      </Button>

      {/* Card Box with Styling */}
      <Box style={styles.card}>
        <Text style={styles.title}>Latihan Pernapasan Relaksasi</Text>
      
        <Text style={styles.instruction}>{getInstruction()}</Text>

        {/* Timer Display */}
        <View style={styles.timerContainer}>
          <Text style={styles.timeRemaining}>{timeRemaining}</Text>
        </View>
      </Box>

      <Button
        style={isInProgress ? styles.stopButton : styles.startButton}
        onPress={isInProgress ? () => setIsInProgress(false) : startBreathingExercise}
      >
        <Text style={styles.buttonText}>
          {isInProgress ? "Berhenti" : "Mulai Latihan Pernapasan"}
        </Text>
      </Button>

      {isInProgress && <Spinner color="blue" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1F8FF",
    padding: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 30,
    width: "100%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 10,
    textAlign: "center",
  },
  instruction: {
    fontSize: 20,
    fontWeight: "500",
    color: "#34495E",
    textAlign: "center",
    marginBottom: 40,
  },
  timerContainer: {
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  timeRemaining: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#E74C3C",
  },
  startButton: {
    backgroundColor: "#27AE60",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 20,
  },
  stopButton: {
    backgroundColor: "#E74C3C",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    padding: 10,
  },
icon: {
    fontSize: 40,  // Meningkatkan ukuran ikon
    color: "#2980B9",  // Warna ikon yang lebih kontras
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFEBEE",
  },
  errorText: {
    fontSize: 18,
    color: "#D32F2F",
  },
});

export default BreathingExercisesScreen;
