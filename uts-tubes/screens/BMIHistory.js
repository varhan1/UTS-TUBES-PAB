// screens/BMIHistory.js
import React from 'react';
import { Center, Text, VStack, ScrollView, Divider, Box } from 'native-base';
import { useRoute } from '@react-navigation/native';

const BMIHistory = () => {
  const route = useRoute();
  const { history } = route.params || [];

  return (
    <ScrollView flex={1} p={4} bg="white">
      <VStack space={4}>
        <Text fontSize="2xl" bold>
          BMI History
        </Text>

        {history.length === 0 ? (
          <Text fontSize="md" color="gray.500">
            No BMI records found.
          </Text>
        ) : (
          history.map((entry, index) => (
            <Box key={index} p={4} bg="gray.100" borderRadius="lg" mb={2}>
              <Text fontSize="md">
                <Text fontWeight="bold">Date:</Text> {entry.date}
              </Text>
              <Text fontSize="md">
                <Text fontWeight="bold">BMI:</Text> {entry.bmi}
              </Text>
              <Text fontSize="md">
                <Text fontWeight="bold">Category:</Text> {entry.category}
              </Text>
            </Box>
          ))
        )}
      </VStack>
    </ScrollView>
  );
};

export default BMIHistory;
