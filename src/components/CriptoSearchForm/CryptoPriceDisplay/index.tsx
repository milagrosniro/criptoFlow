import { useMemo } from "react"
import { useCryptoStore } from "../../../store/store"
import Spinner from "../../Spinner"

const CryptoPriceDisplay = () => {
  const cryptoSelected = useCryptoStore((state)=> state.cryptoSelected)
  const loading = useCryptoStore((state)=> state.loading)

  const hasCryptoSelected = useMemo(()=> Object.values(cryptoSelected).length > 0 ,[cryptoSelected])
 
  return (
    <div className="result-wrapper">
        { loading ? <Spinner/> : hasCryptoSelected && <>
        <h2>Quote</h2>
        <div className="result">
    
        <img alt="crypto-image" src={`${import.meta.env.VITE_URL_IMGAPI}/${cryptoSelected.IMAGEURL}`}/>
        <div>

            <p>Price: <span>{cryptoSelected.PRICE}</span></p>
            <p>Daily high: <span>{cryptoSelected.HIGHDAY}</span></p>
            <p>Daily low: <span>{cryptoSelected.LOWDAY}</span></p>
            <p>Last 24 hours: <span>{cryptoSelected.CHANGEPCT24HOUR}</span></p>
            <p>Last update: <span>{cryptoSelected.LASTUPDATE}</span></p>
        </div>

        </div>
        </>
        }

    </div>
  )
}

export default CryptoPriceDisplay