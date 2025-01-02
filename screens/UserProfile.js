import React from "react";
import { Center, Text, VStack, Heading, Button, Box, Image } from "native-base";
import { auth } from "../services/firebaseConfig";

import defaultProfilePhoto from '../assets/profile.jpg'; 

const UserProfile = ({ navigation }) => {
    const user = auth.currentUser;

    return (
        <Center flex={1} bg="white" px="4">
            <Box w="90%" maxW="400" p="6" borderRadius="lg" bg="gray.100" shadow="2">

                {user ? (
                    <VStack space={4} alignItems="center">
                        <Image
                             source={user.photoURL ? { uri: user.photoURL } : defaultProfilePhoto}
                            alt="Profile Photo"
                            size="xl"
                            borderRadius="full"
                            mb="4"
                        />
                        <Text fontSize="md">
                            <Text bold>Email:</Text> {user.email}
                        </Text>
                        <Button
                            mt="6"
                            colorScheme="blue"
                            onPress={() => {
                                auth.signOut();
                                navigation.reset({ index: 0, routes: [{ name: "Login" }] });
                            }}
                        >
                            Logout
                        </Button>
                    </VStack>
                ) : (
                    <Text>User not logged in</Text>
                )}
            </Box>
        </Center>
    );
};

export default UserProfile;