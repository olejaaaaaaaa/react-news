import axios from "axios";

const BASE_URL = "http://localhost:5173/api/";
const API_KEY = import.meta.env.VITE_API_KEY;

console.log(BASE_URL);
console.log(API_KEY);

export const getNews = async (page_number:number = 1, page_size:number = 10) => {
  try {
    const response = await axios.get(`${BASE_URL}v1/search`, {
      params: {
        apiKey: API_KEY,
        page_number,
        page_size,

      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

