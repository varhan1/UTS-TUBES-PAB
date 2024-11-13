import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Center, Text, VStack } from 'native-base';
import BMIInfo from './BMIInfo';
import BMIHistory from './BMIHistory';

const Stack = createNativeStackNavigator();

// Screen utama BMI yang memuat navigasi stack
const BMICalculatorMain = ({ navigation }) => {
  return (
    <Center flex={1}>
      <VStack space={4} w="75%">
        <Text fontSize="2xl" bold>
          BMI Calculator
        </Text>
        <Button onPress={() => navigation.navigate("BMI Info")}>Go to BMI Information</Button>
        <Button onPress={() => navigation.navigate("BMI History")}>Go to BMI History</Button>
      </VStack>
    </Center>
  );
};

const BMICalculator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BMICalculatorMain"
        component={BMICalculatorMain}
        options={{ title: 'BMI Calculator' }}
      />
      <Stack.Screen
        name="BMI Info"
        component={BMIInfo}
        options={{ title: 'BMI Information' }}
      />
      <Stack.Screen
        name="BMI History"
        component={BMIHistory}
        options={{ title: 'BMI History' }}
      />
    </Stack.Navigator>
  );
};

export default BMICalculator;
