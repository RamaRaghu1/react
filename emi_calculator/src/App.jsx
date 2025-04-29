import { useState } from 'react'
import './App.css'

function App() {
  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(0)
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState(0)
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  return (
    <div className='App'>
      <span className='title' style={{ fontSize: 30, marginTop: 20 }}>Emi Calculator</span>

      <span className='title'>Total Cost of Asset</span>
<input type="number" value={cost} onChange={(e)=>setCost(e.target.value)} 
placeholder='Total Cost of Asset'/>

<span className='title'>Interest Rate (in %)</span>
<input type="number" value={interest} onChange={(e)=>setInterest(e.target.value)} 
placeholder='Interest Rate (in %)'/>

<span className='title'>Processing Fee (in %)</span>
<input type="number" value={fee} onChange={(e)=>setFee(e.target.value)} 
placeholder='Processing Fee (in %)'/>

<span>Down Payment</span>
<span>Loan per Month</span>
<span>Loan per Month</span>

    </div>
  )
}

export default App
