import React from 'react';
import { Center, Text } from 'native-base';

const BMIHistory = () => {
  return (
    <Center flex={1}>
      <Text fontSize="2xl" bold>
        BMI History
      </Text>
      <Text>
        View your past BMI calculations.
      </Text>
    </Center>
  );
};

export default BMIHistory;
