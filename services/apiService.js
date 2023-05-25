import axios from "axios";

export async function calculate(data) {
  try {
    let res = await axios.get(
      `https://beta-api.mara.boo/calculator/transaction_calculator`,
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
    `https://beta-api.mara.boo/exchange_rates/exchange_rate?currency=XOF`
  );

  return res.data;
}

export async function waitList(data) {
  let res = await axios.post(`https://beta-api.mara.boo/waitlist/waitlist`, {
    ...data,
  });

  return res.data;
}
