import logo from './logo.svg';
import './App.css';
import CurrencyInput from './CurrencyInput'
import { useState,useEffect } from 'react';
import axios from 'axios'

const curlist=['as','sb','las']






function App() 
{

const [amount1,setamount1]= useState(1)
const [amount2,setamount2]= useState(1)
const [currency1,setcurrency1]=useState('USD')
const [currency2,setcurrency2]=useState('USD')
const [rates,setrates]=useState([])


  useEffect(
    ()=>{
      axios
      .get(KEY)
      .then(response => {
        setrates(response.data.rates)
      })

    },[])


  return (
    <div className="App">
      <CurrencyInput currencies={Object.keys(rates)} amount={amount1} currency={currency1}/>
      <CurrencyInput currencies={Object.keys(rates)} amount={amount2}  currency={currency2}/>
    </div>
  );
}

export default App;
