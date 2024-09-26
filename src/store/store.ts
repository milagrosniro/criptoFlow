import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getCryptos, getCurrentCryptoPrice } from "../services/CryptoService";
import { CryptoPrice, IState } from "./stores.types";

export const useCryptoStore = create<IState>()(
  devtools((set) => ({
    cryptocurrencies: [],
    cryptoSelected: {} as CryptoPrice,

    fetchCryptos: async () => {
      const cryptocurrencies = await getCryptos();
      set(() => ({ cryptocurrencies }));
    },

    fetchData: async (pair) => {
      const cryptoSelected = await getCurrentCryptoPrice(pair);
      set(()=>({cryptoSelected}))
      
    },
  }))
);
