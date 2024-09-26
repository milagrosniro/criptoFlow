import { useState } from "react"
import { currencies } from "../../data"
import { useCryptoStore } from "../../store/store"
import { IPairState } from "./criptoSearchForm.types"
import ErrorMsg from "./ErrorMsg"

const CriptoSearchForm = () => {
  const cryptoCurrencies = useCryptoStore((state)=> state.cryptocurrencies)
  const getData = useCryptoStore((state) => state.fetchData)
  // const cryptoSelected = useCryptoStore((state)=> state.cryptoSelected)


  const [pair, setPair] = useState<IPairState>({
    currency:'',
    cryptoCurrency:''
  })

  const [error, setError] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
    setPair({...pair, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    if(Object.values(pair).includes('') || Object.values(pair).includes(' ')){
      setError('All fields are required')
    }else{
      setError('');
      getData(pair);
    }


  }


  return (
    <form className="form" onSubmit={handleSubmit}>
      {error && <ErrorMsg>{error}</ErrorMsg>}
        <div className="field">
            <label htmlFor="currency">Currency: </label>
            <select 
            name="currency" 
            id="currency"
            value={pair.currency}
            onChange={handleChange}
            >

            <option value={''} disabled>--Select Coin--</option>
            { currencies.map((currency) => <option key={currency.code} value={currency.code}>{currency.name}</option>) }
            </select>

        </div>

        <div className="field">
            <label htmlFor="cryptoCurrency">CryptoCurrency: </label>
            <select name="cryptoCurrency" id="cryptoCurrency" value={pair.cryptoCurrency}
            onChange={handleChange}
            >

            <option value={""} disabled>--Select cryptocurrency--</option>
            { cryptoCurrencies.map((crypto) => <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}</option>) }

            </select>

        </div>
        <input
        type="submit" value={'Quote'}/>
    </form>
  )
}

export default CriptoSearchForm