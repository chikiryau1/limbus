import OpenAPI from '@tinkoff/invest-openapi-js-sdk';
import { TOKEN, URL, SOCKET_URL } from './config';

const api = new OpenAPI({ apiURL: URL, secretToken: TOKEN, socketURL: SOCKET_URL });

const figiExamples = {
  starbucks: 'BBG000CTQBF3',
  usd: 'BBG0013HGFT4',
  caterpillar: 'BBG000BF0K17',
};

export const botStart = async function start(): Promise<void> {
  // const accounts = await api.accounts();
  // const currencies = await api.currencies();
  // await api.setCurrenciesBalance({ balance: 1000, currency: 'USD' });
  const order = await api.marketOrder({ figi: figiExamples.staperation: 'Buy' });
  const info = await api.instrumentPortfolio({ figi: figiExamples.starbucks });
  console.log(order, info, await api.accounts());
};
