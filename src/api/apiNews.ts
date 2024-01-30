import axios from "axios";
const BASE_URL = "http://localhost:5173/api/";
const API_KEY = import.meta.env.VITE_API_KEY;

console.log(BASE_URL);
console.log(API_KEY);

interface getNewsInterface {
  page_number: number;
  page_size: number;
  category: string | null;
  keywords:string;
}

export const getNews = async ({
  page_number = 1,
  page_size = 10,
  category,
  keywords,
}: getNewsInterface) => {
  try {
    const response = await axios.get(`${BASE_URL}v1/search`, {
      params: {
        apiKey: API_KEY,
        page_number,
        page_size,
        category,
        keywords,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCategory = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/v1/available/categories`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


