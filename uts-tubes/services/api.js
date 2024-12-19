import axios from "axios";
const BASE_URL = "https://api.currentsapi.services/v1/latest-news";

export const fetchNews = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        category: "health",
        apiKey: "lgTI544-51UpEg5ThNjSpxXpx9g6TEbTP2QKq8mS-wzU-upM",
      },
    });
    console.log("Fetched Data:", response.data.news);
    return response.data.news;
  } catch (error) {
    console.error("Error fetching news:", error.response?.data || error.message);
    throw error;
  }
};
