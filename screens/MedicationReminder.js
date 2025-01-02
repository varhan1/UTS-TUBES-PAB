import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from "react-native";

const MedicationReminder = ({ navigation }) => {
  const [medicationName, setMedicationName] = useState("");
  const [reminderTime, setReminderTime] = useState("");
  const [medicationList, setMedicationList] = useState([]);

  const addMedicationReminder = () => {
    if (medicationName === "" || reminderTime === "") {
      alert("Harap isi nama obat dan waktu pengingat!");
      return;
    }

    const newReminder = {
      id: Math.random().toString(),
      name: medicationName,
      time: reminderTime,
    };

    setMedicationList([...medicationList, newReminder]);
    setMedicationName("");
    setReminderTime("");
  };

  const deleteMedicationReminder = (id) => {
    setMedicationList(medicationList.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengingat Obat</Text>

      <View style={styles.card}>
        <TextInput style={styles.input} placeholder="Masukkan nama obat" value={medicationName} onChangeText={(text) => setMedicationName(text)} />
        <TextInput style={styles.input} placeholder="Masukkan waktu pengingat (HH:MM)" value={reminderTime} onChangeText={(text) => setReminderTime(text)} />
        <TouchableOpacity style={styles.button} onPress={addMedicationReminder}>
          <Text style={styles.buttonText}>Tambah Pengingat</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.historyTitle}>Daftar Pengingat Obat</Text>
      <FlatList
        data={medicationList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.historyText}>Obat: {item.name}</Text>
            <Text style={styles.historyText}>Waktu: {item.time}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteMedicationReminder(item.id)}>
              <Text style={styles.deleteText}>Hapus</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Tombol Room Chat di bagian bawah */}
      <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")} style={styles.chatButton}>
        <Text style={styles.chatButtonText}>ROOM CHAT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#4A90E2",
    marginBottom: 20,
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
  chatButton: {
    marginTop: 30,
    backgroundColor: "#4A90E2",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 8,
  },
  chatButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default MedicationReminder;
