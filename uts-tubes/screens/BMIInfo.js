import React from 'react';
import { Center, Text } from 'native-base';

const BMIInfo = () => {
  return (
    <Center flex={1}>
      <Text fontSize="2xl" bold>
        BMI Information
      </Text>
      <Text>
        Information about BMI categories, health tips, and more.
      </Text>
    </Center>
  );
};

export default BMIInfo;
