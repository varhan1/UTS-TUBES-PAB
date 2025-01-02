import React, { useState, useEffect } from "react";
import { Box, Text, Button, VStack, Spinner, HStack, Center, ScrollView } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BreathingExercisesScreen = () => {
  const [breathingStage, setBreathingStage] = useState("start");
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isInProgress, setIsInProgress] = useState(false);
  const navigation = useNavigation();

  const stages = {
    inhale: 4,
    hold: 7,
    exhale: 6,
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
            return prevTime - 1;
          } else {
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
                return prevTime;
            }
          }
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isInProgress, breathingStage]);

  return (
    <Box flex={1}>
      {/* Background Gradient */}
      <LinearGradient
        colors={["#B2FEFA", "#0ED2F7"]}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20, justifyContent: "center" }}>
          {/* Penjelasan Relaksasi */}
          <VStack space={4} alignItems="center" mb={8}>
            <Box bg="white" borderRadius="lg" shadow={3} p={4} w="90%">
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color="#34495E"
                textAlign="center"
                mb={2}
              >
                Apa itu Relaksasi?
              </Text>
              <Text fontSize="md" color="#34495E" textAlign="center" lineHeight="lg" mb={4}>
                Relaksasi adalah kondisi di mana tubuh dan pikiran berada dalam
                keadaan tenang, bebas dari stres, dan merasa nyaman. Latihan
                relaksasi dapat membantu menurunkan ketegangan otot, memperlambat
                detak jantung, dan meningkatkan fokus.
              </Text>
              <Text fontSize="lg" fontWeight="bold" color="#2C3E50" textAlign="center" mb={2}>
                Cara Melakukan Relaksasi:
              </Text>
              <Text fontSize="md" color="#34495E" textAlign="left" lineHeight="lg">
                1. Cari tempat yang tenang dan nyaman untuk duduk atau berbaring.{"\n"}
                2. Fokus pada pernapasan Anda dan usahakan bernapas dengan pola yang teratur.{"\n"}
                3. Ikuti langkah-langkah berikut selama latihan pernapasan:{"\n"}
                - Tarik napas dalam selama 4 detik.{"\n"}
                - Tahan napas selama 7 detik.{"\n"}
                - Keluarkan napas perlahan selama 6 detik.{"\n"}
                4. Ulangi pola ini beberapa kali untuk mencapai relaksasi penuh.
              </Text>
            </Box>
          </VStack>

          {/* Box untuk Latihan */}
          <Box
            bg="white"
            borderRadius="lg"
            p={5}
            w="100%"
            maxW={400}
            shadow={3}
            mb={5}
            alignSelf="center"
          >
            <Text fontSize="lg" fontWeight="bold" color="#2C3E50" textAlign="center" mb={3}>
              Tahap Latihan
            </Text>
            <Text fontSize="md" color="#34495E" textAlign="center" mb={6}>
              {breathingStage === "start"
                ? "Ikuti langkah-langkah ini untuk memulai."
                : `Saat ini Anda berada di tahap: ${breathingStage}`}
            </Text>
            <HStack alignItems="center" justifyContent="center">
              <Text fontSize="4xl" fontWeight="bold" color="#E74C3C" textAlign="center">
                {timeRemaining}
              </Text>
            </HStack>
          </Box>

          {/* Tombol Mulai/Berhenti */}
          <Button
            bg={isInProgress ? "#E74C3C" : "#27AE60"}
            w="75%"
            p={4}
            borderRadius="full"
            onPress={isInProgress ? () => setIsInProgress(false) : startBreathingExercise}
            mb={4}
            alignSelf="center"
          >
            <Text fontSize="md" color="white">
              {isInProgress ? "Berhenti" : "Mulai Latihan Pernapasan"}
            </Text>
          </Button>

          {/* Tombol Back */}
          <Button
            variant="outline"
            w="75%"
            p={4}
            borderRadius="full"
            borderColor="#34495E"
            alignSelf="center"
            onPress={() => navigation.goBack()}
            leftIcon={<Ionicons name="" size={20} color="#34495E" />}
          >
            <Text fontSize="md" color="#34495E">
              Kembali ke Halaman Sebelumnya
            </Text>
          </Button>

          {isInProgress && (
            <Center>
              <Spinner color="white" size="lg" />
            </Center>
          )}
        </ScrollView>
      </LinearGradient>
    </Box>
  );
};

export default BreathingExercisesScreen;
