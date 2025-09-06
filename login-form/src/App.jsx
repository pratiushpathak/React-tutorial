
import { useState } from "react"

function App()

{


  const[pass,setPass]=useState(false)
  function show()
  {
    setPass(true)
  }

  return(
    <div>
    <h1>Hello, welcome to my website</h1>
    <input className="email" type="text" placeholder="Email"/>
    <br/>
    <input className="pass" type={pass?"text":"password"}placeholder="password"/>
    <button onClick={show}>show</button>
    <br/>
    <button className="lbtn">login</button>
    <button className="sbtn">sighnup</button>

    </div>
  )
}

export default App
