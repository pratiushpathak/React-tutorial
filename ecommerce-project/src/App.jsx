import { Routes,Route } from 'react-router'
import { Homepage } from './pages/homePage'
import {CheckoutPage} from './pages/CheckoutPage'

import './App.css'

function App() {


  return (
    
   
   < Routes>
   <Route path="/" element={<Homepage/>}/> 
   <Route path="checkout" element={<CheckoutPage/>}/>
   </Routes>
    
     
  )
}

export default App
