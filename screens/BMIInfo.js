import React from 'react';
import { ScrollView, Box, Text, VStack, Heading } from 'native-base';
import { useRoute } from '@react-navigation/native';
import { Header } from "../components";

const BMIInfo = () => {
  const route = useRoute();
  const { userCategory } = route.params || {};

  const isBold = (category) => userCategory === category;

  return (
    <ScrollView flex={1} p={4} bg="white">
      <VStack space={6}>

        <Box p={4} bg="blue.100" borderRadius="lg">
          <Heading fontSize="lg" color="blue.700" mb={2}>
            Berat Badan Kurang
          </Heading>
          <Text
            fontSize="md"
            fontWeight={isBold('Berat badan kurang') ? 'bold' : 'normal'}
            color={isBold('Berat badan kurang') ? 'blue.700' : 'black'}
          >
            - Makan lebih sering dan pilih makanan yang padat nutrisi.
          </Text>
          <Text
            fontSize="md"
            fontWeight={isBold('Berat badan kurang') ? 'bold' : 'normal'}
            color={isBold('Berat badan kurang') ? 'blue.700' : 'black'}
          >
            - Konsultasikan dengan dokter untuk rencana peningkatan berat badan.
          </Text>
          <Text
            fontSize="md"
            fontWeight={isBold('Berat badan kurang') ? 'bold' : 'normal'}
            color={isBold('Berat badan kurang') ? 'blue.700' : 'black'}
          >
            - Usahakan makan 5-6 kali sehari dalam porsi kecil.
          </Text>
          <Text
            fontSize="md"
            fontWeight={isBold('Berat badan kurang') ? 'bold' : 'normal'}
            color={isBold('Berat badan kurang') ? 'blue.700' : 'black'}
          >
            - Lakukan olahraga teratur. Latihan beban dapat membantu meningkatkan massa otot.
          </Text>
        </Box>

        <Box p={4} bg="green.100" borderRadius="lg">
          <Heading fontSize="lg" color="green.700" mb={2}>
            Berat Badan Normal
          </Heading>
          <Text
            fontSize="md"
            fontWeight={isBold('Berat badan normal') ? 'bold' : 'normal'}
            color={isBold('Berat badan normal') ? 'green.700' : 'black'}
          >
            - Pertahankan pola makan yang seimbang dengan banyak sayur dan protein.
          </Text>
          <Text
            fontSize="md"
            fontWeight={isBold('Berat badan normal') ? 'bold' : 'normal'}
            color={isBold('Berat badan normal') ? 'green.700' : 'black'}
          >
            - Perbanyak konsumsi sayur dan buah, usahakan minimal 5 porsi per hari.
          </Text>
          <Text
            fontSize="md"
            fontWeight={isBold('Berat badan normal') ? 'bold' : 'normal'}
            color={isBold('Berat badan normal') ? 'green.700' : 'black'}
          >
            - Pilih sumber protein sehat seperti ikan, daging tanpa lemak, telur, dan kacang-kacangan.
          </Text>
          <Text
            fontSize="md"
            fontWeight={isBold('Berat badan normal') ? 'bold' : 'normal'}
            color={isBold('Berat badan normal') ? 'green.700' : 'black'}
          >
            - Batasi makanan olahan dan tinggi gula.
          </Text>
        </Box>

        <Box p={4} bg="yellow.100" borderRadius="lg">
          <Heading fontSize="lg" color="yellow.700" mb={2}>
            Berat Badan Berlebih
          </Heading>
          <Text
            fontSize="md"
            fontWeight={isBold('Berat badan berlebih') ? 'bold' : 'normal'}
            color={isBold('Berat badan berlebih') ? 'yellow.700' : 'black'}
          >
            - Kurangi makanan tinggi gula dan lemak jenuh.
          </Text>
          <Text
            fontSize="md"
            fontWeight={isBold('Berat badan berlebih') ? 'bold' : 'normal'}
            color={isBold('Berat badan berlebih') ? 'yellow.700' : 'black'}
          >
            - Perbanyak konsumsi serat seperti buah, sayur, dan biji-bijian.
          </Text>
          <Text
            fontSize="md"
            fontWeight={isBold('Berat badan berlebih') ? 'bold' : 'normal'}
            color={isBold('Berat badan berlebih') ? 'yellow.700' : 'black'}
          >
            - Pantau porsi makan. Gunakan piring yang lebih kecil dan hindari makan berlebihan.
          </Text>
        </Box>

        <Box p={4} bg="red.100" borderRadius="lg">
          <Heading fontSize="lg" color="red.700" mb={2}>
            Obesitas
          </Heading>
          <Text
            fontSize="md"
            fontWeight={isBold('Obesitas') ? 'bold' : 'normal'}
            color={isBold('Obesitas') ? 'red.700' : 'black'}
          >
            - Konsultasikan dengan dokter untuk rencana penurunan berat badan.
          </Text>
          <Text
            fontSize="md"
            fontWeight={isBold('Obesitas') ? 'bold' : 'normal'}
            color={isBold('Obesitas') ? 'red.700' : 'black'}
          >
            - Tingkatkan aktivitas fisik. Lakukan olahraga secara teratur dan konsisten.
          </Text>
          <Text
            fontSize="md"
            fontWeight={isBold('Obesitas') ? 'bold' : 'normal'}
            color={isBold('Obesitas') ? 'red.700' : 'black'}
          >
            - Kelola stres karena dapat memicu peningkatan nafsu makan.
          </Text>
        </Box>
      </VStack>
    </ScrollView>
  );
};

export default BMIInfo;