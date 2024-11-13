import React from "react";
import { View, Text, Button, Box } from "native-base";
import { StyleSheet, ScrollView, Image } from "react-native";
import { Header } from "../components";

const Tips = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Box style={styles.card}>
        <Image
              source={require("../assets/kesehatan.png")}  // Ganti dengan path gambar yang sesuai
              style={styles.tipImage}
            />
          <View style={styles.tipSection}>
            <Text style={styles.tipTitle}>1. Jaga Keseimbangan Cairan Tubuh</Text>
            <Text style={styles.tipDescription}>
              Minum banyak air sangat penting untuk fungsi tubuh. Usahakan untuk minum setidaknya 8 gelas air sehari.
            </Text>
          </View>

          <View style={styles.tipSection}>
            <Text style={styles.tipTitle}>2. Rutin Berolahraga</Text>
            <Text style={styles.tipDescription}>
              Aktivitas fisik membantu meningkatkan kesehatan jantung, memperkuat otot, dan meningkatkan energi secara keseluruhan.
            </Text>
          </View>

          <View style={styles.tipSection}>
            <Text style={styles.tipTitle}>3. Konsumsi Makanan Seimbang</Text>
            <Text style={styles.tipDescription}>
              Sertakan berbagai buah, sayuran, protein rendah lemak, dan biji-bijian dalam pola makan Anda.
            </Text>
          </View>

          <View style={styles.tipSection}>
            <Text style={styles.tipTitle}>4. Tidur yang Cukup</Text>
            <Text style={styles.tipDescription}>
              Usahakan tidur 7-9 jam setiap malam untuk kejernihan mental dan pemulihan fisik.
            </Text>
          </View>

          <View style={styles.tipSection}>
            <Text style={styles.tipTitle}>5. Kelola Stres</Text>
            <Text style={styles.tipDescription}>
              Praktikkan kesadaran atau meditasi untuk mengurangi stres dan meningkatkan kesehatan mental.
            </Text>
          </View>

          <View style={styles.tipSection}>
            <Text style={styles.tipTitle}>6. Pemeriksaan Kesehatan Rutin</Text>
            <Text style={styles.tipDescription}>
              Jadwalkan pemeriksaan kesehatan tahunan untuk mengelola potensi risiko kesehatan sejak dini.
            </Text>
          </View>

          {/* Navigation Buttons */}
          <Button onPress={() => navigation.goBack()} style={[styles.button, styles.backButton]}>
            <Text style={styles.buttonText}>Kembali</Text>
          </Button>

          <Button
            onPress={() => navigation.navigate("HealthScreen")}
            style={[styles.button, styles.healthButton]}
          >
            <Text style={styles.buttonText}>Latihan Pernapasan</Text>
          </Button>

          <Button
            onPress={() => navigation.navigate("AnotherScreen")}
            style={[styles.button, styles.anotherButton]}
          >
            <Text style={styles.buttonText}>Ke Layar Lain</Text>
          </Button>
        </Box>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    padding: 30,
  },
  scrollContainer: {
    width: "100%",
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
  },
  tipSection: {
    marginBottom: 20,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4CAF50",
    marginBottom: 5,
  },
  tipDescription: {
    fontSize: 16,
    color: "#555",
    textAlign: "left",
    lineHeight: 22,
  },
  tipImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  backButton: {
    backgroundColor: "#9E9E9E",
  },
  healthButton: {
    backgroundColor: "#4CAF50",
  },
  anotherButton: {
    backgroundColor: "#FF5722",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default Tips;
