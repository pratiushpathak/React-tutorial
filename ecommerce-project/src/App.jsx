import { Routes,Route } from 'react-router'
import { Homepage } from './pages/homePage'
import {CheckoutPage} from './pages/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'

import './App.css'

function App() {


  return (
    
   
   < Routes>
   <Route path="/" element={<Homepage/>}/> 
   <Route path="checkout" element={<CheckoutPage/>}/>
   <Route path="orders" element={<OrdersPage></OrdersPage>}/>
   </Routes>
    
     
  )
}

export default App
