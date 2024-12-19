import React, { useEffect, useState } from "react";
import { Heading, Image, Text, Spinner, Box, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import { fetchNews } from "../services/api";

const Home = () => {
  const navigation = useNavigation();
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Ue
  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchNews();

        const validData = data.filter(
          (item) => item && item.title && item.image && item.published
        );
        setNewsData(validData);
      } catch (err) {
        console.error("Failed to fetch news:", err);
        setError("Gagal memuat berita");
      } finally {
        setLoading(false);
      }
    };
    getNews();
  }, []);

  if (loading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Spinner size="lg" />
        <Text>Loading...</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text color="red.500">{error}</Text>
      </Box>
    );
  }

  return (
    <>
      <Header title={"News"} />
      <ScrollView>
        <Box py="4" px="4" bg="white">
          <Heading mb="2">Breaking News</Heading>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {newsData.slice(0, 3).map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => navigation.navigate("News Detail", { item })}
              >
                <Box w="72" h="40" mr="4" borderRadius="md" overflow="hidden">
                  <Image
                    source={{ uri: item.image || "https://via.placeholder.com/150" }}
                    alt="Breaking News Image"
                    w="full"
                    h="full"
                  />
                  <Box position="absolute" bottom="0" left="0" p="2" bg="rgba(0,0,0,0.5)" w="full">
                    <Heading color="white" fontSize="sm" numberOfLines={2}>
                      {item.title || "No Title"}
                    </Heading>
                    <Text color="gray.300" fontSize="xs">
                      {item.published || "No Date"}
                    </Text>
                  </Box>
                </Box>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Box>
        <Box py="4" px="4" bg="white">
          <Box flexDirection="row" justifyContent="space-between" alignItems="center" mb="2">
            <Heading>Recommended</Heading>
            <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
              <Text color="gray.700">View All</Text>
            </TouchableOpacity>
          </Box>
          {newsData.slice(4, 8).map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("News Detail", { item })}
            >
              <Box
                flexDirection="row"
                alignItems="center"
                mb="4"
                p="2"
                borderRadius="md"
                borderColor="coolGray.200"
                borderWidth={1}
              >
                <Image
                  source={{ uri: item.image || "https://via.placeholder.com/150" }}
                  alt="Recommended Image"
                  size="lg"
                  borderRadius="md"
                  mr="4"
                />
                <Box flex={1}>
                  <Heading fontSize="sm" mb="1" numberOfLines={2}>
                    {item.title || "No Title"}
                  </Heading>
                  <Text fontSize="xs" color="gray.500">
                    {item.published || "No Date"}
                  </Text>
                </Box>
              </Box>
            </TouchableOpacity>
          ))}
        </Box>
      </ScrollView>
    </>
  );
};

export default Home;
