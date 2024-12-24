import React from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native';
import { Box, VStack, HStack, Text, ScrollView } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Header } from "../components";
import datas from "../datas";

const TipsPolaMakananSehat = () => {
  const navigation = useNavigation();
  const filteredTips = datas.filter(item => parseInt(item.id) >= 20 && parseInt(item.id) <= 22);

  const renderTip = ({ item }) => (
    <Box
      bg="white"
      shadow={2}
      rounded="lg"
      overflow="hidden"
      mb={4}
    >
      <Image source={{ uri: item.image }} style={{ width: '100%', height: 150 }} />
      <VStack p={4}>
        <Text fontSize="lg" fontWeight="bold" color="gray.800" mb={2}>
          {item.title}
        </Text>
        <Text fontSize="md" color="gray.600">
          {item.description}
        </Text>
      </VStack>
    </Box>
  );

  return (
    <Box flex={1} bg="gray.100">
      <Header title="Health Tips" />
      <FlatList
        data={filteredTips}
        renderItem={renderTip}
        keyExtractor={item => item.id.toString()}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('HealthScreen')}
        style={{
          backgroundColor: '#4CAF50',
          padding: 15,
          margin: 10,
          borderRadius: 5,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>Halaman Relaksasi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('AnotherScreen')}
        style={{
          backgroundColor: '#2196F3',
          padding: 15,
          margin: 10,
          borderRadius: 5,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>Olahraga</Text>
      </TouchableOpacity>
    </Box>
  );
};

export default TipsPolaMakananSehat;