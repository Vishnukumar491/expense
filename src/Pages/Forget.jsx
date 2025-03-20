import React from 'react'
import { Link } from 'react-router-dom'
import './Forget.css'

const Forget = () => {
  const getotp=()=>
  {
  let vi=document.getElementById('Forget-otp')
  vi.style.display = 'block'
    let a=document.getElementById('send')
    let b=document.getElementById('otp')
    let time=30
    a.disabled=true;
    
        const timeout=setInterval(()=>{
            b.innerText=`Resend otp in ${time}sec`
            time--;

            if(time<=0)
            {
                clearInterval(timeout)
                a.disabled=false;
                b.innerText=""
            }
          }
    ,1000)
    }
  
  return (
    <div>
      <div className="container">
        <div className='Forget'>
            <h2 className='forget-head'>Forget Password?</h2>
            <label>Email:</label>
            <br />
            <br />
            <input type="email" />
            <button id='send' onClick={getotp}>Send OTP</button>
            <br />
            <br />
            <div id='Forget-otp'>
                <label>OTP:</label>
                <br />
                <br />
                <input type="text" />
                <br />
                <p id='otp'></p>
                <br />
            </div>
            <Link to="/" className="forget-button">Submit</Link>
        </div>
    </div>
    </div>
  )
}

export default Forget;