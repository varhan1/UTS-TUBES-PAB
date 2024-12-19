import React from "react";
import { Box, Text, Image, View, Heading, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const NewsDetail = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;

  return (
    <ScrollView>
      <View position="relative">
        <Image
          w="100%"
          h={420}
          source={{ uri: item.image || item.urlToImage || "https://via.placeholder.com/150" }}
          alt={item.title || "No Title"}
        />
        <TouchableOpacity
          style={{ position: "absolute", top: 16, left: 16, padding: 8 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={24} color="white" />
        </TouchableOpacity>
        <Box mt={-10} mx="5" bg="white" p={4} borderRadius="lg" shadow={8}>
          <Heading mb={2}>{item.title || "No Title Available"}</Heading>
          <Text color="gray.500">{item.publishedAt || item.published || "No Date Available"}</Text>
          <Text paddingTop={2} fontSize="md" color="gray.800" textAlign="justify">
            {item.description || "No Content Available"}
          </Text>
          <Text fontSize="sm" color="blue.500">
            Source: {item.source?.name || "Unknown"}
          </Text>
        </Box>
      </View>
    </ScrollView>
  );
};

export default NewsDetail;
