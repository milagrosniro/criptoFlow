import { useEffect } from "react"
import CriptoSearchForm from "./components/CriptoSearchForm"
import CryptoPriceDisplay from "./components/CriptoSearchForm/CryptoPriceDisplay"
import { useCryptoStore } from "./store/store"

const App = () => {
 const fetchCryptos =  useCryptoStore((state)=> state.fetchCryptos)


  useEffect(()=>{
    fetchCryptos()
  },[])
  
  return (
    <>
    <div className='container'>
      <h1 className='app-title'>Cryptocurrency <span>Quoter</span></h1>
      <div className="content">
        <CriptoSearchForm/>
        <CryptoPriceDisplay/>

      </div>
    </div>
    </>
  )
}

export default App
