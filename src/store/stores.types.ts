import { z } from "zod";
import { IPairState } from "../components/CriptoSearchForm/criptoSearchForm.types";
import { CryptoCurrencyResponseSchema, CryptoPriceSchema, CurrencySchema } from "../schemas/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>

export interface IState{
    cryptocurrencies : CryptoCurrency[],
    cryptoSelected: CryptoPrice;
    fetchCryptos: () =>Promise<void>,
    fetchData: (pair: IPairState) =>Promise<void>,
}