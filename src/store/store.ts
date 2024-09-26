import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getCryptos } from "../services/CryptoService";
import { IState } from "./stores.types";

export const useCryptoStore = create<IState>()(
  devtools((set) => ({
    cryptocurrencies: [],

    fetchCryptos: async () => {
      const cryptocurrencies = await getCryptos();
      console.log(cryptocurrencies);
      set(() => ({ cryptocurrencies }));
    },
  }))
);
