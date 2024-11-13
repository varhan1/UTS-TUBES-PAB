import React from 'react';
import { ScrollView, Text, Box, Heading, VStack, Image, Button, Center } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const TipsKesehatan = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView flex={1} backgroundColor="white" padding={4}>
      <Heading size="lg" marginBottom={6} color="blue.600" textAlign="center">
        OLahraga untuk Kesehatan
      </Heading>

      <VStack space={6} marginBottom={6}>
        <Box padding={4} backgroundColor="blue.50" borderRadius="md" shadow={2}>
          <Heading size="lg" color="blue.600">1. Jalan Kaki</Heading>
          <Image source={{ uri: 'https://d1bpj0tv6vfxyp.cloudfront.net/articles/276722_22-7-2020_14-7-30.jpeg' }} alt="Jalan Kaki" size="xl" borderRadius="md" marginTop={3} />
          <Text marginTop={3}>Jalan kaki adalah olahraga ringan yang bisa dilakukan kapan saja. Jalan kaki secara rutin dapat meningkatkan kesehatan jantung dan memperbaiki suasana hati.</Text>
        </Box>

        <Box padding={4} backgroundColor="blue.50" borderRadius="md" shadow={2}>
          <Heading size="lg" color="blue.600">2. Bersepeda</Heading>
          <Image source={{ uri: 'https://enesis.com/wp-content/uploads/manfaat-bersepeda.webp' }} alt="Bersepeda" size="xl" borderRadius="md" marginTop={3} />
          <Text marginTop={3}>Bersepeda adalah olahraga yang membantu memperkuat otot kaki dan meningkatkan kesehatan paru-paru. Ideal untuk dilakukan di pagi atau sore hari.</Text>
        </Box>

        <Box padding={4} backgroundColor="blue.50" borderRadius="md" shadow={2}>
          <Heading size="lg" color="blue.600">3. Berenang</Heading>
          <Image source={{ uri: 'https://www.sfidn.com/image/catalog/sfidn-manfaat-olahraga-renang.jpg' }} alt="Berenang" size="xl" borderRadius="md" marginTop={3} />
          <Text marginTop={3}>Berenang adalah olahraga low-impact yang baik untuk kesehatan sendi dan melatih otot seluruh tubuh.</Text>
        </Box>

        <Box padding={4} backgroundColor="blue.50" borderRadius="md" shadow={2}>
          <Heading size="lg" color="blue.600">4. Yoga</Heading>
          <Image source={{ uri: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1608543180/attached_image/mengenal-hatha-yoga-dasar-dari-segala-jenis-yoga.jpg' }} alt="Yoga" size="xl" borderRadius="md" marginTop={3} />
          <Text marginTop={3}>Yoga membantu meningkatkan fleksibilitas, keseimbangan, dan mengurangi stres. Cocok untuk berbagai kalangan usia.</Text>
        </Box>

        <Box padding={4} backgroundColor="blue.50" borderRadius="md" shadow={2}>
          <Heading size="lg" color="blue.600">5. Lari</Heading>
          <Image source={{ uri: 'https://910.id/wp-content/uploads/2024/02/DSC01318-scaled.jpg' }} alt="Lari" size="xl" borderRadius="md" marginTop={3} />
          <Text marginTop={3}>Lari adalah olahraga kardio yang bermanfaat untuk kesehatan jantung, membakar kalori, dan meningkatkan stamina.</Text>
        </Box>
      </VStack>

      <Center marginTop={6}>
        <Button onPress={handleBack} backgroundColor="blue.600" width="100%" padding={2} shadow={3}>
          <Text color="white">Kembali</Text> {/* Tambahkan komponen <Text> di sini */}
        </Button>
      </Center>
    </ScrollView>
  );
};

export default TipsKesehatan;
