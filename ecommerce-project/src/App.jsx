import { Routes,Route } from 'react-router'
import { Homepage } from './pages/homePage'

import './App.css'

function App() {


  return (
    
   
   < Routes>
   <Route path="/" element={<Homepage/>}/> 
   <Route path="checkout" element={<div>Ttest checkout page</div>}/>
   </Routes>
    
     
  )
}

export default App
