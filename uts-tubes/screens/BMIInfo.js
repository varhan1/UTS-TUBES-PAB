// screens/BMIInfo.js
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
            Underweight
          </Heading>
          <Text
            fontSize="md"
            fontWeight={isBold('Underweight') ? 'bold' : 'normal'}
            color={isBold('Underweight') ? 'blue.700' : 'black'}
          >
            - Makan lebih sering dan pilih makanan padat nutrisi.
          </Text>
          <Text 
          fontSize="md" 
          fontWeight={isBold('Underweight') ? 'bold' : 'normal'}
          color={isBold('Underweight') ? 'blue.700' : 'black'}
          >
            - Konsultasikan dengan dokter untuk rencana peningkatan berat badan.
          </Text>
          <Text 
          fontSize="md" 
          fontWeight={isBold('Underweight') ? 'bold' : 'normal'}
          color={isBold('Underweight') ? 'blue.700' : 'black'}
          >
            - Usahakan makan 5-6 kali sehari dalam porsi kecil. 
          </Text>
          <Text 
          fontSize="md" 
          fontWeight={isBold('Underweight') ? 'bold' : 'normal'}
          color={isBold('Underweight') ? 'blue.700' : 'black'}
          >
            - Olahraga teratur. Latihan beban dapat membantu meningkatkan massa otot.
          </Text>

        </Box>

        <Box p={4} bg="green.100" borderRadius="lg">
          <Heading fontSize="lg" color="green.700" mb={2}>
            Normal Weight
          </Heading>
          <Text
            fontSize="md"
            fontWeight={isBold('Normal weight') ? 'bold' : 'normal'}
            color={isBold('Normal weight') ? 'green.700' : 'black'}
          >
            - Pertahankan pola makan seimbang dengan banyak sayuran dan protein.
          </Text>
          <Text
            fontSize="md"
            fontWeight={isBold('Normal weight') ? 'bold' : 'normal'}
            color={isBold('Normal weight') ? 'green.700' : 'black'}
          >
            - Perbanyak konsumsi sayur dan buah. Usahakan minimal 5 porsi per hari.
          </Text>
          <Text
            fontSize="md"
            fontWeight={isBold('Normal weight') ? 'bold' : 'normal'}
            color={isBold('Normal weight') ? 'green.700' : 'black'}
          >
            - Pilih sumber protein sehat. eperti ikan, daging tanpa lemak, telur, dan kacang-kacangan.
          </Text>
          <Text
            fontSize="md"
            fontWeight={isBold('Normal weight') ? 'bold' : 'normal'}
            color={isBold('Normal weight') ? 'green.700' : 'black'}
          >
            - Batasi makanan olahan dan tinggi gula.
          </Text>
        </Box>

        <Box p={4} bg="yellow.100" borderRadius="lg">
          <Heading fontSize="lg" color="yellow.700" mb={2}>
            Overweight
          </Heading>
          <Text
            fontSize="md"
            fontWeight={isBold('Overweight') ? 'bold' : 'normal'}
            color={isBold('Overweight') ? 'yellow.700' : 'black'}
          >
            - Kurangi makanan tinggi gula dan lemak jenuh.
          </Text>
          <Text
            fontSize="md"
            fontWeight={isBold('Overweight') ? 'bold' : 'normal'}
            color={isBold('Overweight') ? 'yellow.700' : 'black'}
          >
            - Perbanyak konsumsi serat. Seperti buah, sayur, dan biji-bijian.
          </Text>
          <Text
            fontSize="md"
            fontWeight={isBold('Overweight') ? 'bold' : 'normal'}
            color={isBold('Overweight') ? 'yellow.700' : 'black'}
          >
            - Pantau porsi makan.Gunakan piring yang lebih kecil dan hindari makan berlebihan.
          </Text>
        </Box>

        <Box p={4} bg="red.100" borderRadius="lg">
          <Heading fontSize="lg" color="red.700" mb={2}>
            Obesity
          </Heading>
          <Text
            fontSize="md"
            fontWeight={isBold('Obesity') ? 'bold' : 'normal'}
            color={isBold('Obesity') ? 'red.700' : 'black'}
          >
            - Konsultasikan dengan dokter untuk rencana penurunan berat badan.
          </Text>
          <Text
            fontSize="md"
            fontWeight={isBold('Obesity') ? 'bold' : 'normal'}
            color={isBold('Obesity') ? 'red.700' : 'black'}
          >
            - Tingkatkan aktivitas fisik. Lakukan olahraga secara teratur dan konsisten.
          </Text>
          <Text
            fontSize="md"
            fontWeight={isBold('Obesity') ? 'bold' : 'normal'}
            color={isBold('Obesity') ? 'red.700' : 'black'}
          >
            - Kelola stres. Stres dapat memicu peningkatan nafsu makan.
          </Text>
        </Box>
      </VStack>
    </ScrollView>
  );
};

export default BMIInfo;
