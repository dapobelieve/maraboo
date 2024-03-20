import axios from "axios";

const config = useRuntimeConfig();
const defaultUrl = config.public.baseUrl;
export default function useApi() {
  const convert = async (data) => {
    try {
      const res = await axios.get(`calculator/transaction-calculator`, {
        headers: {
          "X-Origin": "admin.mara.boo",
        },
        params: {
          ...data,
        },
      });
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const exchangeRate = async (currency) => {
    try {
      const res = await axios.get(
        `${defaultUrl}exchange_rates/exchange_rate?currency=${currency}`,
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

  const paymentServices = async () => {
    const res = await axios.get(`${defaultUrl}service-inventory`, {
      headers: {
        "X-Origin": "admin.mara.boo",
      },
    });
    return res.data;
  };

  const waitList = async (data) => {
    try {
      const res = await axios.post(
        `${defaultUrl}waitlist/waitlist`,
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
    convert,
    exchangeRate,
    waitList,
    paymentServices,
  };
}
