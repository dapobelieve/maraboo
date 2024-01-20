import axios from "axios";
const config = useRuntimeConfig();
export default function useApi() {
  const calculate = async (data) => {
    try {
      const res = await axios.get(
        `https://api.mara.boo/calculator/transaction-calculator`,
        {
          headers: {
            "X-Origin": "admin.mara.boo",
          },
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
        `https://api.mara.boo/exchange_rates/exchange_rate?currency=XOF`,
        {
          headers: {
            "X-Origin": "admin.mara.boo",
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const waitList = async (data) => {
    try {
      const res = await axios.post(
        `https://api.mara.boo/waitlist/waitlist`,
        {
          ...data,
        },
        {
          headers: {
            "X-Origin": "admin.mara.boo",
          },
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
