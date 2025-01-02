import React, { useState } from 'react';
import { VStack, Input, Button, Text, Box, Center, Heading, Link } from 'native-base';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebaseConfig';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate('Login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Center flex={1} px="4" bg="coolGray.50">
      <Box safeArea p="6" py="8" w="90%" maxW="300" bg="white" borderRadius="lg" shadow="2">
        <Heading size="lg" fontWeight="bold" textAlign="center" mb="4" color="coolGray.800">
          Create an Account
        </Heading>

        {error ? (
          <Text color="red.500" textAlign="center" mb="4">
            {error}
          </Text>
        ) : null}

        <VStack space={4}>
          <Input
            variant="outline"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            size="md"
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <Input
            variant="outline"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            size="md"
            type="password"
          />

          <Button mt="4" colorScheme="blue" onPress={handleRegister}>
            Register
          </Button>
          <Button
            variant="link"
            mt="2"
            onPress={() => navigation.navigate('Login')}
            _text={{ color: 'blue.500', fontSize: 'sm' }}
          >
            Already have an account? Login
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default Register;
