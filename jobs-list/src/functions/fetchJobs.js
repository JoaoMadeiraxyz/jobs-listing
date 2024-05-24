import axios from "axios";

const fetchJobs = async () => {
  try {
    const response = await axios.get(
      "https://jobicy.com/api/v2/remote-jobs?count=50&geo=brazil"
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
    throw error;
  }
};

export default fetchJobs;
