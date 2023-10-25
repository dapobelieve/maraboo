import axios from "axios";
const config = useRuntimeConfig();
export default function useApi() {
  const calculate = async (data) => {
    try {
      const res = await axios.get(
        `${config.public.baseUrl}/calculator/transaction-calculator`,
        {
          params: {
            ...data,
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const exchangeRate = async () => {
    try {
      const res = await axios.get(
        `${config.public.baseUrl}/exchange_rates/exchange_rate?currency=XOF`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const waitList = async (data) => {
    try {
      const res = await axios.post(
        `${config.public.baseUrl}/waitlist/waitlist`,
        {
          ...data,
        }
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    calculate,
    exchangeRate,
    waitList,
  };
}
