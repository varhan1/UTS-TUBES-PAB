import React, { useState } from 'react';
import { VStack, Input, Button, Text, Box, Center, Heading, Link } from 'native-base';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebaseConfig';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home'); // Ganti 'Home' dengan nama layar utama Anda
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Center flex={1} px="4" bg="coolGray.50">
      <Box safeArea p="6" py="8" w="90%" maxW="300" bg="white" borderRadius="lg" shadow="2">
        <Heading size="lg" fontWeight="bold" textAlign="center" mb="4" color="coolGray.800">
          Welcome Back
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

          <Button mt="4" colorScheme="blue" onPress={handleLogin}>
            Login
          </Button>
          <Button
            variant="link"
            mt="2"
            onPress={() => navigation.navigate('Register')}
            _text={{ color: 'blue.500', fontSize: 'sm' }}
          >
            Don't have an account? Register
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default Login;
