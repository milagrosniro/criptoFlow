import axios from "axios";
import { IPairState } from "../components/CriptoSearchForm/criptoSearchForm.types";
import { CryptoCurrenciesResponseSchema, CryptoPriceSchema } from "../schemas/crypto-schema";

const url_cryptoApi = import.meta.env.VITE_URL_CRYPTOAPI

export const getCryptos = async () => {
    const urlGetCryptos =
      `${url_cryptoApi}/data/top/mktcapfull?limit=20&tsym=USD`;
    const {
      data: { Data },
    } = await axios(urlGetCryptos);
    const result = CryptoCurrenciesResponseSchema.safeParse(Data);
    if (result.success) {
      return result.data;
    }
  };

  export const getCurrentCryptoPrice = async (pair : IPairState) =>{
    const url = `${url_cryptoApi}/data/pricemultifull?fsyms=${pair.cryptoCurrency}&tsyms=${pair.currency}`
    const {data : {DISPLAY}} = await axios(url)
    const result = CryptoPriceSchema.safeParse(DISPLAY[pair.cryptoCurrency][pair.currency])
    if(result.success) return result.data
  }