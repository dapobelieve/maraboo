import axios from "axios";

export async function calculate(data) {
  try {
    console.log(data.method);
    const { method, from_currency, send_amount, receive_amount } = data;
    let res = await axios.get(
      `https://www.api.dev.mara.boo/calculator/transaction_calculator`,
      {
        params: {
          ...data,
        },
      }
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

export async function exchangeRate() {
  let res = await axios.get(
    `https://www.api.dev.mara.boo/exchange_rates/exchange_rate?currency=XOF`
  );

  return res.data;
}
