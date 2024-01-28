import axios from "axios";

const BASE_URL = "http://localhost:5173/api/";
const API_KEY = import.meta.env.VITE_API_KEY;

console.log(BASE_URL);
console.log(API_KEY);

export const getNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}v1/latest-news`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

