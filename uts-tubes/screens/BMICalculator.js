import React, { useState } from 'react';
import { Button, Center, Text, VStack, Input, Heading, Box, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';



const BMICalculatorMain = ({ navigation }) => {
  const [showInstructions, setShowInstructions] = useState(true);
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

  if (showInstructions) {
    return (
      <Center flex={1}>

        <VStack space={4} w="75%" mt={4}>
          <Box bg="white" p={5} borderRadius="lg" shadow={8}>
            <Heading fontSize="xl" mb="5" color="green.800">
              Instructions
            </Heading>
            <Text fontSize="md" mb={4}>
              1. Enter your weight in kilograms (kg).
            </Text>
            <Text fontSize="md" mb={4}>
              2. Enter your height in centimeters (cm).
            </Text>
            <Text fontSize="md" mb={4}>
              3. Optionally, enter your target BMI to calculate your target weight.
            </Text>
            <Text fontSize="md" mb={4}>
              4. Click "Calculate BMI" to see your BMI, category, and target weight.
            </Text>
            <Button onPress={() => setShowInstructions(false)} mt={4}>
              Proceed to Calculator
            </Button>
            <Button
              bg="#FF7043"
              mt={2}
              _pressed={{ bg: "#FF7043" }}
              onPress={() => navigation.goBack()}
              leftIcon={<Icon as={Ionicons} name="arrow-back" color="white" />}
            >
              Back
            </Button>

          </Box>
        </VStack>
      </Center>
    );
  }

  return (
    <Center flex={1}>

      <VStack space={4} w="75%" mt={4}>
        <Box bg="white" p={5} borderRadius="lg" shadow={8}>
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

          <Button
            bg="#FF7043"
            mt={2}
            _pressed={{ bg: "#FF7043" }}
            onPress={showInstructions ? () => navigation.goBack() : () => setShowInstructions(true)}
            leftIcon={<Icon as={Ionicons} name="arrow-back" color="white" />}

          >
            Back
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
                  navigation.navigate('BMIInfo', { userCategory: category })
                }
              >
                See Category Tips
              </Button>
              <Button
                mt={2}
                onPress={() => navigation.navigate('BMIHistory', { history })}
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

export default BMICalculatorMain;