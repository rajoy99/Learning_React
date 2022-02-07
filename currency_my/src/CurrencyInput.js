import React  from "react"

const CurrencyInput = (props) => {

    return(
        <div className="group">
            <input type='number' value={props.amount} />
            <select value={props.currency}>
            {
                props.currencies.map(currency => (
                    <option value={currency}> {currency} </option>
                ))
            }
            </select>

        </div>
    )

}

export default CurrencyInput