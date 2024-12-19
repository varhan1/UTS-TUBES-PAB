import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from "react-native";
// Import clock icon if using vector icons
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header } from "../components";

const WaktuTidur = ({ navigation }) => {
  const [sleepTime, setSleepTime] = useState("");
  const [wakeTime, setWakeTime] = useState("");
  const [sleepDuration, setSleepDuration] = useState("");
  const [sleepHistory, setSleepHistory] = useState([]); // Array to store sleep records

  const calculateSleepDuration = () => {
    const sleep = new Date(`1970-01-01T${sleepTime}:00`);
    const wake = new Date(`1970-01-01T${wakeTime}:00`);
    const duration = (wake - sleep) / (1000 * 60 * 60); // Convert to hours
    const calculatedDuration = duration > 0 ? duration : 24 + duration;
    const formattedDuration = calculatedDuration.toFixed(2);
    setSleepDuration(formattedDuration);

    const newRecord = {
      id: Math.random().toString(),
      sleepTime,
      wakeTime,
      duration: formattedDuration,
    };
    setSleepHistory([...sleepHistory, newRecord]);
  };

  const deleteHistory = (id) => {
    setSleepHistory(sleepHistory.filter((item) => item.id !== id));
  };

  return (
    
    <View style={styles.container}>
      <Header title={"News"}/>
      <Text style={styles.title}>
        <Icon name="clock-o" size={30} color="#4A90E2" /> Waktu Tidur
      </Text>

      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Masukkan waktu tidur (HH:MM)"
          placeholderTextColor="#888"
          value={sleepTime}
          onChangeText={(text) => setSleepTime(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Masukkan waktu bangun (HH:MM)"
          placeholderTextColor="#888"
          value={wakeTime}
          onChangeText={(text) => setWakeTime(text)}
        />
        <TouchableOpacity style={styles.button} onPress={calculateSleepDuration}>
          <Text style={styles.buttonText}>Simpan Durasi Tidur</Text>
        </TouchableOpacity>
      </View>

      {sleepDuration !== "" && (
        <View style={styles.card}>
          <Text style={styles.resultText}>Durasi tidur Anda:</Text>
          <Text style={styles.durationText}>{sleepDuration} jam</Text>
        </View>
      )}

      <Text style={styles.historyTitle}>Riwayat Tidur</Text>
      <FlatList
        data={sleepHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.historyText}>
              Tidur: {item.sleepTime} - Bangun: {item.wakeTime}
            </Text>
            <Text style={styles.historyText}>Durasi: {item.duration} jam</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteHistory(item.id)}>
              <Text style={styles.deleteText}>Hapus</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.button, styles.backButton]}>
        <Text style={styles.buttonText}>Kembali</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("MedicationReminder")} style={[styles.button, styles.healthButton]}>
        <Text style={styles.buttonText}>Ke Pengingat Obat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#4A90E2",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    width: "80%",
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#333",
  },
  button: {
    backgroundColor: "#4A90E2",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    width: "80%",
    alignItems: "center",
  },
  resultText: {
    fontSize: 18,
    color: "#00796b",
    marginBottom: 5,
  },
  durationText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#004d40",
  },
  historyTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
    marginTop: 30,
  },
  historyText: {
    fontSize: 16,
    color: "#333",
  },
  deleteButton: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#e57373",
    borderRadius: 5,
  },
  deleteText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  backButton: {
    marginTop: 20,
    backgroundColor: "#FF7043",
  },
  healthButton: {
    marginTop: 10,
    backgroundColor: "#4CAF50",
  },
});

export default WaktuTidur;
