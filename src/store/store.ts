import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getCryptos, getCurrentCryptoPrice } from "../services/CryptoService";
import { CryptoPrice, IState } from "./stores.types";

export const useCryptoStore = create<IState>()(
  devtools((set) => ({
    cryptocurrencies: [],
    cryptoSelected: {} as CryptoPrice,
    loading: false,

    fetchCryptos: async () => {
      set(()=>({loading:true}))
      const cryptocurrencies = await getCryptos();
      set(() => ({ cryptocurrencies }));
      set(()=>({loading:false}))
    },

    fetchData: async (pair) => { 
      set(()=>({loading:true}))
      const cryptoSelected = await getCurrentCryptoPrice(pair);
      set(()=>({cryptoSelected}))
      set(()=>({loading:false}))

      
    },
  }))
);
