import { currencies } from "../../data"

const CriptoSearchForm = () => {
  return (
    <form className="form">
        <div className="field">
            <label htmlFor="coin">Coin: </label>
            <select name="coin" id="coin">

            <option value={""}>--Select Coin--</option>
            {
                currencies.map((currency) => <option key={currency.code} value={currency.code}>{currency.name}</option>)
            }
            </select>

        </div>

        <div className="field">
            <label htmlFor="criptocurrency">Criptocurrency: </label>
            <select name="criptocurrency" id="criptocurrency">

            <option value={""}>--Select cryptocurrency--</option>
            </select>

        </div>
        <input
        type="submit" value={'Quote'}/>
    </form>
  )
}

export default CriptoSearchForm