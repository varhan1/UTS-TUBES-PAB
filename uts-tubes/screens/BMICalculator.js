// screens/BMICalculator.js
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Center, Text, VStack, Input, Heading, Box } from 'native-base';
import BMIInfo from './BMIInfo';
import BMIHistory from './BMIHistory';
import { Header } from "../components";

const Stack = createNativeStackNavigator();

const BMICalculatorMain = ({ navigation }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [history, setHistory] = useState([]);
  const [targetBMI, setTargetBMI] = useState('');
  const [targetWeight, setTargetWeight] = useState(null);

  const calculateBMI = () => {
    if (!weight || !height || weight <= 0 || height <= 0) {
      alert('Please enter a valid positive weight and height.');
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    const calculatedBMI = bmiValue.toFixed(2);

    let bmiCategory = '';
    if (bmiValue < 18.5) {
      bmiCategory = 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      bmiCategory = 'Normal weight';
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      bmiCategory = 'Overweight';
    } else {
      bmiCategory = 'Obesity';
    }

    setBmi(calculatedBMI);
    setCategory(bmiCategory);

    if (targetBMI) {
      const calculatedTargetWeight = (targetBMI * heightInMeters * heightInMeters).toFixed(2);
      setTargetWeight(calculatedTargetWeight);
    }

    const newEntry = {
      bmi: calculatedBMI,
      category: bmiCategory,
      date: new Date().toLocaleString(),
    };
    setHistory([newEntry, ...history]);
  };

  const resetCalculator = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setCategory('');
    setTargetBMI('');
    setTargetWeight(null);
  };

  return (
    <Center flex={1}>
      <VStack space={4} w="75%">
        <Box mt={-10} bg="white" p={5} borderRadius="lg" shadow={8}>
          <Heading fontSize="xl" mb="5" color="green.800">
            BMI Calculator
          </Heading>

          <Text fontSize="15">Enter your weight:</Text>
          <Input
            placeholder="Enter weight (kg)"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />

          <Text fontSize="15">Enter your height:</Text>
          <Input
            placeholder="Enter height (cm)"
            keyboardType="numeric"
            value={height}
            onChangeText={setHeight}
          />

          <Text fontSize="15">Enter your target BMI:</Text>
          <Input
            placeholder="Enter target BMI"
            keyboardType="numeric"
            value={targetBMI}
            onChangeText={setTargetBMI}
          />

          <Button mt={10} onPress={calculateBMI}>
            Calculate BMI
          </Button>
          <Button mt={2} colorScheme="secondary" onPress={resetCalculator}>
            Reset
          </Button>

          {bmi && (
            <>
              <Text fontSize="lg" mt={4}>
                Your BMI: {bmi}
              </Text>
              <Text fontSize="lg" fontWeight="bold" color="primary.600">
                Category: {category}
              </Text>
              {targetWeight && (
                <Text fontSize="lg" mt={2}>
                  Target Weight: {targetWeight} kg
                </Text>
              )}
              <Button
                mt={4}
                onPress={() =>
                  navigation.navigate('BMI Info', { userCategory: category })
                }
              >
                See Category Tips
              </Button>
              <Button
                mt={2}
                onPress={() => navigation.navigate('BMI History', { history })}
              >
                View History
              </Button>
            </>
          )}
        </Box>
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
        options={{
          header: () => <Header title="BMI Calculator" />
        }}
      />
      <Stack.Screen
        name="BMI Info"
        component={BMIInfo}
        options={{
          header: () => <Header title="BMI Information" />
        }}
      />
      <Stack.Screen
        name="BMI History"
        component={BMIHistory}
        options={{
          header: () => <Header title="BMI History" />
        }}
      />
    </Stack.Navigator>
  );
};

export default BMICalculator;
