
import './App.css'
import { TextField } from '@mui/material'
import {Button} from '@mui/material'
import { useState } from 'react'
function App() {
  /* js code */
  //states to store the data from input files
  const[principle,setPrinciple]= useState(0)
  const[rate,setRate]= useState(0)
  const[year,setYear]= useState(0)

  /* validation */
  const[isPrinciple,SetisPrinciple]= useState(true)
  const[isRate,setisRate]=useState(true)
  const[isYear,setisYear]=useState(true)
  const[isTrue, setistrue]=useState(true)

  const Validate=(e)=>{
   const {name, value} =e.target
   console.log(name);
   console.log(value);

  /* reg expre= /^[0-9]*$   */
  /* match()--to check the pattern matchs the value or else returns null */
  // console.log(value.match(/^[0-9]+$/));
  /* !! -> to covert into boolean */
  if (!!value.match(/^[0-9]+$/)) {
    if (name==='principle') {
      setPrinciple(value)
      SetisPrinciple(true)
    }
    else if (name==='rate') {
      setRate(value)
      setisRate(true)

    }
    else{
      setYear(value)
      setisYear(true)
    }
  } else {
    
if (name==='principle') {
  setPrinciple(value)
  setisPrinciple(false)
  }

else if(name==='rate'){
  setRate(value)
  setisRate(false)
}

else{
  setYear(value)
  setisYear(false)
}
  }

  }


  const handleReset=()=>{
setPrinciple(0)
setRate(0)
setYear(0)
setisPrinciple(true)
setisRate(true)
setisYear(true)
  }
  handleCalculate =(e)=>{
    e.preventDefault()
    setInterest((principle*rate*year)/100)
  }

  return (
    /* jsx */
    <>
<div s tyle={{height:'100vh'}} className='bg-dark d-flex justify-content-center align-items-center'>
<div className='bg-light p-5 rounded' style={{height:'550px'}}>
<h1>Simple Interest</h1>
<p>Calculate your Simple Interest </p>
<div style={{height:'100px'}} className='bg-warning rounded mt-5 d-flex justify-content-center align-items-center flex-column'>
  <h2>₹ 100</h2>
 <p>Total Simple Interest</p> 
</div>


<form onSubmit={handleCalculate} >
  <div className="mb-3 mt-3">
  <TextField id="outlined-basic" value={principle || ""} name='principle' onChange={(e)=>Validate(e)} label="₹ Principle Amount" variant="outlined" className='w-100' />
{!isPrinciple &&
  <p className='text-danger'>*Invalid Input</p>}
  </div>
  <div className="mb-3 mt-3">
  <TextField id="outlined-basic" value={rate || ""} name='rate' onChange={(e)=>Validate(e)} label="Rate of Interest (p.a%)" variant="outlined" className='w-100' />
  {!isRate &&
  <p className='text-danger'>*Invalid Input</p>}
  </div>
  <div className="mb-3 mt-3">
  <TextField id="outlined-basic" value={year || ""} name='year' onChange={(e)=>Validate(e)} label="Year" variant="outlined" className='w-100' />
  {!isYear &&
  <p className='text-danger'>*Invalid Input</p>}
  </div>
  <div className="mb-3 d-flex justify-content-between">
  <Button variant="contained" color='success' size='large' style={{height:'40px', width:'170px'}} disabled={principle && rate && year ?false:true} >CALCULATE</Button> 
  <Button variant="outlined" onClick={handleReset} color='info' size='large' style={{height:'40px', width:'170px'}}>RESET</Button>
  </div>
</form>


</div>
</div>
    </>
  )
}

export default App

